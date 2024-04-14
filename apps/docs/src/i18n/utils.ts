import type { AstroGlobal } from 'astro';
import { getLanguageFromURL } from '../utils';
import type {
	DocSearchTranslation,
	NavDict,
	UIDict,
	UIDictionaryKeys,
	UILanguageKeys,
} from './translation';

function mapDefaultExports<T>(modules: Record<string, { default: T }>) {
	const exportMap: Record<string, T> = {};
	for (const [path, module] of Object.entries(modules)) {
		const [_dot, lang] = path.split('/');
		exportMap[lang] = module.default;
	}
	return exportMap;
}

export const translations = mapDefaultExports<UIDict>(
	import.meta.glob('./*/ui.ts', { eager: true }),
);
const docsearchTranslations = mapDefaultExports<DocSearchTranslation>(
	import.meta.glob('./*/docsearch.ts', { eager: true }),
);
export const navTranslations = mapDefaultExports<NavDict>(
	import.meta.glob('./*/nav.ts', { eager: true }),
);

export const fallbackLang = 'en';

export function getDocSearchStrings(Astro: AstroGlobal): DocSearchTranslation {
	const lang = getLanguageFromURL(Astro.url.pathname) || fallbackLang;
	return { ...docsearchTranslations[fallbackLang], ...docsearchTranslations[lang] };
}

export function useTranslations(Astro: Readonly<AstroGlobal>): (key: UIDictionaryKeys) => string {
	const lang = getLanguageFromURL(Astro.url.pathname) || 'en';
	return useTranslationsForLang(lang as UILanguageKeys);
}

export function useTranslationsForLang(lang: UILanguageKeys): (key: UIDictionaryKeys) => string {
	return function getTranslation(key: UIDictionaryKeys) {
		const str = translations[lang]?.[key] || translations[fallbackLang][key];
		if (str === undefined)
			throw new Error(`Missing translation for “${key.toString()}” in “${lang}”.`);
		return str;
	};
}
