export const allLanguages = {
	en: 'English',
	ko: '한국어',
} as const;

const twoLanguages = {
	en: 'English',
	ko: '한국어',
} as const;

export default import.meta.env?.PUBLIC_TWO_LANG ? twoLanguages : allLanguages;

export const rtlLanguages = new Set(['ar']);
