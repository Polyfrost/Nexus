/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	extends: [require.resolve('@polyfrost/config/eslint/web.js')],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json'
	}
};
