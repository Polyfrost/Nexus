import type { APIRoute } from 'astro';
import { getLatestRelease, getRecentReleases, getRelease, gitHubFetch } from 'src/data/github';
import { z } from 'zod';

const version = z.union([z.literal('stable'), z.literal('alpha')]);
const tauriTarget = z.union([z.literal('linux'), z.literal('windows'), z.literal('darwin')]);
const tauriArch = z.union([z.literal('x86_64'), z.literal('aarch64')]);

const extensions = {
	linux: 'deb',
	windows: 'msi',
	darwin: 'dmg',
} as const satisfies Record<z.infer<typeof tauriTarget>, string>;

const paramsSchema = z.object({
	target: tauriTarget,
	arch: tauriArch,
	version: version.or(z.string()),
});

export const GET: APIRoute = async ({ params, redirect }) => {
	const parsedParams = await paramsSchema.parseAsync(params);

	const release = await (async () => {
		switch (parsedParams.version) {
			case 'alpha': {
				const data = await gitHubFetch(getRecentReleases);
				return data.find(d => d.tag_name.includes('alpha'));
			}
			case 'stable':
				return await gitHubFetch(getLatestRelease);
			default:
				return await gitHubFetch(getRelease(parsedParams.version));
		}
	})();

	if (!release)
		return Response.json({ error: 'Release not found' }, { status: 404 });

	parsedParams.version = release.tag_name;
	const name = `OneLauncher-${parsedParams.target}-${parsedParams.arch}.${extensions[parsedParams.target]}` as const;
	const asset = release.assets?.find(a => a.name === name);
	if (!asset)
		return Response.json({ error: 'Asset not found' }, { status: 404 });

	return redirect(asset.browser_download_url);
};
