import type docsearch from '@docsearch/js';
import enNav from './en/nav';
import type enUI from './en/ui';
import type { allLanguages } from './languages';

type ModalTranslations = NonNullable<Parameters<typeof docsearch>[0]['translations']>['modal'];

export type UIDictionaryKeys = keyof typeof enUI;
export type UIDict = Partial<typeof enUI>;
export type UILanguageKeys = keyof typeof allLanguages;

export const UIDictionary = (dict: Partial<typeof enUI>) => dict;

type NavDictionaryKeys = (typeof enNav)[number]['key'];
export type NavDict = Array<
	{
		text: string;
		key: NavDictionaryKeys;
		labelIsTranslated: boolean;
		isFallback?: boolean;
	} & ({ slug: string } | { header: true; type: 'learn' | 'api' })
>;

export function NavDictionary(dict: Partial<Record<NavDictionaryKeys, string>>) {
	const orderedDictionary: NavDict = [];
	for (const enEntry of enNav) {
		const text = dict[enEntry.key] || enEntry.text;
		orderedDictionary.push({ ...enEntry, text, labelIsTranslated: !!dict[enEntry.key] });
	}
	return orderedDictionary;
}

export interface DocSearchTranslation {
	button?: string;
	shortcutLabel?: string;
	resultsFooterLede?: string;
	resultsFooterDiscord?: string;
	placeholder?: string;
	modal?: ModalTranslations;
}

export const DocSearchDictionary = (dict: DocSearchTranslation) => dict;
