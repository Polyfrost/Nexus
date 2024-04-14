import type { Buffer } from 'node:buffer';
// @ts-expect-error package without types we can’t do anything about.
import EleventyFetch from '@11ty/eleventy-fetch';
import retry from 'p-retry';

export interface CachedFetchOptions {
	duration?: string;
	verbose?: boolean;
}

export async function cachedFetch(url: string, fetchOptions = {}, { duration = '5m', verbose = false }: CachedFetchOptions = {}) {
	let status = 200;
	let statusText = 'OK';
	let buf: Buffer | undefined;

	try {
		buf = await retry(() => EleventyFetch(url, {
			duration,
			verbose,
			type: 'buffer',
			fetchOptions,
		}));
	}
	catch (e: unknown) {
		const error = e as Error;
		const msg: string = error?.message || error.toString();
		const matches = msg.match(/^Bad response for (.*) \(.*?\): (.*)$/);
		status = Number.parseInt(matches?.[2] || '') || 404;
		statusText = matches?.[3] || msg;
	}

	return {
		ok: status >= 200 && status <= 299,
		status,
		statusText,
		body: buf,
		json: () => buf && JSON.parse(buf.toString()),
		text: () => buf?.toString(),
	};
}
