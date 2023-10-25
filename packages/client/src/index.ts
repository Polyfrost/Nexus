import { Link } from '@rspc/client';

declare global {
	// eslint-disable-next-line
	var isDev: boolean;
	// eslint-disable-next-line
	var rspcLinks: Link[];
}

if (
	globalThis.localStorage === undefined ||
	globalThis.isDev === undefined ||
	globalThis.rspcLinks === undefined
)
	throw new Error('patch `globalThis` before importing `@polyfrost/client`');

declare global {
	// Temporary Tauri patch to avoid returning a Promise.
	// export function confirm(): never; // boolean | Promise<boolean>;
	export function confirm(): boolean | Promise<boolean>;
}

export * from './hooks';
export * from './stores';
export * from './rspc';
export * from './core';
export * from './utils';
export * from './lib';
export * from './form';
