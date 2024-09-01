import type { APIRoute } from 'astro';
import { getRecentReleases, getReleaseFrontmatter, gitHubFetch } from '@utils/github';

export const prerender = false;
export const GET: APIRoute = async () => {
	const releases = await gitHubFetch(getRecentReleases);

	return Response.json(
		releases.filter(r => !r.draft).map((r) => {
			return {
				...getReleaseFrontmatter(r),
				version: r.tag_name,
				published_at: r.published_at,
			};
		}),
	);
};
