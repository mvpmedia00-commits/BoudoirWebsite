const baseUrl = import.meta.env.POCKETBASE_URL;
const adminToken = import.meta.env.POCKETBASE_ADMIN_TOKEN;

type LeadPayload = {
	name: string;
	email: string;
	niche: string;
	source?: string;
	utm_source?: string;
	utm_medium?: string;
	utm_campaign?: string;
	referrer?: string;
	notes?: string;
	budget?: number | null;
	message?: string;
	status?: 'new' | 'contacted' | 'booked';
};

type EventPayload = {
	event_name: string;
	page: string;
	source?: string;
	niche?: string;
	element?: string;
	meta?: string;
};

export type MediaItem = {
	id: string;
	title: string;
	description?: string;
	station: string;
	niche?: string;
	thumb_url: string;
	media_url: string;
	media_type: 'image' | 'video' | 'youtube';
	tags?: string;
	order?: number;
	is_public?: boolean;
};

function getCollectionUrl(collection: string) {
	if (!baseUrl) {
		throw new Error('POCKETBASE_URL is not configured.');
	}
	return `${baseUrl.replace(/\/+$/, '')}/api/collections/${collection}/records`;
}

export async function createLead(payload: LeadPayload) {
	const response = await fetch(getCollectionUrl('leads'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...(adminToken ? { Authorization: adminToken } : {})
		},
		body: JSON.stringify({
			status: 'new',
			...payload
		})
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`PocketBase create failed: ${response.status} ${errorText}`);
	}

	return response.json();
}

export async function updateLead(
	id: string,
	updates: Partial<{ status: 'new' | 'contacted' | 'booked'; notes: string }>
) {
	const response = await fetch(`${getCollectionUrl('leads')}/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			...(adminToken ? { Authorization: adminToken } : {})
		},
		body: JSON.stringify(updates)
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`PocketBase update failed: ${response.status} ${errorText}`);
	}

	return response.json();
}

export async function listLeads(limit = 100) {
	const params = new URLSearchParams({
		page: '1',
		perPage: String(limit),
		sort: '-created'
	});

	const response = await fetch(`${getCollectionUrl('leads')}?${params.toString()}`, {
		headers: {
			...(adminToken ? { Authorization: adminToken } : {})
		}
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`PocketBase list failed: ${response.status} ${errorText}`);
	}

	const data = (await response.json()) as { items?: Array<Record<string, unknown>> };
	return data.items ?? [];
}

export async function listMediaItems(station?: string, niche?: string, limit = 60) {
	const params = new URLSearchParams({
		page: '1',
		perPage: String(limit),
		sort: '+order,-created'
	});

	const filters: string[] = [`is_public = true`];
	if (station) filters.push(`station = "${station.replace(/"/g, '\\"')}"`);
	if (niche) filters.push(`(niche = "${niche.replace(/"/g, '\\"')}" || niche = "")`);
	if (filters.length) params.set('filter', filters.join(' && '));

	const response = await fetch(`${getCollectionUrl('media_items')}?${params.toString()}`, {
		headers: {
			...(adminToken ? { Authorization: adminToken } : {})
		}
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`PocketBase media list failed: ${response.status} ${errorText}`);
	}

	const data = (await response.json()) as { items?: MediaItem[] };
	return data.items ?? [];
}

export async function createEvent(payload: EventPayload) {
	try {
		const response = await fetch(getCollectionUrl('events'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				...(adminToken ? { Authorization: adminToken } : {})
			},
			body: JSON.stringify(payload)
		});
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`PocketBase event create failed: ${response.status} ${errorText}`);
		}
		return response.json();
	} catch {
		// Do not block user flows if analytics sink is unavailable.
		return null;
	}
}
