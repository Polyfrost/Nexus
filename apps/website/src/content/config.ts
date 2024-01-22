import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.string().or(z.date()).transform(val => new Date(val)),
		updatedDate: z.string().or(z.date()).transform(val => new Date(val)).optional(),
		socialImage: z.string().optional(),
		coverImage: z.string().optional(),
		lang: z.enum(['en']).default('en'),
	}),
});

export const collections = { blog };
