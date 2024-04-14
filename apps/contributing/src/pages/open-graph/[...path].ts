import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

type OGImageOptions = Awaited<ReturnType<Parameters<typeof OGImageRoute>[0]['getImageOptions']>>;

const paths = await getCollection('docs');
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));

export const { getStaticPaths, GET } = OGImageRoute({
	param: 'path',

	pages,

	getImageOptions: async (_, { data }: (typeof pages)[string]): Promise<OGImageOptions> => {
		return {
			title: data.title,
			description: data.description,
			// logo: { path: './src/pages/open-graph/_assets/logo.png' },
			border: { width: 32, side: 'inline-start' },
			padding: 80,
			// bgImage: { path: `./src/pages/open-graph/_assets/background.png` },
			font: {
				title: {
					size: 72,
					lineHeight: 1.2,
					families: ['Inter'],
					weight: 'Medium',
					color: [255, 255, 255],
				},
				description: {
					size: 42,
					lineHeight: 1.2,
					families: ['Inter'],
					weight: 'Normal',
					color: [210, 225, 249],
				},
			},
			fonts: [
				'./src/pages/open-graph/_assets/inter-400-normal.ttf',
				'./src/pages/open-graph/_assets/inter-500-normal.ttf',
			],
		};
	},
});
