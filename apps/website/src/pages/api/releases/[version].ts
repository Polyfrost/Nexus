import type { APIRoute } from 'astro';
import { getRelease, getReleaseFrontmatter, gitHubFetch } from 'src/data/github';

export const GET: APIRoute = async ({ params }) => {
	const { version } = params;
	const release = await gitHubFetch(getRelease(version!));

	return Response.json({
		...getReleaseFrontmatter(release),
		version: release.tag_name,
		published_at: release.published_at,
	});
};
