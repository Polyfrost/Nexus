import { getCollection } from 'astro:content';
import { isEnglishEntry, isKoreanEntry } from './content/config';

export const allPages = await getCollection('docs', (entry) => {
	if (import.meta.env.PUBLIC_TWO_LANG)
		return isEnglishEntry(entry) || isKoreanEntry(entry);
	else
		return true;
});

export const englishPages = allPages.filter(isEnglishEntry);
