export const SITE_MEDIA = {
	one: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_900,c_fill/v1771009257/5B1A0245_yo4xcf.jpg',
	two: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_900,c_fill/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg',
	three: 'https://res.cloudinary.com/dg4xwrzu9/image/upload/f_auto,q_auto,w_900,c_fill/v1772942536/5B1A2340_hocjor.jpg',
	four: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_1200,c_fill/v1771009257/5B1A0245_yo4xcf.jpg',
	five: 'https://res.cloudinary.com/douekbaqn/image/upload/f_auto,q_auto,w_1200,c_fill/v1771009327/84BC53CD-AC43-4BC4-8C9F-1E2C86489101_m2jwtm.jpg',
	about: 'https://res.cloudinary.com/dg4xwrzu9/image/upload/f_auto,q_auto,w_1200,c_fill/v1772942536/5B1A2340_hocjor.jpg'
} as const;

/**
 * Video in "A session that feels like cinema" near the bottom of the homepage. Host these on an
 * adult-friendly CDN (Bunny.net) and paste the https URLs here; until mp4 is set, the section keeps
 * its current background video. mature: true shows a blurred still and an 18+ confirmation first.
 */
export const SESSION_VIDEO = {
	mp4: '',
	webm: '',
	poster: '',
	mature: true
};
