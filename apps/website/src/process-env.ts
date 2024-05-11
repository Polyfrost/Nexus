import process from 'node:process';
import { z } from 'zod';

const schema = z.object({
	NODE_ENV: z.enum(['development', 'production', 'test']),
	GITHUB_ORG: z.string().optional(),
	GITHUB_REPO: z.string().optional(),
	GITHUB_PAT: z.string().optional(),
});

export function env() {
	const result = schema.safeParse(process.env);
	if (!result.success) {
		throw new Error(`Missing environment variables: ${result.error.issues
			.map(issue => issue.path.join('.')).join(', ')}`);
	}

	return result.data;
}
