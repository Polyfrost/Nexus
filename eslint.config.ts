import petal from '@flowr/eslint-config';

export default petal({
	astro: true,
	typescript: true,
	unocss: true,
	ignores: [
		'packages/client/src/core.ts',
		'apps/desktop/src/commands.ts',
	],
});
