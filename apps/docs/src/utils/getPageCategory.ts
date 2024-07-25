const defaultCategory = 'Learn';

const categories = [
	['errors/', 'Error Reference'],
	['reference/', 'Reference'],
	['tutorial/', 'Tutorials'],
] as const;

export function getPageCategory(url: { pathname: string }) {
	const langAgnosticPath = url.pathname.replace(/\/\w\w(-\w\w)?\//, '');
	for (const [path, label] of categories)
		if (langAgnosticPath.startsWith(path))
			return label;

	return defaultCategory;
}
