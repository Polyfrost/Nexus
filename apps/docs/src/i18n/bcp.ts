export function normalizeLangTag(tag: string) {
	if (!tag.includes('-'))
		return tag.toLowerCase();
	const [lang, region] = tag.split('-');
	return `${lang.toLowerCase()}-${region.toUpperCase()}`;
}
