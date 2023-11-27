/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
	// @ts-expect-error astro moment
	test: {
		globals: true,
		reporters: ['dot'],
	},
});
