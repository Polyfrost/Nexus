import fs from 'node:fs';
import process from 'node:process';
import generator from '@babel/generator';
import parser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import { bcp47Normalize } from 'bcp-47-normalize';
import kleur from 'kleur';
import type { PromptObject } from 'prompts';
import prompts from 'prompts';

const skip = (...message: string[]) => console.log(kleur.gray().dim('•'), ...message.map(kleur.gray));
const done = (...message: string[]) => console.log(kleur.bold().green('✔︎'), ...message);
const resolve = (path: string) => new URL(path, import.meta.url);

class LanguageScaffolder {
	#tag = '';
	#name = '';
	#dir: 'rtl' | 'ltr' | '' = '';
	#dirty = false;

	async run() {
		try {
			await this.#collectInputs();
			this.#updateLanguagesList();
			this.#createDirectories();
			this.#createStubs();

			if (this.#dirty) {
				console.log(kleur.bold().green(`\nScaffolded i18n files for ${this.#name}!`));
				console.log('You can now edit the generated files and commit them.\n');
			}
			else {
				console.log(kleur.bold().gray(`\n${this.#name} was already setup. No changes made.\n`));
			}
		}
		catch (err: unknown) {
			const error = err as Error;
			console.error(`\n${kleur.bold().red().inverse(' ERROR ')}`, error, `\n`);
			process.exit(1);
		}
	}

	async #collectInputs() {
		const questions: Array<PromptObject<string>> = [
			{
				type: 'text',
				name: 'tag',
				message: `language tag ${kleur.reset('(e.g. en, pt-BR, etc.')}`,
				validate: (tag: string) => {
					let warning = tag ? 'invalid language tag' : 'language tag is required';
					const normalized = bcp47Normalize(tag, {
						warning: (reason, code) => (warning = `error ${code}: ${reason}`),
					});

					if (normalized)
						return true;

					return `${kleur.reset('[press enter to resubmit]')} ${kleur.red().italic(warning)}`;
				},
				format: (tag: string) => bcp47Normalize(tag)?.toLowerCase(),
			},
			{
				type: 'text',
				name: 'name',
				message: `language name ${kleur.reset('(e.g. English, Portuguěs do Brasil, etc.)')}`,
				validate: (name: string) => name ? true : `${kleur.reset('[press enter to resubmit]')} ${kleur.red().italic('please enter a languge name.')}`,
				format: (value: string) => value.trim(),
			},
			{
				type: 'select',
				name: 'dir',
				message: 'writing direction',
				choices: [
					{ title: 'Left-to-right', description: '(e.g. English, Russian, etc.)', value: 'ltr' },
					{ title: 'Right-to-left', description: '(e.g. Arabic, Hebrew, etc.)', value: 'rtl' },
				],
			},
			{
				type: 'confirm',
				name: 'confirm',
				message: (_, { tag, name }) => `scaffold i18n fles for ${kleur.bold().underline(name)} (${kleur.bold(tag)})?`,
				initial: true,
			},
		];

		const { tag, name, dir, confirm } = await prompts(questions);
		console.log();

		this.#tag = tag;
		this.#name = name;
		this.#dir = dir;

		if (!confirm)
			process.exit(0);
	}

	#updateLanguagesList() {
		const stringToAST = (code: string) => parser.parse(code, { sourceType: 'unambiguous', plugins: ['typescript'] });
		const ASTtoString = (ast: t.Node) => generator(ast).code;

		const languagesPath = '../src/i18n/languages.ts';
		const source = fs.readFileSync(resolve(languagesPath), { encoding: 'utf-8' });
		const ast = stringToAST(source);
		let existsAlready = false;

		traverse(ast, {
			ExportDefaultDeclaration: (path) => {
				const defaultExport = path.node.declaration;

				if (!t.isObjectExpression(defaultExport))
					throw new Error(`expected default export of ${languagesPath} to be an object expression. got ${defaultExport.type}`);

				for (const prop of defaultExport.properties) {
					if (!t.isObjectProperty(prop))
						continue;

					const key = t.isStringLiteral(prop.key)
						? prop.key.value
						: t.isIdentifier(prop.key)
							? prop.key.name
							: undefined;
					if (key !== this.#tag)
						continue;

					existsAlready = true;

					if (!t.isStringLiteral(prop.value))
						throw new Error(`expected ${languagesPath} to have a string literal value for property ${kleur.bold(key)}`);

					const { value } = prop.value;
					this.#name = value;
					skip(`tag ${kleur.bold(key)} found in ${languagesPath}, using existing name ${kleur.bold(value)}...`);
				}

				if (!existsAlready) {
					const newProperty = t.objectProperty(
						t.stringLiteral(this.#tag),
						t.stringLiteral(this.#name),
					);
					defaultExport.properties.push(newProperty);
				}
			},
			ExportNamedDeclaration: (path) => {
				if (this.#dir !== 'rtl')
					return;

				const namedExport = path.node.declaration;
				if (!t.isVariableDeclaration(namedExport))
					return;

				const declarator = namedExport.declarations[0];
				if ((declarator.id as any).name !== 'rtlLanguages')
					return;

				const langArray = (declarator.init as any).arguments[0];
				if (!t.isArrayExpression(langArray))
					return;

				const existsAlready = langArray.elements.includes((this.#tag as any));
				if (!existsAlready)
					langArray.elements.push(t.stringLiteral(this.#tag));
			},
		});

		if (!existsAlready) {
			const newCode = ASTtoString(ast);
			fs.writeFileSync(resolve(languagesPath), newCode, { encoding: 'utf-8' });
			done('updated languages list', kleur.bold(languagesPath));
			this.#dirty = true;
		}
	}

	#createDirectories() {
		this.#mkdir(`../src/i18n/${this.#tag}`);
		this.#mkdir(`../src/content/docs/${this.#tag}`);
	}

	#createStubs() {
		for (const { getPath, getStub } of LanguageScaffolder.stubs)
			this.#safeWrite(getPath(this.#tag), getStub());
	}

	#mkdir(path: string) {
		try {
			fs.mkdirSync(resolve(path));
		}
		catch (e: any) {
			if (e.code !== 'EEXIST')
				throw e;
		}
	}

	#safeWrite(path: string, data: string) {
		try {
			fs.writeFileSync(resolve(path), data, { encoding: 'utf-8', flag: 'wx' });
			done('created file', kleur.bold(path.replace('../', '')));
			this.#dirty = true;
		}
		catch (e: any) {
			if (e.code !== 'EEXIST')
				throw e;
			skip('skipped file', path.replace('../', ''), kleur.dim('(already exists)'));
		}
	}

	static stubs = [
		{
			getPath: (tag: string) => `../src/i18n/${tag}/ui.ts`,
			getStub: () => `import { UIDictionary } from '../translation';

export default UIDictionary({

});
`,
		},
		{
			getPath: (tag: string) => `../src/i18n/${tag}/nav.ts`,
			getStub: () => `import { NavDictionary } from '../translation';

export default NavDirectory({
	'startHere': 'START-HERE-TRANSLATION',
	'getting-started': 'GETTING-STARTED-TRANSLATION',
});
`,
		},
		{
			getPath: (tag: string) => `../src/i18n/${tag}/docsearch.ts`,
			getStub: () => `import { DocSearchDictionary } from '../translation';

export default DocSearchDictionary({
	button: 'SEARCH-TRANSLATION',
});
`,
		},
		{
			getPath: (tag: string) => `../src/content/docs/${tag}/getting-started.mdx`,
			getStub: () => `---

title: GETTING-STARTED-TITLE-TRANSLATION
description: DESCRIPTION-TRANSLATION
---

GETTING-STARTED-PAGE-TRANSLATION
`,
		},
	];
}

const scaffolder = new LanguageScaffolder();
await scaffolder.run();
