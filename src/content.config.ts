import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			category: z
				.enum(['after-dark-tips', 'session-prep', 'privacy', 'behind-the-scenes', 'business'])
				.default('after-dark-tips'),
			tags: z.array(z.string().min(1)).default([]),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

const vault = defineCollection({
	loader: glob({ base: './src/content/vault', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			coverImage: image().optional(),
			tags: z.array(z.string().min(1)).default([]),
			privateNote: z.string().optional(),
		}),
});

// Store items: one Markdown file per product in src/content/store (files starting with _ are ignored).
// Buy buttons link to wherever each option is sold (MagCloud, Gumroad, your own checkout, ...).
const store = defineCollection({
	loader: glob({ base: './src/content/store', pattern: '**/[^_]*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		/** Short line under the title, e.g. "Issue 1". */
		subtitle: z.string().optional(),
		/** One or two sentences for the store grid and search engines. */
		summary: z.string(),
		category: z.string().default('Shop'),
		/** Main image URL; leave out to show a styled title card instead. */
		image: z.string().url().optional(),
		/** Extra image URLs shown under the main image. */
		gallery: z.array(z.string().url()).default([]),
		/** Nudity: blurred in the grid and behind the 18+ confirmation. */
		mature: z.boolean().default(false),
		/** available shows buy buttons, coming-soon shows the item without them, hidden removes it. */
		status: z.enum(['available', 'coming-soon', 'hidden']).default('available'),
		/** Lower numbers show first. */
		order: z.number().default(100),
		options: z
			.array(
				z.object({
					label: z.string(),
					/** Display price including currency, e.g. "$45". */
					price: z.string().optional(),
					/** Full https link where this option is bought. Options without one show as coming soon. */
					url: z.string().url().startsWith('https://').optional(),
					note: z.string().optional()
				})
			)
			.default([]),
		/** Where it is sold and delivered, e.g. "MagCloud". */
		seller: z.string().optional()
	})
});

export const collections = { blog, vault, store };
