import AstroSitemap from '@astrojs/sitemap';
import type { AstroIntegration } from 'astro';
import { normalizeLangTag } from '../src/i18n/bcp';
import languages from '../src/i18n/languages';

const langTags = Object.keys(languages);

const blocklist = new Set([
	...langTags.map(lang => `/${lang}/`),
]);

const ValidRouteRE = new RegExp(`^/(lighthouse|${langTags.join('|')})/`);
const isValidPath = (path: string) => !blocklist.has(path) && ValidRouteRE.test(path);

export function sitemap(): AstroIntegration {
	return AstroSitemap({
		filter: page => isValidPath(new URL(page).pathname),
		i18n: {
			defaultLocale: 'en',
			locales: Object.fromEntries(langTags.map(lang => [lang, normalizeLangTag(lang)])),
		},
	});
}
