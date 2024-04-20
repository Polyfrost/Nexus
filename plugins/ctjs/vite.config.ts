import process from 'node:process';
import { defineConfig } from 'vite';

export default defineConfig({
	root: '.',
	build: {
		sourcemap: process.env.NODE_ENV === 'dev' ?? false,
		lib: {
			entry: './src/index.ts',
			name: 'oneconfig',
			fileName: 'oneconfig',
			formats: ['iife'],
		},
		minify: 'esbuild',
	},
});
