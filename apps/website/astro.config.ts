import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';

import unocss from 'unocss/astro';
import icons from 'unplugin-icons/vite';

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
		ssr: { noExternal: ['smartypants'] },
		plugins: [icons({ compiler: 'astro' })],
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
