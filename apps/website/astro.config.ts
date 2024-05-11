import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://polyfrost.org',
	adapter: cloudflare(),
	output: 'server',
	integrations: [
		unocss({
			injectReset: true,
		}),
		mdx(),
		sitemap(),
	],
	vite: {
		ssr: {
			noExternal: ['smartypants'],
		},
	},
});
