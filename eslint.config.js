import petal from '@flowr/eslint-config';

export default petal({
	astro: true,
	react: false,
	typescript: true,
	gitignore: true,
	toml: false,
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
}, { rules: { 'petal/consistent-list-newline': 'off' } });
