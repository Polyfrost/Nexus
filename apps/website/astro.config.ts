import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import cloudflare from '@astrojs/cloudflare';

import { defineConfig, envField } from 'astro/config';
import unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://polyfrost.org',
	adapter: cloudflare(),
	output: 'hybrid',
	integrations: [
		unocss({
			injectReset: true,
		}),
		mdx(),
		sitemap(),
		partytown(),
	],
	vite: {
		ssr: {
			noExternal: ['smartypants'],
		},
	},
	experimental: {
		contentIntellisense: true,
		env: {
			schema: {
				GITHUB_PAT: envField.string({ context: 'server', access: 'public', optional: true }),
			},
		},
	},
});
