import type { CollectionEntry } from 'astro:content';

export function groupPagesByLang<T extends CollectionEntry<'docs'>>(pages: T[]) {
	return pages.reduce(
		(pages, page) => {
			const lang = page.slug.split('/')[0];
			if (!pages[lang])
				pages[lang] = [];
			pages[lang].push(page);
			return pages;
		},
		{} as Record<string, T[]>,
	);
}
