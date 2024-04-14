import type { CollectionEntry } from 'astro:content';

export function getLanguageFromURL(pathname: string) {
	const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
	return langCodeMatch ? langCodeMatch[1] : 'en';
}

export const removeLeadingSlash = (path: string) => path.replace(/^[/\\]+/, '');
export const removeTrailingSlash = (path: string) => path.replace(/[/\\]+$/, '');
export const stripLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) => slug.split('/').slice(1).join('/');
export const getLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) => slug.split('/')[0];
