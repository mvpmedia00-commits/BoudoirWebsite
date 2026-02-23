import type { APIRoute } from 'astro';
import { listMediaItems } from '../../lib/pocketbase';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	try {
		const station = (url.searchParams.get('station') || '').trim() || undefined;
		const niche = (url.searchParams.get('niche') || '').trim() || undefined;
		const limitRaw = Number(url.searchParams.get('limit') || '60');
		const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(limitRaw, 1), 200) : 60;

		const items = await listMediaItems(station, niche, limit);
		return new Response(JSON.stringify({ items }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return new Response(JSON.stringify({ items: [], error: message }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

