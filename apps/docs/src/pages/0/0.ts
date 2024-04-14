import { allPages } from '~/content';

// ensure the pages exists
export function GET() {
	// eslint-disable-next-line no-unused-expressions
	allPages[0];
	return new Response('');
}
