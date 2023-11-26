import petal from '@flowr/eslint-config';

export default petal({
	// broken for some reason
	astro: false,
	// broken for some reason
	react: false,
	typescript: true,
	gitignore: true,
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
		'**/*.astro',
	],
});
