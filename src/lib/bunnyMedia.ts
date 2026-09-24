const DEFAULT_MEDIA_HOST = "mvp-media-media.b-cdn.net";

export const BUNNY_MEDIA_HOST =
	(import.meta.env.PUBLIC_BUNNY_MEDIA_HOST || DEFAULT_MEDIA_HOST).replace(/^https?:\/\//, "").replace(/\/$/, "");

/** Serve an existing Cloudinary URL from the bunny.net media pull zone. The path stays intact so Cloudinary still applies transforms; bunny caches the response. */
export function bunnyMedia(url: string) {
	if (!url.startsWith("https://res.cloudinary.com")) return url;
	return `https://${BUNNY_MEDIA_HOST}${url.slice("https://res.cloudinary.com".length)}`;
}
