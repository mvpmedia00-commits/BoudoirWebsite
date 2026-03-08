import { c as clearAdminSession, i as isAdminConfigured, v as verifyAdminToken, g as grantAdminSession } from '../../chunks/auth_BQBBuG7a.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ cookies, request }) => {
  try {
    const body = await request.json();
    const token = body.token?.trim() ?? "";
    if (!isAdminConfigured()) {
      return new Response(JSON.stringify({ error: "Admin access is not configured." }), { status: 500 });
    }
    if (!verifyAdminToken(token)) {
      return new Response(JSON.stringify({ error: "Access token is not valid." }), { status: 401 });
    }
    grantAdminSession(cookies);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
const DELETE = async ({ cookies }) => {
  clearAdminSession(cookies);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
