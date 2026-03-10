import { u as updateLead, a as createLead } from '../../chunks/pocketbase_CQz5--Ye.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.name || !body.email || !body.niche) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }
    await createLead({
      name: body.name.trim(),
      email: body.email.trim(),
      niche: body.niche.trim(),
      message: body.message?.trim() ?? "",
      budget: body.budget ?? null,
      source: body.source?.trim() ?? "",
      utm_source: body.utm_source?.trim() ?? "",
      utm_medium: body.utm_medium?.trim() ?? "",
      utm_campaign: body.utm_campaign?.trim() ?? "",
      referrer: body.referrer?.trim() ?? "",
      status: "new"
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
const PATCH = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.id || !body.status && typeof body.notes !== "string") {
      return new Response(JSON.stringify({ error: "Missing id and patch fields." }), { status: 400 });
    }
    await updateLead(body.id, {
      ...body.status ? { status: body.status } : {},
      ...typeof body.notes === "string" ? { notes: body.notes } : {}
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	PATCH,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
