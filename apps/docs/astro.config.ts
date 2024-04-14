import process from 'node:process';
import starlight from '@astrojs/starlight';
import unocss from 'unocss/astro';
import { defineConfig, sharpImageService } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';
import starlightLinksValidator from 'starlight-links-validator';
import { makeLocalesConfig } from './config/locales';
import { makeSidebar } from './config/sidebar';

import { sitemap } from './plugins/sitemap';
import { rehypeAutolink } from './plugins/rehypeAutolink';
import { rehypeOptimizeStatic } from './plugins/rehypeOptimize';
import { rehypeTasklistEnhancer } from './plugins/rehypeTasklist';
import { remarkFallbackLang } from './plugins/remarkFallback';

const VERCEL_PREVIEW_SITE
	= process.env.VERCEL_ENV !== 'production'
	&& process.env.VERCEL_URL
	&& `https://${process.env.VERCEL_URL}`;

const site = VERCEL_PREVIEW_SITE || 'https://docs.polyfrost.org/';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Polyfrost Docs',
			customCss: ['./src/styles/custom.css'],
			components: {
				EditLink: './src/components/starlight/EditLink.astro',
				Head: './src/components/starlight/Head.astro',
				Hero: './src/components/starlight/Hero.astro',
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
				TableOfContents: './src/components/starlight/TableOfContents.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				Pagination: './src/components/starlight/Pagination.astro',
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				Search: './src/components/starlight/Search.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
				PageTitle: './src/components/starlight/PageTitle.astro',
			},
			editLink: {
				baseUrl: 'https://github.com/polyfrost/nexus/apps/docs/edit/main/docs',
			},
			defaultLocale: 'en',
			locales: makeLocalesConfig(),
			sidebar: makeSidebar(),
			social: {
				github: 'https://github.com/polyfrost/nexus',
				twitter: 'https://twitter.com/polyfrost',
				discord: 'https://polyfrost.org/discord',
				mastodon: 'https://floss.social/@polyfrost',
			},
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						sizes: '32x32',
					},
				},
				{
					tag: 'script',
					attrs: {
						'src': 'https://analytics.polyfrost.org/js/script.js',
						'data-domain': 'docs.polyfrost.org',
						'defer': true,
					},
				},
			],
			plugins: [starlightLinksValidator()],
		}),
		sitemap(),
		unocss({
			injectReset: true,
		}),
	],
	trailingSlash: 'always',
	scopedStyleStrategy: 'where',
	compressHTML: false,
	markdown: {
		smartypants: false,
		remarkPlugins: [
			[remarkSmartypants, { dashes: false }],
			remarkFallbackLang(),
		],
		rehypePlugins: [
			rehypeSlug,
			...rehypeAutolink(),
			rehypeTasklistEnhancer(),
			rehypeOptimizeStatic,
		],
	},
	image: {
		domains: ['avatars.githubusercontent.com'],
		service: sharpImageService(),
	},
	experimental: {
		directRenderScript: true,
	},
});
