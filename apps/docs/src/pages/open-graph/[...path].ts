import process from 'node:process';
import { OGImageRoute } from 'astro-og-canvas';
import { allPages } from '~/content';
import { rtlLanguages } from '~/i18n/languages';
import { getLangFromSlug } from '~/utils';

type OGImageOptions = Awaited<ReturnType<Parameters<typeof OGImageRoute>[0]['getImageOptions']>>;

const paths = process.env.SKIP_OG ? [] : allPages;
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));

export const { getStaticPaths, GET } = OGImageRoute({
	param: 'path',

	pages,

	getImageOptions: async (_, { data, slug }: (typeof pages)[string]): Promise<OGImageOptions> => {
		const isRtl = rtlLanguages.has(getLangFromSlug(slug));

		return {
			title: data.title,
			description: data.description,
			dir: isRtl ? 'rtl' : 'ltr',
			border: { width: 32, side: 'inline-start' },
			padding: 80,
			font: {
				title: {
					size: 72,
					lineHeight: 1.2,
					families: [
						'Inter',
						'Noto Sans',
						'Noto Sans Arabic',
						'Noto Sans SC',
						'Noto Sans TC',
						'Noto Sans JP',
						'Noto Sans KR',
					],
					weight: 'Medium',
					color: [255, 255, 255],
				},
				description: {
					size: 42,
					lineHeight: 1.2,
					families: [
						'Inter',
						'Noto Sans',
						'Noto Sans Arabic',
						'Noto Sans SC',
						'Noto Sans TC',
						'Noto Sans JP',
						'Noto Sans KR',
					],
					weight: 'Normal',
					color: [210, 225, 249],
				},
			},
			fonts: [
				'./src/pages/open-graph/_fonts/inter/inter-400-normal.ttf',
				'./src/pages/open-graph/_fonts/inter/inter-500-normal.ttf',

				'./src/pages/open-graph/_fonts/noto-sans/noto-400-normal.ttf',
				'./src/pages/open-graph/_fonts/noto-sans/noto-500-normal.ttf',

				'./src/pages/open-graph/_fonts/noto-sans/chinese-simplified-400-normal.otf',
				'./src/pages/open-graph/_fonts/noto-sans/chinese-simplified-500-normal.ttf',

				'./src/pages/open-graph/_fonts/noto-sans/chinese-traditional-400-normal.otf',
				'./src/pages/open-graph/_fonts/noto-sans/chinese-traditional-500-normal.ttf',

				'./src/pages/open-graph/_fonts/noto-sans/japanese-400-normal.ttf',
				'./src/pages/open-graph/_fonts/noto-sans/japanese-500-normal.ttf',

				'./src/pages/open-graph/_fonts/noto-sans/arabic-400-normal.ttf',
				'./src/pages/open-graph/_fonts/noto-sans/arabic-500-normal.ttf',

				'./src/pages/open-graph/_fonts/noto-sans/korean-400-normal.otf',
				'./src/pages/open-graph/_fonts/noto-sans/korean-500-normal.ttf',
			],
		};
	},
});
