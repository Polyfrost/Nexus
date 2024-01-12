import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { defineConfig } from 'astro/config';
import postcssNesting from 'tailwindcss/nesting';

import icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

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
					polyicons: FileSystemIconLoader(
						'./public/media/polyfrost',
						svg => svg.replaceAll(/(fill|stroke)=\"([^"]*)\"/g, '$1="currentColor"'),
					),
				},
			}),
		],
		css: {
			postcss: {
				plugins: [postcssNesting()],
			},
		},
	},
});
