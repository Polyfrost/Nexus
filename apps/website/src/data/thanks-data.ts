// core types yoinked from vitepress
export interface TeamMember {
	avatar: string;
	name: string;
	title?: string;
	org?: string;
	orgLink?: string;
	desc?: string;
	links?: SocialLink[];
	sponsor?: string;
	actionText?: string;
}

export interface SocialLink {
	icon: SocialLinkIcon;
	link: string;
	ariaLabel?: string;
}

export type SocialLinkIcon =
	| 'discord'
	| 'facebook'
	| 'github'
	| 'instagram'
	| 'linkedin'
	| 'mastodon'
	| 'npm'
	| 'slack'
	| 'twitter'
	| 'x'
	| 'youtube'
	| { svg: string };

export interface Contributor {
	name: string;
	avatar: string;
}

export interface CoreTeam extends Partial<TeamMember> {
	name: string;
	github: string;
	avatar?: string;

	twitter?: string;
	mastodon?: string;
	discord?: string;
	sponsor?: string;
	desc?: string;
}

export interface IncludedLibrary extends Partial<Contributor> {
	repository?: string;
}

export function createLinks(tm: CoreTeam): CoreTeam {
	tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }];
	tm.avatar = tm.avatar ? `https://github.com/${tm.github}.png` : tm.avatar;

	if (tm.mastodon)
		tm.links.push({ icon: 'mastodon', link: `https://elk.zone/${tm.mastodon}` });
	if (tm.discord)
		tm.links.push({ icon: 'discord', link: tm.discord });
	if (tm.twitter)
		tm.links.push({ icon: 'twitter', link: `https://twitter.com/${tm.twitter}` });

	return tm;
}

const plainTeamMembers: CoreTeam[] = [
	{
		name: 'Wyvest',
		github: 'Wyvest',
		twitter: 'Wyvest',
		title: 'Programmer and Awesome',
		desc: 'Founder of W-OVERFLOW and owner of Polyfrost',
	},
	{
		name: 'Nextday',
		github: 'nxtdaydelivery',
		desc: 'Programmer and Awesome',
	},
];

export const teamMembers = plainTeamMembers.map(tm => createLinks(tm));
