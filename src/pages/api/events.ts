import type { APIRoute } from 'astro';
import { createEvent } from '../../lib/pocketbase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = (await request.json()) as {
			event_name?: string;
			page?: string;
			source?: string;
			niche?: string;
			element?: string;
			meta?: string;
		};

		if (!body.event_name || !body.page) {
			return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
		}

		await createEvent({
			event_name: body.event_name.trim(),
			page: body.page.trim(),
			source: body.source?.trim() ?? '',
			niche: body.niche?.trim() ?? '',
			element: body.element?.trim() ?? '',
			meta: body.meta?.trim() ?? ''
		});

		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return new Response(JSON.stringify({ error: message }), { status: 500 });
	}
};

