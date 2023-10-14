import { type configConst } from "config";

export type LogoType = typeof configConst.logos[number];

export interface Project {
    name: string,
    description: string,
    logo?: LogoType,
    tag?: string,
}

export type NavbarDropdown = {
    name: string,
    description: string,
    path: string,
    logo?: LogoType,
    tag?: string
}

export type NavbarElement = {
    text?: string,
    logo?: [string, number],
    path?: string,
    dropdown?: NavbarDropdown[],
}

export interface Config {
    projects: Project[],
    logos: string[],
    navbar: {
        left: NavbarElement[],
        right: NavbarElement[],
    },
}