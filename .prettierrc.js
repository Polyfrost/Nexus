/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	bracketSameLine: false,
	semi: true,
	quoteProps: 'consistent',
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@polyfrost/(interface|client|ui)(/.*)?$',
		'^~/',
		'^\\.'
	],
	importOrderParserPlugins: ['importAssertions', 'typescript', 'jsx'],
	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
	tailwindConfig: './packages/ui/tailwind.config.js'
};
