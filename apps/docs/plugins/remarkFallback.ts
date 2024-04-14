import * as fs from 'node:fs';
import * as path from 'node:path';
import type { Root } from 'mdast';
import type { Plugin, Transformer } from 'unified';
import { visit } from 'unist-util-visit';

export function remarkFallbackLang(): Plugin<[], Root> {
	const pageSourceDir = path.resolve('./src/content/docs');
	const baseUrl = 'https://docs.polyfrost.org/';

	const transformer: Transformer<Root> = (tree, file) => {
		const pageUrl = mdFilePathToUrl(file.path, pageSourceDir, baseUrl);
		const pageLang = getLanguageCodeFromPathname(pageUrl.pathname);

		// Ignore pages without language prefix and English pages
		if (!pageLang || pageLang === 'en')
			return;

		visit(tree, 'link', (link) => {
			const linkUrl = new URL(link.url, pageUrl);
			if (pageUrl.host !== linkUrl.host)
				return;
			const linkLang = getLanguageCodeFromPathname(linkUrl.pathname);
			if (!linkLang)
				return;
			const linkSourceFileName = tryFindSourceFileForPathname(linkUrl.pathname, pageSourceDir);
			if (linkSourceFileName)
				return;
			link.children.push({
				type: 'html',
				value: `&nbsp;(EN)`,
			});
		});
	};

	return function attacher() {
		return transformer;
	};
}

export function mdFilePathToUrl(mdFilePath: string, pageSourceDir: string, baseUrl: string) {
	const pathBelowRoot = path.relative(pageSourceDir, mdFilePath);
	const pathname = pathBelowRoot.replace(/\\/g, '/').replace(/\.mdx?$/i, '/');

	return new URL(pathname, baseUrl);
}

export function getLanguageCodeFromPathname(pathname: string) {
	const firstPathPart = pathname.split('/')[1];
	if (firstPathPart.match(/^[a-z]{2}(-[a-zA-Z]{2})?$/))
		return firstPathPart;
}

export function tryFindSourceFileForPathname(pathname: string, pageSourceDir: string) {
	const possibleSourceFilePaths = [
		`${path.join(pageSourceDir, pathname, '.')}.md`,
		path.join(pageSourceDir, pathname, 'index.md'),
		`${path.join(pageSourceDir, pathname, '.')}.mdx`,
		path.join(pageSourceDir, pathname, 'index.mdx'),
	];
	return possibleSourceFilePaths.find(possiblePath => fs.existsSync(possiblePath));
}
