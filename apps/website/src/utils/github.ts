import type { components } from '@octokit/openapi-types';

type Release = components['schemas']['release'];

const FETCH_META = {
	headers: new Headers({
		'Accept': 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	}),
};

if (import.meta.env.GITHUB_PAT)
	FETCH_META.headers.set('Authorization', `Bearer ${import.meta.env.GITHUB_PAT}`);

export const RELEASES_PATH = `/repos/pulseflow/petal/releases`;

interface FetchConfig<T> {
	path: string;
	_type?: T;
}

export const getRecentReleases = { path: RELEASES_PATH } as FetchConfig<Release[]>;
export const getLatestRelease = { path: `${RELEASES_PATH}/latest` } as FetchConfig<Release>;
export const getRelease = (tag: string) => ({ path: `${RELEASES_PATH}/tags/${tag}` }) as FetchConfig<Release>;
export async function gitHubFetch<T>({ path }: FetchConfig<T>): Promise<T> {
	return fetch(`https://api.github.com${path}`, {
		...FETCH_META,
	}).then(r => r.json());
}

export function getReleaseFrontmatter({ body }: Release): {
	frontmatter: Record<string, string>;
	body: string;
} {
	if (!body)
		return { frontmatter: {}, body: '' };

	const lines = body.split('\n');
	const frontmatter: Record<string, string> = {};

	if (lines[0].startsWith('<!-- frontmatter')) {
		const endIndex = lines.findIndex(l => l.startsWith('-->'));
		if (!endIndex)
			return { frontmatter: {}, body: '' };

		const [_, ...frontmatterLines] = lines.slice(1, endIndex - 1);

		for (const line of frontmatterLines) {
			const [name, value] = line.split(': ');

			frontmatter[name] = value.trim();
		}
	}

	return { frontmatter, body: lines.join('\n') };
}
