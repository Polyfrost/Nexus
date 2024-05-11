import petal from '@flowr/eslint-config';

export default petal({
	astro: true,
	typescript: true,
	gitignore: true,
	toml: true,
	unocss: false,
	stylistic: {
		semi: true,
	},
	ignores: [
		'**/target',
		'**/dist',
		'**/types',
		'**/cache',
		'**/dist',
		'**/.temp',
		'**/*.svg',
		'*.rs',
		'pnpm-lock.yaml',
		'packages/client/src/core.ts',
		'apps/desktop/src/commands.ts',
		'**/.next/**',
	],
});
