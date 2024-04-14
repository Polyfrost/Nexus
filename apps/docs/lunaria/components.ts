import { html } from '@lunariajs/core';

export function TitleParagraph() {
	return html`
	<p>
		If you're interested in helping us translate
		<a href="https://docs.polyfrost.org/">docs.polyfrost.org</a> into one of the languages listed below,
		you've come to the right place! This auto-updating page always lists all the content that could
		use your help right now.
	</p>
	<p>
		Before starting, please read our
		<a href="https://contribute.polyfrost.org/guides/i18n-docs/">i18n Guide</a>
		to learn about our translation process and how you can get involved.
	</p>
`;
}
