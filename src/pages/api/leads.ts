import type { APIRoute } from 'astro';
import { createLead, updateLead } from '../../lib/pocketbase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = (await request.json()) as {
			name?: string;
			email?: string;
			niche?: string;
			message?: string;
			budget?: number | null;
			source?: string;
			utm_source?: string;
			utm_medium?: string;
			utm_campaign?: string;
			referrer?: string;
		};

		if (!body.name || !body.email || !body.niche) {
			return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
		}

		await createLead({
			name: body.name.trim(),
			email: body.email.trim(),
			niche: body.niche.trim(),
			message: body.message?.trim() ?? '',
			budget: body.budget ?? null,
			source: body.source?.trim() ?? '',
			utm_source: body.utm_source?.trim() ?? '',
			utm_medium: body.utm_medium?.trim() ?? '',
			utm_campaign: body.utm_campaign?.trim() ?? '',
			referrer: body.referrer?.trim() ?? '',
			status: 'new'
		});

		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return new Response(JSON.stringify({ error: message }), { status: 500 });
	}
};

export const PATCH: APIRoute = async ({ request }) => {
	try {
		const body = (await request.json()) as {
			id?: string;
			status?: 'new' | 'contacted' | 'booked';
			notes?: string;
		};

		if (!body.id || (!body.status && typeof body.notes !== 'string')) {
			return new Response(JSON.stringify({ error: 'Missing id and patch fields.' }), { status: 400 });
		}

		await updateLead(body.id, {
			...(body.status ? { status: body.status } : {}),
			...(typeof body.notes === 'string' ? { notes: body.notes } : {})
		});
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return new Response(JSON.stringify({ error: message }), { status: 500 });
	}
};
