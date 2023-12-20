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
	overrides: {
		astro: {
			'style/jsx-one-expression-per-line': 'off',
			'style/jsx-indent': 'off',
			'style/jsx-closing-bracket-location': 'off',
			'style/jsx-tag-spacing': 'off',
			'style/indent': 'off',
		},
	},
});
