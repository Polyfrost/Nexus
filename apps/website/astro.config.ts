import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';

import icons from 'astro-icon';
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
		icons(),
	],
	vite: {
		ssr: { noExternal: ['smartypants'] },
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
