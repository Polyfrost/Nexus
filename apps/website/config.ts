import type { Config, NavbarDropdown, Project } from '@webtypes/Config';

export const configConst = {
	projects: getProjects(),
	logos: ['oneconfig.minimal', 'polyfrost.full', 'polyfrost.minimal', 'polyfrost.minimal_bg'],
	socials: {
		youtube: 'https://youtube.com/',
		discord: 'https://discord.gg/',
		github: 'https://github.com/Polyfrost',
	},
	navbar: {
		left: [
			{
				logo: ['polyfrost.full', -1],
				path: '/',
			},
		],
		right: [
			{
				text: 'Home',
				path: '/',
			},
			{
				text: 'Mods',
				path: '/mods',
			},
			{
				text: 'Projects',
				dropdown: getProjects().map((project) => {
					(project as any).path = `/projects/${project.name.toLowerCase()}`;
					return project;
				}) as unknown as NavbarDropdown[],
			},
			{
				text: 'About Us',
				path: '/about',
			},
		],
	},
	footer: [
		{
			header: 'Products',
			links: [
				{
					text: 'OneConfig',
					url: '/projects/oneconfig',
				},
				{
					text: 'OneLauncher',
					url: '/projects/onelauncher',
				},
			],
		},
		{
			header: 'Organization',
			links: [
				{
					text: 'About us',
					url: '/about',
				},
				{
					text: 'Branding',
					url: '/branding',
				},
				{
					text: 'Contact us',
					url: '/contact',
				},
				{
					text: 'Documentation',
					url: '/documentation',
				},
			],
		},
		{
			header: 'Legal',
			links: [
				{
					text: 'Terms of service',
					url: '/terms',
				},
				{
					text: 'Privacy policy',
					url: '/privacy',
				},
				{
					text: 'Licenses',
					url: '/licenses',
				},
			],
		},
	],
} satisfies Config;

function getProjects(): Project[] {
	return [
		{
			name: 'OneConfig',
			description: 'The next-generation config library for Forge and Fabric',
			logo: 'oneconfig.minimal',
			tag: 'BETA',
		},
		{
			name: 'OneLauncher',
			description: 'The next-generation launcher for Forge and Fabric',
			logo: 'polyfrost.minimal',
			tag: 'SOON',
		},
	];
}

// -------------------- NO TOUCH --------------------- //
export default configConst as unknown as Config;
