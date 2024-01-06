import type { configConst } from 'config';

export type LogoType = (typeof configConst.logos)[number];

export interface ProjectDownload {
	url: string,
	platform?: "windows" | "mac" | "linux" | "universal",
	architecture?: "x86" | "x64" | "arm" | "arm64" | "universal",
}

export interface Project {
	name: string
	description: string,
	logo?: LogoType
	tag?: string
	downloads?: ProjectDownload[]
	descriptionLong?: string,
	hasPage?: boolean,
}

export interface NavbarDropdown {
	name: string
	description: string
	path?: string
	logo?: LogoType
	tag?: string,
}

export interface NavbarElement {
	text?: string
	logo?: [string, number]
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
	logos: string[],
	socials: {
		youtube: string,
		// twitter: string,
		discord: string,
		github: string,
		modrinthId: string,
	},
	navbar: {
		left: NavbarElement[],
		right: NavbarElement[],
	},
	footer: FooterColumn[],
}
