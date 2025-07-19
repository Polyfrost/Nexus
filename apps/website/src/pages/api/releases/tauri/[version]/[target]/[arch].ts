import type { APIRoute } from 'astro';
import { getLatestRelease, getRecentReleases, getRelease, gitHubFetch } from '@utils/github';
import { z } from 'astro/zod';

// TODO What is this???

export const prerender = false;
const version = z.union([z.literal('stable'), z.literal('alpha')]);
const tauriTarget = z.union([z.literal('linux'), z.literal('windows'), z.literal('darwin')]);
const tauriArch = z.union([z.literal('x86_64'), z.literal('aarch64')]);

const paramsSchema = z.object({
	target: tauriTarget,
	arch: tauriArch,
	version: version.or(z.string()),
});

interface TauriResponse {
	version: string;
	pub_date: string;
	url: string;
	signature: string;
	notes: string;
};

export const GET: APIRoute = async ({ request, params }) => {
	const parsedParams = await paramsSchema.parseAsync({
		...params,
		version: request.headers.get('X-OneLauncher-Version') ?? params.version,
	});

	const release = await fetchRelease(parsedParams);
	if (!release || !release.published_at)
		return Response.json({ error: 'Relesae not found' }, { status: 404 });

	const asset = release.assets.find(({ name }) => name === binaryName(parsedParams));
	if (!asset)
		return Response.json({ error: 'Asset not found' }, { status: 404 });

	const signatureAsset = release.assets.find(({ name }) => name === `${binaryName(parsedParams)}.sig`);
	if (!signatureAsset)
		return Response.json({ error: 'Signature asset not found' }, { status: 404 });

	const signature = await fetch(signatureAsset.browser_download_url).then(r => r.text());

	const response: TauriResponse = {
		version: release.tag_name,
		url: asset.browser_download_url,
		signature,
		notes: release.body ?? '',
		pub_date: release.published_at,
	};

	return Response.json(response);
};

async function fetchRelease({ version }: z.infer<typeof paramsSchema>) {
	switch (version) {
		case 'alpha': {
			const data = await gitHubFetch(getRecentReleases);
			return data.find(d => d.tag_name.includes('alpha'));
		}
		case 'stable':
			return gitHubFetch(getLatestRelease);
		default:
			return gitHubFetch(getRelease(version));
	}
}

function binaryName({ target, arch }: z.infer<typeof paramsSchema>) {
	const ext = extensionForTarget(target);
	return `OneLauncher-Updater-${target}-${arch}.${ext}`;
}

function extensionForTarget(target: z.infer<typeof tauriTarget>) {
	if (target === 'windows')
		return 'zip';
	else return 'tar.gz';
}
