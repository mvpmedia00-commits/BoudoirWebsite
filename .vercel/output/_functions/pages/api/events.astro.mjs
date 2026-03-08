import { c as createEvent } from '../../chunks/pocketbase_D_R3pIkz.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.event_name || !body.page) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }
    await createEvent({
      event_name: body.event_name.trim(),
      page: body.page.trim(),
      source: body.source?.trim() ?? "",
      niche: body.niche?.trim() ?? "",
      element: body.element?.trim() ?? "",
      meta: body.meta?.trim() ?? ""
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
