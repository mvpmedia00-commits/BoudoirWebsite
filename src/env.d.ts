/// <reference types="astro/client" />

// Server secrets are declared in astro.config.mjs (env.schema) and read via astro:env/server.

type MvpTrackPayload = {
	event_name: string;
	page: string;
	source?: string;
	niche?: string;
	element?: string;
	meta?: string;
};

interface Window {
	/** Analytics beacon defined in BaseHead.astro. */
	mvpTrack?: (payload: MvpTrackPayload) => void;
}
