import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { defineConfig } from 'astro/config';
import postcssNesting from 'tailwindcss/nesting';

// https://astro.build/config
export default defineConfig({
	site: 'https://polyfrost.org',
	integrations: [
		tailwind(),
		mdx(),
		sitemap(),
	],
	vite: {
		css: {
			postcss: {
				plugins: [postcssNesting()],
			},
		},
	},
});
