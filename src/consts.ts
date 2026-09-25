export const SITE_TITLE = 'MVP Media';
export const SITE_DESCRIPTION =
	'Fine art boudoir, artistic nude, body paint, and editorial portrait photography across the United States, with private, discreet sessions.';

/**
 * Starting state of the "18+ blur" switch in the menu, for visitors who have not used it yet. When on, 18+
 * cover photos (home, portfolio, store) and the homepage process video are blurred. Each visitor's own
 * choice is saved in their browser and wins over this. The 18+ confirmation before galleries is separate.
 */
export const BLUR_MATURE_PREVIEWS = false;

/** localStorage key holding a visitor's switch choice: 'on' or 'off'. */
export const BLUR_PREF_KEY = 'mvp_blur_18';
