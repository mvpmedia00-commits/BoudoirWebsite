export type Niche = {
	slug: string;
	name: string;
	title: string;
	description: string;
	hero: string;
	isMature?: boolean;
};

export const NICHES: Niche[] = [
	{
		slug: 'boudoir',
		name: 'After Dark Boudoir',
		title: 'After Dark Boudoir Sessions',
		description: 'Discreet, luxury boudoir photography for adults with premium direction and private delivery.',
		hero: 'Elegant, intentional, adult boudoir visuals built around trust, comfort, and discretion.',
		isMature: true
	},
	{
		slug: 'artistic-nude',
		name: 'Artistic Nude',
		title: 'Artistic Nude Portrait Sessions',
		description: 'Fine-art nude portrait sessions with museum-grade composition, privacy-first process, and tasteful direction.',
		hero: 'Minimal, sculptural, artistic nude imagery for adults seeking elevated visual storytelling.',
		isMature: true
	},
	{
		slug: 'afterdark',
		name: 'After Dark Editorial',
		title: 'After Dark Editorial Sessions',
		description: 'Cinematic low-light After Dark sessions focused on mood, silhouette, and premium editorial execution.',
		hero: 'Night-driven editorial portraits designed for atmosphere, confidence, and discretion.',
		isMature: true
	}
];

export const NICHE_SLUGS = NICHES.map((entry) => entry.slug);

export function getNicheBySlug(slug: string): Niche | undefined {
	return NICHES.find((entry) => entry.slug === slug);
}
