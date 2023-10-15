/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	extends: [require.resolve('./eslint/base.js'), require.resolve('./eslint/tailwind.js')]
};
