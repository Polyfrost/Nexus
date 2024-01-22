import process from 'node:process';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

import { defineConfig } from 'astro/config';
import postcssNesting from 'tailwindcss/nesting';

const VERCEL_PREVIEW_SITE
	= process.env.VERCEL_ENV !== 'production'
	&& process.env.VERCEL_URL
	&& `https://${process.env.VERCEL_URL}`;

// https://astro.build/config
export default defineConfig({
	site: VERCEL_PREVIEW_SITE || 'https://polyfrost.org',
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
		ssr: {
			noExternal: ['smartypants'],
		},
	},
	output: 'hybrid',
	adapter: vercel({
		functionPerRoute: false,
	}),
});
