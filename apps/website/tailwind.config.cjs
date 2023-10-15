/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			blue: {
				500: 'rgba(31, 101, 214, 1)'
			},
			gray: {
				50: 'rgba(240, 242, 244, 1)',
				400: 'rgba(138, 150, 168, 1)',
				700: 'rgba(65, 74, 88, 1)',
				800: 'rgba(42, 47, 55, 1)'
			},
			white: {
				DEFAULT: 'rgba(255, 255, 255, 1)',
				secondary: 'rgba(238, 241, 254, 1)',
				hover: 'rgba(231, 235, 252, 1)'
			},
			black: {
				DEFAULT: 'rgba(0, 0, 0, 1)'
			},
			text: {
				DEFAULT: 'rgba(2, 3, 7, 1)',
				primary: 'rgba(2, 3, 7, 1)'
			}
		},
		borderRadius: {
			none: '0',
			sm: '3px',
			md: '5px',
			lg: '8px',
			xl: '12px',
			full: '100vw'
		},
		fontSize: {
			'xs': '12px',
			'sm': '14px',
			'md': '16px',
			'lg': '18px',

			'header-sm': '24px',
			'header': '28px',
			'header-lg': '32px',

			'body-sm': '15px',
			'body': '16px',
			'body-lg': '17px'
		},
		extend: {}
	},
	plugins: []
};
