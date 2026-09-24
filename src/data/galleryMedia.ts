import { bunnyMedia } from '../lib/bunnyMedia';
import { SITE_MEDIA } from './siteMedia';

export type GalleryCategory = 'boudoir' | 'artistic-nude' | 'body-paint' | 'editorial-portrait';

export type GalleryCategoryMeta = {
	slug: GalleryCategory;
	label: string;
	description: string;
	sensitive: boolean;
};

export type GalleryItem = {
	id: string;
	image: string;
	title: string;
	description: string;
	category: GalleryCategory;
	sensitive: boolean;
	x: number;
	y: number;
	w: number;
	h: number;
};

type BaseMedia = {
	image: string;
};

export const GALLERY_CATEGORIES: GalleryCategoryMeta[] = [
	{
		slug: 'boudoir',
		label: 'Boudoir',
		description: 'Private, confidence-forward portrait sessions with discreet direction.',
		sensitive: true
	},
	{
		slug: 'artistic-nude',
		label: 'Artistic Nude',
		description: 'Fine-art studies focused on form, composition, and expressive light.',
		sensitive: true
	},
	{
		slug: 'body-paint',
		label: 'Body Paint',
		description: 'Editorial body-art concepts with styling, detail, and set design.',
		sensitive: true
	},
	{
		slug: 'editorial-portrait',
		label: 'Editorial Portrait',
		description: 'Portraits for creators, brands, and personal stories, with no nudity.',
		sensitive: false
	}
];

const CATEGORY_CYCLE: GalleryCategory[] = ['editorial-portrait', 'boudoir', 'artistic-nude', 'body-paint'];

// Portfolio images, cycled through the gallery canvas. Replace with the final portfolio set.
const rawBaseSet: BaseMedia[] = [
	{ image: 'https://res.cloudinary.com/douekbaqn/image/upload/v1771009257/5B1A0245_yo4xcf.jpg' },
	{ image: 'https://res.cloudinary.com/douekbaqn/image/upload/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg' },
	{ image: SITE_MEDIA.one },
	{ image: SITE_MEDIA.two },
	{ image: SITE_MEDIA.three },
	{ image: SITE_MEDIA.four },
	{ image: SITE_MEDIA.five },
	{ image: SITE_MEDIA.about }
];

const toCloudinaryOptimized = (url: string) =>
	url.includes('/image/upload/') && !url.includes('/image/upload/f_auto')
		? url.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_900,c_fill/')
		: url;

const baseSet: BaseMedia[] = rawBaseSet.map((item) => ({
	...item,
	image: bunnyMedia(toCloudinaryOptimized(item.image))
}));

const cols = 8;
const gapX = 180;
const gapY = 240;
const startX = 38;
const startY = 34;

const categoryMetaBySlug = Object.fromEntries(GALLERY_CATEGORIES.map((category) => [category.slug, category])) as Record<
	GalleryCategory,
	GalleryCategoryMeta
>;

export const galleryItems: GalleryItem[] = Array.from({ length: 96 }, (_, idx) => {
	const base = baseSet[idx % baseSet.length];
	const category = CATEGORY_CYCLE[idx % CATEGORY_CYCLE.length];
	const categoryMeta = categoryMetaBySlug[category];
	const number = String(idx + 1).padStart(3, '0');
	// CATEGORY_CYCLE repeats every four items, so this is the image's position within its category.
	const categoryNumber = String(Math.floor(idx / CATEGORY_CYCLE.length) + 1).padStart(2, '0');
	const row = Math.floor(idx / cols);
	const col = idx % cols;
	const width = [170, 190, 210][idx % 3];
	const height = [240, 280, 300, 260][idx % 4];
	const x = startX + col * gapX + (row % 2 === 0 ? 0 : 32);
	const y = startY + row * gapY + (col % 2 === 0 ? 0 : 14);
	return {
		id: `img-${number}`,
		image: base.image,
		title: `${categoryMeta.label} No. ${categoryNumber}`,
		description: categoryMeta.description,
		category,
		sensitive: categoryMeta.sensitive,
		x,
		y,
		w: width,
		h: height
	};
});

export const getGalleryItemsByCategory = (slug: GalleryCategory) =>
	galleryItems.filter((item) => item.category === slug);
