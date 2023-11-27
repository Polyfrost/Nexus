import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// @ts-expect-error no typings for this
import pseudo from 'postcss-pseudo-companion-classes';

const config = {
	plugins: [
		autoprefixer(),
		tailwindcss(),
		pseudo({
			prefix: 'sb-pseudo--',
			restrictTo: [':hover', ':focus'],
		}),
	],
};

export default config;
