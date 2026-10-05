export const SITE_TITLE = 'MVP Media';
export const SITE_DESCRIPTION =
	'Chicago boudoir photographer for fine art, artistic nude, body paint, and editorial portrait sessions. Private work in the city, across Chicagoland, and throughout the United States.';

/**
 * The site has two versions, chosen with the "Explicit" switch in the menu:
 * - Off (PG-13): every nude photo and video is replaced with a non-nude one, or with a
 *   "turn on Explicit to view" card where there is no non-nude version.
 * - On: everything is shown, including the rolling hero clips.
 * EXPLICIT_DEFAULT is the starting mode for visitors who have not used the switch; each visitor's
 * own choice is saved in their browser and wins over it.
 */
export const EXPLICIT_DEFAULT = false;

/** localStorage key holding a visitor's switch choice: 'on' or 'off'. */
export const EXPLICIT_PREF_KEY = 'mvp_explicit';
