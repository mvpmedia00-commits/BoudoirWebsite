import type { APIRoute } from 'astro';
import { OPENAI_API_KEY, OPENAI_BASE_URL, OPENAI_IMAGE_MODEL } from 'astro:env/server';
import { hasAdminAccess } from '../../lib/access';

// Server side of the AI photo editor (/admin/ai-editor). Admin only. Forwards the photo, the
// optional selection mask and reference photos, and the instruction to OpenAI's image edit API,
// so the API key never reaches the browser. Nothing is stored here.

export const prerender = false;

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

// Models the editor may ask for. chatgpt-image-latest is the model ChatGPT itself uses.
const MODELS = new Set(['chatgpt-image-latest', 'gpt-image-2.5-sunburst', 'gpt-image-2.5-flare', 'gpt-image-2', 'gpt-image-1.5']);
const QUALITIES = new Set(['low', 'medium', 'high', 'auto']);
const MAX_REFERENCES = 4;

// Added to every instruction unless switched off, so edits change only what was asked.
const KEEP_PERSON =
	"Keep everything you were not asked to change exactly as it is. Preserve the person's identity, face, facial features, skin tone, body shape, proportions, pose, tattoos, and expression, and keep the result photographic and realistic.";

const friendlyError = (status: number, code: string, message: string) => {
	if (code === 'moderation_blocked' || /safety|moderation|content policy/i.test(message)) {
		return "OpenAI declined this edit under its content rules. It refuses nudity and very revealing photos, so use the AI editor for PG-13 and editorial shots, and the regular editor for the rest.";
	}
	if (status === 401) return 'The OpenAI API key is not valid. Check OPENAI_API_KEY in Vercel.';
	if (status === 429) return 'OpenAI says the account is out of credit or sending too fast. Check billing at platform.openai.com, or wait a minute.';
	if (/organization must be verified|verify/i.test(message)) return `OpenAI needs your organization verified before it allows this model: ${message}`;
	return `OpenAI could not make this edit: ${message || `error ${status}`}`;
};

export const POST: APIRoute = async ({ request, cookies }) => {
	if (!hasAdminAccess(cookies)) return json({ error: 'Your admin sign-in has expired. Open the link with your admin token again.' }, 401);
	const key = (OPENAI_API_KEY ?? '').trim();
	if (!key) return json({ error: 'The AI editor is not set up yet: add OPENAI_API_KEY in Vercel > Settings > Environment Variables, then redeploy.' }, 503);

	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ error: 'The upload did not arrive in one piece. Try again.' }, 400);
	}
	const prompt = String(form.get('prompt') ?? '').trim();
	const image = form.get('image');
	if (!prompt) return json({ error: 'Type what you want changed.' }, 400);
	if (prompt.length > 30000) return json({ error: 'That instruction is too long.' }, 400);
	if (!(image instanceof File) || !image.size) return json({ error: 'Open a photo first.' }, 400);

	const requested = String(form.get('model') ?? '');
	const model = MODELS.has(requested) ? requested : (OPENAI_IMAGE_MODEL ?? '').trim() || 'chatgpt-image-latest';
	const quality = QUALITIES.has(String(form.get('quality'))) ? String(form.get('quality')) : 'high';
	const keepPerson = form.get('keepPerson') !== 'off';
	const mask = form.get('mask');
	const references = form
		.getAll('reference')
		.filter((f): f is File => f instanceof File && f.size > 0)
		.slice(0, MAX_REFERENCES);

	const body = new FormData();
	body.append('model', model);
	body.append(
		'prompt',
		[
			prompt,
			mask instanceof File && mask.size ? 'Only change the selected area of the first image.' : '',
			references.length ? 'The other images are references to take details from; the first image is the photo being edited.' : '',
			keepPerson ? KEEP_PERSON : ''
		]
			.filter(Boolean)
			.join('\n\n')
	);
	body.append('image[]', image, 'photo.jpg');
	references.forEach((ref, i) => body.append('image[]', ref, `reference-${i + 1}.jpg`));
	if (mask instanceof File && mask.size) body.append('mask', mask, 'mask.png');
	body.append('quality', quality);
	body.append('size', 'auto');
	body.append('n', '1');
	body.append('output_format', 'jpeg');
	body.append('output_compression', '92');

	const base = ((OPENAI_BASE_URL ?? '').trim() || 'https://api.openai.com/v1').replace(/\/+$/, '');
	const started = Date.now();
	let res: Response;
	try {
		res = await fetch(`${base}/images/edits`, {
			method: 'POST',
			headers: { Authorization: `Bearer ${key}` },
			body,
			signal: AbortSignal.timeout(285_000)
		});
	} catch (err) {
		const timedOut = err instanceof Error && err.name === 'TimeoutError';
		return json({ error: timedOut ? 'OpenAI took too long. Try again, or choose a faster quality.' : 'Could not reach OpenAI. Try again.' }, 504);
	}

	const data = (await res.json().catch(() => ({}))) as {
		data?: { b64_json?: string; revised_prompt?: string }[];
		error?: { message?: string; code?: string };
		usage?: { total_tokens?: number };
	};
	if (!res.ok || !data.data?.[0]?.b64_json) {
		const message = data.error?.message ?? '';
		console.error('[ai-edit] OpenAI error', res.status, data.error?.code, message);
		return json({ error: friendlyError(res.status, data.error?.code ?? '', message) }, res.ok ? 502 : res.status === 400 ? 422 : 502);
	}
	return json({
		image: `data:image/jpeg;base64,${data.data[0].b64_json}`,
		model,
		quality,
		seconds: Math.round((Date.now() - started) / 1000)
	});
};
