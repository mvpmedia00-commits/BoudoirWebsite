import ImgOne from '../assets/blog-placeholder-1.jpg';
import ImgTwo from '../assets/blog-placeholder-2.jpg';
import ImgThree from '../assets/blog-placeholder-3.jpg';
import ImgFour from '../assets/blog-placeholder-4.jpg';
import ImgFive from '../assets/blog-placeholder-5.jpg';
import ImgAbout from '../assets/blog-placeholder-about.jpg';

export type RosterEntry = {
	slug: string;
	name: string;
	role: string;
	location: string;
	bio: string;
	heroImage: string;
	reelUrl: string;
	availability: string;
	representedBy: string;
	focus: string[];
	films: Array<{
		title: string;
		year: string;
		format: string;
		oneLiner?: string;
	}>;
	awards: string[];
	likes: string[];
};

export const ROSTER_ENTRIES: RosterEntry[] = [
	{
		slug: 'matthew-phillips',
		name: 'Matthew Phillips',
		role: 'Director / Photographer',
		location: 'United States',
		bio: 'Cinematic visual direction with a focus on premium portrait narratives and after-dark editorial control.',
		heroImage: ImgOne.src,
		reelUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
		availability: 'Open for bookings',
		representedBy: 'MVP Media',
		focus: ['After Dark Portraits', 'Artistic Nude Editorial', 'Luxury Studio Sessions'],
		films: [
			{ title: 'After Dark Editorial', year: '2026', format: 'Portrait Film', oneLiner: 'A low-light profile built around confidence and controlled silhouette framing.' },
			{ title: 'Private Session Study', year: '2025', format: 'Short Visual', oneLiner: 'Close-lens session direction with minimal set and premium skin-tone finish.' },
			{ title: 'Noir Studio Motion', year: '2025', format: 'Campaign Clip', oneLiner: 'Monochrome-forward motion sequence designed for social-first release.' }
		],
		awards: ['Best Mood Direction (Indie Visual Awards)', 'Official Selection: Midnight Frames'],
		likes: ['Soft shadow gradients', 'Clean skin tones', 'Minimal set design']
	},
	{
		slug: 'aria-wren',
		name: 'Aria Wren',
		role: 'Creative Producer',
		location: 'Los Angeles',
		bio: 'Builds structured story systems around intimacy, confidence, and visual pacing for modern digital platforms.',
		heroImage: ImgTwo.src,
		reelUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
		availability: 'Limited availability',
		representedBy: 'MVP Media',
		focus: ['Creative Direction', 'Campaign Planning', 'Production Design'],
		films: [
			{ title: 'Velvet Signal', year: '2026', format: 'Brand Spot', oneLiner: 'Narrative-led campaign with polished luxury tone and high retention pacing.' },
			{ title: 'Studio Hours', year: '2025', format: 'Editorial Cut', oneLiner: 'Behind-the-scenes showcase translating production detail into story value.' },
			{ title: 'Contour Notes', year: '2025', format: 'Portrait Study', oneLiner: 'High-end portrait sequence driven by shape language and subtle camera drift.' }
		],
		awards: ['Silver Frame: Creative Strategy', 'Top 10 Producer List'],
		likes: ['Prelight moodboards', 'Shot-list precision', 'Confident pacing']
	},
	{
		slug: 'noah-vale',
		name: 'Noah Vale',
		role: 'Cinematographer',
		location: 'New York',
		bio: 'Designs low-light image architecture with deliberate movement, controlled highlights, and polished post intent.',
		heroImage: ImgThree.src,
		reelUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
		availability: 'Open for commercial work',
		representedBy: 'MVP Media',
		focus: ['Low-Light Cinematography', 'Performance Portraits', 'Motion Editorial'],
		films: [
			{ title: 'Night Silk', year: '2026', format: 'Music Visual', oneLiner: 'A texture-heavy lighting sequence for premium artist branding.' },
			{ title: 'Glass Room', year: '2025', format: 'Commercial Edit', oneLiner: 'Product-centered visual with sharp spatial depth and reflective control.' },
			{ title: 'Frame by Frame', year: '2025', format: 'Fashion Clip', oneLiner: 'Runway-inspired visual language engineered for vertical placements.' }
		],
		awards: ['Luma Jury Mention', 'Best Cinematic Tone 2025'],
		likes: ['Contrast control', 'Anamorphic texture', 'Close lensing']
	},
	{
		slug: 'sloane-river',
		name: 'Sloane River',
		role: 'Editor / Colorist',
		location: 'Chicago',
		bio: 'Shapes emotional rhythm in post with color depth, sound timing, and clean narrative finish.',
		heroImage: ImgFour.src,
		reelUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
		availability: 'Booked this month',
		representedBy: 'MVP Media',
		focus: ['Color Finishing', 'Narrative Editing', 'Sound-Led Cuts'],
		films: [
			{ title: 'Obsidian Bloom', year: '2026', format: 'Editorial Film', oneLiner: 'Dark-luxe grading path with precise skin and shadow harmony.' },
			{ title: 'After Hours Archive', year: '2025', format: 'Series Teaser', oneLiner: 'Compact trailer format for episodic launch rollouts.' },
			{ title: 'A Quiet Pulse', year: '2025', format: 'Lifestyle Short', oneLiner: 'Soft pacing and deliberate rhythm for intimate lifestyle branding.' }
		],
		awards: ['Best Post Production Flow', 'Color Direction Finalist'],
		likes: ['Warm shadows', 'Minimal grain', 'Natural skin response']
	},
	{
		slug: 'jade-kellan',
		name: 'Jade Kellan',
		role: 'Photographer',
		location: 'Miami',
		bio: 'Captures premium portrait stills with a discreet process and high-end editorial composition.',
		heroImage: ImgFive.src,
		reelUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
		availability: 'Open for private sessions',
		representedBy: 'MVP Media',
		focus: ['Luxury Portraiture', 'Sensual Editorial', 'Private Client Shoots'],
		films: [
			{ title: 'Rose Black', year: '2026', format: 'Photo Story', oneLiner: 'Studio portrait narrative with precise direction and luxury tone.' },
			{ title: 'Private Light', year: '2025', format: 'Portrait Series', oneLiner: 'Member-only portrait set designed for discreet client previews.' },
			{ title: 'Bodyline', year: '2025', format: 'Lookbook', oneLiner: 'Editorial lookbook balancing form study and modern styling.' }
		],
		awards: ['Portrait Distinction Award', 'Visual Signature Mention'],
		likes: ['Controlled posing', 'Directional lighting', 'Calm set energy']
	},
	{
		slug: 'kai-mercer',
		name: 'Kai Mercer',
		role: 'Visual Artist',
		location: 'Atlanta',
		bio: 'Blends still and motion language for bold gallery-ready frames and premium digital releases.',
		heroImage: ImgAbout.src,
		reelUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
		availability: 'Open for collaborations',
		representedBy: 'MVP Media',
		focus: ['Hybrid Visuals', 'Fine Art Motion', 'Digital Installations'],
		films: [
			{ title: 'Nocturne', year: '2026', format: 'Hybrid Visual', oneLiner: 'Still-motion merge built for curated web and installation playback.' },
			{ title: 'Static Heat', year: '2025', format: 'Visual Loop', oneLiner: 'Loop-based visual architecture focused on mood retention.' },
			{ title: 'Fine Line', year: '2025', format: 'Editorial Study', oneLiner: 'Minimalist composition study with graphic framing and soft transitions.' }
		],
		awards: ['Emerging Visual Director', 'Curated Portfolio Selection'],
		likes: ['Graphic silhouettes', 'Tone consistency', 'Elegant motion']
	}
];

export const ROSTER_SLUGS = ROSTER_ENTRIES.map((entry) => entry.slug);

export const getRosterEntryBySlug = (slug: string) => ROSTER_ENTRIES.find((entry) => entry.slug === slug);
