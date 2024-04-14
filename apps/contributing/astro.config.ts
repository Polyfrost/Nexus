import process from 'node:process';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import linksValidator from 'starlight-links-validator';
import unocss from 'unocss/astro';

// check if we are running on vercel and the vercel uri.
const VERCEL_PREVIEW_SITE
	= process.env.VERCEL_ENV !== 'production'
	&& process.env.VERCEL_URL
	&& `https://${process.env.VERCEL_URL}`;

const site = VERCEL_PREVIEW_SITE || 'https://contribute.polyfrost.org/';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		unocss({
			injectReset: true,
		}),
		starlight({
			// plugins: [linksValidator()],
			title: 'Polyfrost Docs²',
			social: {
				github: 'https://github.com/polyfrost/nexus',
				twitter: 'https://twitter.com/polyfrost',
				discord: 'https://polyfrost.org/discord',
				mastodon: 'https://floss.social/@polyfrost',
			},
			editLink: {
				baseUrl: 'https://github.com/polyfrost/nexus/edit/main/apps/contributing/',
			},
			customCss: ['./src/styles/theme.css'],
			components: {
				Head: './src/components/Head.astro',
			},
			logo: {
				dark: './src/assets/logo-dark.svg',
				light: './src/assets/logo-light.svg',
				replacesTitle: true,
			},
			head: [
				{
					tag: 'script',
					attrs: {
						'src': 'https://analytics.polyfrost.org/js/script.js',
						'data-domain': 'contributing.polyfrost.org',
						'defer': true,
					},
				},
			],
			sidebar: [
				{ label: 'Welcome', link: '/welcome/' },
				{ label: 'First-time Contributors', autogenerate: { directory: 'first-time' } },
				{
					label: 'Guides',
					items: [
						{ label: 'Adding docs for a new feature', link: '/guides/new-feature-docs/' },
						{ label: 'Adding Translations for Polyfrost docs', link: '/guides/i18n-docs/' },
						// { label: 'Adding Translations for OneConfig', link: '/guides/i18n-oneconfig' },
					],
				},
			],
		}),
	],
});
