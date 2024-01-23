import type { Config } from 'tailwindcss';

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import headlessui from '@headlessui/tailwindcss';
import animate from 'tailwindcss-animate';
import radix from 'tailwindcss-radix';

export const alpha = (varName: string) => `hsla(var(${varName}), <alpha-value>)`;
export const contentExts = `{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,stories.tsx}`;

export default async (app: string, options?: Config): Promise<Config> => {
	const config: Config = {
		content: [
			`../../apps/${app}/src/**/*.${contentExts}`,
			`../../packages/*/src/**/*.${contentExts}`,
			`../../interface/**/*.${contentExts}`,
		],
		darkMode: 'class',
		theme: {
			borderRadius: {
				'none': '0',
				'sm': '3px',
				'md': '5px',
				'lg': '8px',
				'xl': '12px',
				'2xl': '16px',
				'3xl': '20px',
				'4xl': '24px',
				'full': '100vw',
			},
			fontSize: {
				// rem starts at 16px on desktop, 14px on tailwind 'sm' and below
				'xxs': '0.625rem', // 10px
				'xs': '0.75rem', // 12px
				'sm': '0.875rem', // 14px
				'md': '1rem', // 16px
				'lg': '1.125rem', // 18px
				'xl': '1.25rem', // 20px

				'header-sm': '1.5rem', // 24px
				'header': '1.75rem', // 28px
				'header-lg': '2rem', // 32px
				'header-page': '2.25rem', // 36px

				'body-sm': '0.938rem', // 15px
				'body': '1rem', // 16px
				'body-lg': '1.063rem', // 17px
			},
			fontFamily: {
				mono: ['"Roboto Mono"', 'monospace'],
			},
			screens: {
				xs: '475px',
				sm: '650px',
				md: '868px',
				lg: '1024px',
				xl: '1280px',
			},
			extend: {
				colors: {
					'blue': {
						20: 'rgba(223, 236, 253, 1)',
						30: 'rgba(183, 208, 251, 1)',
						50: 'rgba(231, 235, 252, 1)',
						60: 'rgba(0, 72, 197, 1)',
						75: 'rgba(227, 236, 245, 1)',
						100: 'rgba(210, 225, 249, 1)',
						200: 'rgba(189, 215, 249, 1)',
						300: 'rgba(166, 200, 249, 1)',
						400: 'rgba(56, 132, 255, 1)',
						450: 'rgba(37,99,235, 1)',
						500: 'rgba(31, 101, 214, 1)',
						600: 'rgba(9, 84, 165, 1)',
						800: 'rgba(19, 43, 83, 1)',
					},
					'green': {
						300: 'rgba(35, 154, 96, 0.5)',
					},
					'gray': {
						50: 'rgba(240, 242, 244, 1)',
						200: 'rgba(196, 202, 212, 1)',
						400: 'rgba(138, 150, 168, 1)',
						600: 'rgba(42, 44, 48, 1)',
						700: 'rgba(65, 74, 88, 1)',
						800: 'rgba(42, 47, 55, 1)',
					},
					'white': {
						'DEFAULT': 'rgba(255, 255, 255, 1)',
						'1/4': 'rgba(255, 255, 255, 0.25)',
						'light': 'rgba(235, 245, 254, 1)',
					},
					'black': {
						DEFAULT: 'rgba(0, 0, 0, 1)',
					},
					'text': {
						DEFAULT: 'rgba(2, 3, 7, 1)',
						primary: 'rgba(2, 3, 7, 1)',
					},
					// Other
					'navy-peony': 'rgba(32, 55, 91, 1)',
					'blue-gray': 'rgba(119, 143, 183, 1)',
					'primary': {
						100: 'rgba(23, 28, 33, 1)',
						200: 'rgba(50, 74, 245, 1)',
						600: 'rgba(20, 82, 204, 1)',
					},
				},
				zIndex: {
					'navbar': '9999', // Nothing should be above the navbar or backdrop
					'navbar-backdrop': '9998',
				},

				maxHeight: {
					'3/4-screen': '75vh',
					'4/5-screen': '80vh',
				},

				lineHeight: {
					none: '0',
				},

				transitionProperty: {
					filter: 'filter',
				},
				extend: {
					transitionTimingFunction: {
						'css': 'ease',
						'css-in': 'ease-in',
						'css-out': 'ease-out',
						'css-in-out': 'ease-in-out',
						'in-sine': 'cubic-bezier(0.12, 0, 0.39, 0)',
						'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
						'in-out-sine': 'cubic-bezier(0.37, 0, 0.63, 1)',
						'in-quad': 'cubic-bezier(0.11, 0, 0.5, 0)',
						'out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)',
						'in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',
						'in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
						'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
						'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
						'in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
						'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
						'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
						'in-quint': 'cubic-bezier(0.64, 0, 0.78, 0)',
						'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
						'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
						'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
						'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
						'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
						'in-circ': 'cubic-bezier(0.55, 0, 1, 0.45)',
						'out-circ': 'cubic-bezier(0, 0.55, 0.45, 1)',
						'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
						'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
						'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
						'in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
					},
				},
			},
		},
		plugins: [forms, animate, headlessui, radix],

		...options,
	};

	if (app === 'website')
		config.plugins!.push(typography);

	return config;
};
