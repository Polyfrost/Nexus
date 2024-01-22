export interface SiteInfo {
	name: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
};

// TODO: move config.ts to here so we can use astro components inside config
const siteInfo: SiteInfo = {
	name: 'Polyfrost',
	title: 'Polyfrost',
	description: 'Building beautiful mods and tools, byte by byte',
	image: {
		src: '/media/polyfrost/minimal.svg',
		alt: 'Polyfrost Logo',
	},
};

export default siteInfo;
