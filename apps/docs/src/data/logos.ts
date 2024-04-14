import { z } from 'astro:content';

const LogoCheck = <T extends Record<string, { file: string; padding: string }>>(logos: T) => logos;

export const logos = LogoCheck({

});

export type LogoKey = keyof typeof logos;
const logoKeys = Object.keys(logos) as [LogoKey, ...LogoKey[]];
export const isLogoKey = (val: string | undefined) => z.enum(logoKeys).parse(val);
