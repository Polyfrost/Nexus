import type { APIRoute } from 'astro';

export const prerender = false;
export const GET: APIRoute = async () => {
	return Response.json({ message: 'hi there' }, { status: 301 });
};
