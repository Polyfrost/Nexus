import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// @ts-ignore - Tailwind doesn't have types for this yet
import postcssNesting from "tailwindcss/nesting";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	vite: {
		css: {
			postcss: {
				plugins: [
					postcssNesting,
				]
			}
		}
	}
});
