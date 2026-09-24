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
 * Video beside "From consultation to delivery" on the homepage (vertical 9:16 clip). Host these on
 * an adult-friendly CDN (Bunny.net storage) and paste the https URLs here; until mp4 is set, the
 * section keeps its photo. mature: true shows a blurred still and an 18+ confirmation first.
 */
export const PROCESS_VIDEO = {
	// Original iPhone clip (HEVC HDR .MOV): plays in Safari and on most Apple and many Chrome
	// devices. For every browser, upload the converted process-body-paint.mp4/.webm/-poster.jpg
	// files and put those links here instead.
	mp4: 'https://boudoir123mvp.b-cdn.net/IMG_3581%20(1).MOV',
	webm: '',
	poster: '',
	mature: true
};
