import type { Config, NavbarDropdown, Project } from '@webtypes/Config';

export const configConst = {
	projects: getProjects(),
	socials: {
		youtube: 'https://youtube.com/@Polyfrost',
		discord: '/discord',
		github: 'https://github.com/Polyfrost',
		modrinth: {
			id: 'polyfrost',
			type: 'organization',
		},
		skyclient: 'https://skyclient.co',
	},
	navbar: {
		left: [
			{
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
					if (project.hasPage)
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
			links: getProjects().filter(project => project.hasPage === true).map(project => ({
				text: project.name,
				url: `/projects/${project.name.toLowerCase()}`,
			})).concat([
				{
					text: 'Mods',
					url: '/mods',
				},
			]),
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
					url: 'https://docs.polyfrost.org',
				},
				{
					text: 'Open source',
					url: '/oss',
				},
			],
		},
		{
			header: 'Legal',
			links: [
				{
					text: 'Terms of service',
					url: '/legal/tos',
				},
				{
					text: 'Privacy policy',
					url: '/legal/privacy',
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
			hasPage: true,
		},
		{
			name: 'OneLauncher',
			description: 'The next-generation launcher for Forge and Fabric',
			tag: 'SOON',
		},
	];
}

// -------------------- NO TOUCH --------------------- //
export default configConst as unknown as Config;
