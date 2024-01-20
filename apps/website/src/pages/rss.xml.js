import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');

	return rss({
		title: 'Polyfrost Blog',
		description: 'Recieve Polyfrost updates here',
		site: context.site,
		items: posts.map(post => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
