import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { defineConfig } from 'astro/config';
import postcssNesting from 'tailwindcss/nesting';

import icons from 'unplugin-icons/vite';
import { IconSet } from '@iconify/tools';

import polyiconsRaw from '@polyfrost/assets/export/polyicons.json';

const iconSet = new IconSet(polyiconsRaw);

// https://astro.build/config
export default defineConfig({
	site: 'https://polyfrost.org',
	integrations: [
		tailwind(),
		mdx(),
		sitemap(),
	],
	vite: {
		plugins: [
			icons({
				compiler: 'astro',
				customCollections: {
					polyicons: async (name) => {
						return iconSet.toString(name) ?? undefined;
					},
				},
			}),
		],
		ssr: {
			noExternal: ['smartypants'],
		},
		css: {
			postcss: {
				plugins: [postcssNesting()],
			},
		},
	},
});
