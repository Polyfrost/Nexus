import type { configConst } from 'config';

export interface ProjectDownload {
	url: string,
	platform?: "windows" | "mac" | "linux" | "universal",
	architecture?: "x86" | "x64" | "arm" | "arm64" | "universal",
}

export interface Project {
	name: string
	description: string,
	tag?: string
	downloads?: ProjectDownload[]
	descriptionLong?: string,
	hasPage?: boolean,
}

export interface NavbarDropdown {
	name: string
	description: string
	path?: string
	tag?: string,
}

export interface NavbarElement {
	text?: string
	path?: string
	dropdown?: NavbarDropdown[]
}

export interface FooterColumn {
	header: string
	links: {
		text: string,
		url: string,
	}[]
}

export interface Config {
	projects: Project[],
	socials: {
		youtube: string,
		// twitter: string,
		discord: string,
		github: string,
		modrinth: {
			type: "user" | "organization",
			id: string,
		},
		skyclient: string,
	},
	navbar: {
		left: NavbarElement[],
		right: NavbarElement[],
	},
	footer: FooterColumn[],
}
