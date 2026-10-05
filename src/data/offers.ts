/**
 * Public packages, FAQ, and casting link.
 * Edit this file to change rates and inclusions on the homepage, /pricing, and the booking page.
 * Rates and inclusions are provisional placeholders.
 * Do not add discounts, crossed-out prices, or a payment checkout.
 */

export const MODEL_APPLY_URL = 'https://mvpstats.xyz/';

export const STARTING_PRICE_AMOUNT = 495;
export const STARTING_PRICE_LABEL = 'From $495';

export interface PackageTier {
	id: string;
	name: string;
	priceLabel: string;
	summary: string;
	includes: string[];
	note: string;
	featured?: boolean;
}

export const packages: PackageTier[] = [
	{
		id: 'signature',
		name: 'Signature',
		priceLabel: 'From $495',
		summary: 'A private boudoir session: guided, discreet, and finished as a curated set.',
		includes: [
			'About one hour of session time',
			'A curated set of retouched images',
			'Private delivery',
			'Posing guidance and a consent conversation before we begin'
		],
		note: 'The usual place to start.',
		featured: true
	},
	{
		id: 'editorial',
		name: 'Editorial',
		priceLabel: 'Higher than Signature',
		summary: 'More production: additional looks, styling direction, or film alongside the stills.',
		includes: [
			'Longer session time',
			'More retouched images',
			'Private delivery',
			'Planning for wardrobe, references, and set'
		],
		note: 'The rate is confirmed in writing after consultation.'
	},
	{
		id: 'custom',
		name: 'Custom',
		priceLabel: 'Quote',
		summary: 'Destination days, body paint, After Dark sets, couples, or a full film.',
		includes: [
			'A scope written for the project',
			'Session time set to the concept',
			'Retouched stills, and film when it is part of the booking',
			'Private delivery and clear publication terms'
		],
		note: 'You receive a written quote before a date is held.'
	}
];

export interface FaqItem {
	question: string;
	answer: string;
}

export const faqs: FaqItem[] = [
	{
		question: 'Are sessions only for adults?',
		answer: 'Yes. Every session, casting, and private gallery is for adults 18 and older.'
	},
	{
		question: 'How private is the work?',
		answer:
			'Consultation, production, and delivery stay private. You decide what is shared, where it appears, and whether anything is published. Nothing is posted without your permission.'
	},
	{
		question: 'What should I wear?',
		answer:
			'Bring pieces you already feel good in, or plan wardrobe during the consultation. A robe and two or three looks are usually enough. We will say what to skip for the light and the set.'
	},
	{
		question: 'Will I know how to pose?',
		answer:
			'You do not have to. Sessions are directed. You get calm posing guidance the whole time, with room to pause, adjust, or change direction.'
	},
	{
		question: 'When are images delivered?',
		answer:
			'You receive a curated, retouched gallery through a private link. Most sets are ready within a few weeks of the session. Your exact timeline is confirmed when the date is booked.'
	}
];
