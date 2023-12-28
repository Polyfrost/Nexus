import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
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
				500: 'rgba(31, 101, 214, 1)',
				600: 'rgba(9, 84, 165, 1)',
				800: 'rgba(19, 43, 83, 1)',
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
				600: 'rgba(20, 82, 204, 1)',
			},
		},
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
		extend: {
			zIndex: {
				'navbar': '9999', // Nothing should be above the navbar or backdrop
				'navbar-backdrop': '9998',
			},

			maxHeight: {
				'3/4-screen': '75vh',
				'4/5-screen': '80vh',
			},
		},
	},
	plugins: [],
};

export default config;
