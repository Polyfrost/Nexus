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
					core: FileSystemIconLoader('./assets/core', svg => svg.replaceAll(
						/(fill|stroke)=\"([^"]*)\"/g, '$1="currentColor"',
					)),
					badges: FileSystemIconLoader('./public/branding/badges', svg => svg.replaceAll(
						/(fill|stroke)=\"([^"]*)\"/g, '$1="currentColor"',
					)),
					pages: FileSystemIconLoader('./assets/pages'),
					logos: FileSystemIconLoader('./public/branding/logos'),
					mods: FileSystemIconLoader('./public/branding/mods'),
					oneconfig: FileSystemIconLoader('./public/branding/oneconfig'),
					polyfrost: FileSystemIconLoader('./public/branding/polyfrost'),
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
