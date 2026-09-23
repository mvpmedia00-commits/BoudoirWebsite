import type { APIRoute } from 'astro';
import { hasAdminAccess } from '../../lib/access';
import { createLead, updateLead } from '../../lib/pocketbase';

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const LEAD_STATUSES = new Set(['new', 'contacted', 'booked']);

// Values the live PocketBase `niche` select accepts. Other session types (body paint, film, ...)
// are stored as 'boudoir' with the real type written at the top of the message, so no inquiry
// is rejected. Add the new values after importing backend/pb_schema.json.
const STORED_NICHES = new Set(['boudoir', 'artistic-nude', 'afterdark']);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

		if (!body.name?.trim() || !body.email?.trim() || !body.niche?.trim()) {
			return json({ error: 'Missing required fields.' }, 400);
		}
		if (!EMAIL_PATTERN.test(body.email.trim())) {
			return json({ error: 'Please enter a valid email address.' }, 400);
		}

		const niche = body.niche.trim();
		const storedNiche = STORED_NICHES.has(niche) ? niche : 'boudoir';
		const message = body.message?.trim() ?? '';

		await createLead({
			name: body.name.trim(),
			email: body.email.trim(),
			niche: storedNiche,
			message: storedNiche === niche ? message : `Session type: ${niche}\n\n${message}`.trim(),
			budget: typeof body.budget === 'number' && Number.isFinite(body.budget) ? body.budget : null,
			source: body.source?.trim() ?? '',
			utm_source: body.utm_source?.trim() ?? '',
			utm_medium: body.utm_medium?.trim() ?? '',
			utm_campaign: body.utm_campaign?.trim() ?? '',
			referrer: body.referrer?.trim() ?? '',
			status: 'new'
		});

		return json({ ok: true });
	} catch (error) {
		console.error('[api/leads]', error);
		return json({ error: 'Something went wrong. Please try again.' }, 500);
	}
};

export const PATCH: APIRoute = async ({ request, cookies }) => {
	if (!hasAdminAccess(cookies)) {
		return json({ error: 'Unauthorized.' }, 401);
	}

	try {
		const body = (await request.json()) as {
			id?: string;
			status?: 'new' | 'contacted' | 'booked';
			notes?: string;
		};

		if (!body.id || (!body.status && typeof body.notes !== 'string')) {
			return json({ error: 'Missing id and patch fields.' }, 400);
		}
		if (body.status && !LEAD_STATUSES.has(body.status)) {
			return json({ error: 'Invalid status.' }, 400);
		}

		await updateLead(body.id, {
			...(body.status ? { status: body.status } : {}),
			...(typeof body.notes === 'string' ? { notes: body.notes } : {})
		});
		return json({ ok: true });
	} catch (error) {
		console.error('[api/leads]', error);
		return json({ error: 'Something went wrong. Please try again.' }, 500);
	}
};
