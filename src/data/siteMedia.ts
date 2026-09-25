import { bunnyMedia } from '../lib/bunnyMedia';

const SITE_MEDIA_ORIGIN = {
	one: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_900,c_fill/v1771009257/5B1A0245_yo4xcf.jpg',
	two: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_900,c_fill/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg',
	// 5B1A2340_hocjor.jpg (dg4xwrzu9) was deleted from Cloudinary, so `three` and `about` use the
	// working douekbaqn photos until it is re-uploaded. To restore it, put back:
	// https://res.cloudinary.com/dg4xwrzu9/image/upload/f_auto,q_auto,w_900,c_fill/v1772942536/5B1A2340_hocjor.jpg
	three: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_900,c_fill/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg',
	four: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_1200,c_fill/v1771009257/5B1A0245_yo4xcf.jpg',
	five: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_1200,c_fill/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg',
	about: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_1200,c_fill/v1771009257/5B1A0245_yo4xcf.jpg'
} as const;

export const SITE_MEDIA = Object.fromEntries(
	Object.entries(SITE_MEDIA_ORIGIN).map(([key, url]) => [key, bunnyMedia(url)])
) as { [Key in keyof typeof SITE_MEDIA_ORIGIN]: string };

/**
 * Portfolio photos uploaded to bunny.net storage. Camera JPGs are large, so each link asks for a
 * resized copy with ?width=; that takes effect once Bunny Optimizer is enabled on the pull zone
 * (otherwise Bunny ignores it and sends the original).
 */
const BUNNY_PHOTOS = 'https://boudoir123mvp.b-cdn.net';
const photo = (file: string, width = 1200) => `${BUNNY_PHOTOS}/${file}?width=${width}`;

export const PORTFOLIO_PHOTOS = {
	boudoir: [photo('5B1A4081.JPG'), photo('5B1A4143.JPG'), photo('5B1A4145.JPG')],
	artisticNude: [photo('IMG_1982.JPG')]
};

/** Real photos for a landing page or gallery slug, if any have been uploaded. */
export const photosForSlug = (slug: string): string[] =>
	slug === 'boudoir' ? PORTFOLIO_PHOTOS.boudoir : slug === 'artistic-nude' ? PORTFOLIO_PHOTOS.artisticNude : [];

/**
 * Video beside "From consultation to delivery" on the homepage (vertical 9:16 clip). Host these on
 * an adult-friendly CDN (Bunny.net storage) and paste the https URLs here; until mp4 is set, the
 * section keeps its photo. mature: true blurs it while the visitor has the 18+ blur switch on.
 */
export const PROCESS_VIDEO = {
	// Converted from the original iPhone clip (IMG_3581, HEVC HDR) so it plays in every browser.
	mp4: 'https://boudoir123mvp.b-cdn.net/process-body-paint.mp4',
	webm: 'https://boudoir123mvp.b-cdn.net/process-body-paint.webm',
	poster: 'https://boudoir123mvp.b-cdn.net/process-body-paint-poster.jpg',
	mature: true
};
