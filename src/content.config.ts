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

export const collections = { blog, vault };
