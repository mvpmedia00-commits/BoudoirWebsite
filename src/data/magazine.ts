// Everything shown on /magazine comes from this file. Fill in the details for the current
// issue; the page, menu link, and footer link go live automatically once at least one edition
// has a buy link.

export type MagazineEdition = {
	/** Shown on the button, e.g. 'Print' or 'Digital'. */
	format: string;
	/** Display price including currency, e.g. '$45'. Leave empty to hide. */
	price: string;
	/** Full https:// link to the product on your store. Editions without a link are hidden. */
	url: string;
	/** Short line under the price, e.g. 'Softcover, 120 pages, ships in 5–7 days'. */
	note: string;
};

export type Magazine = {
	title: string;
	/** e.g. 'Issue 01 · Spring 2026' */
	issue: string;
	/** One sentence shown under the title. */
	tagline: string;
	/** Paragraphs describing the issue. */
	description: string[];
	/** Cover image URL. */
	cover: string;
	/** Short bullet points, e.g. '120 pages of fine art figure work'. */
	highlights: string[];
	/** Optional inside-page preview image URLs. Choose ones suitable for an 18+ product page. */
	previews: string[];
	editions: MagazineEdition[];
	/** Name of the store that sells and ships it, e.g. 'MagCloud'. Shown under the buy buttons. */
	seller: string;
};

export const MAGAZINE: Magazine = {
	title: '',
	issue: '',
	tagline: '',
	description: [],
	cover: '',
	highlights: [],
	previews: [],
	editions: [
		{ format: 'Print', price: '', url: '', note: '' },
		{ format: 'Digital', price: '', url: '', note: '' }
	],
	seller: ''
};

const isHttpsUrl = (value: string) => {
	try {
		return new URL(value).protocol === 'https:';
	} catch {
		return false;
	}
};

/** Editions that can actually be bought (have a valid https link). */
export const buyableEditions = MAGAZINE.editions.filter((edition) => isHttpsUrl(edition.url));

/** The magazine page and its links only appear once something can be bought. */
export const isMagazineLive = MAGAZINE.title.trim().length > 0 && buyableEditions.length > 0;
