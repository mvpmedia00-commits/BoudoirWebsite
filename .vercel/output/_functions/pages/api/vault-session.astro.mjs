import { b as clearVaultSession, d as isVaultConfigured, e as verifyVaultAccessCode, f as grantVaultSession } from '../../chunks/auth_BQBBuG7a.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ cookies, request }) => {
  try {
    const body = await request.json();
    const code = body.code?.trim() ?? "";
    if (!isVaultConfigured()) {
      return new Response(JSON.stringify({ error: "Vault access is not configured." }), { status: 500 });
    }
    if (!verifyVaultAccessCode(code)) {
      return new Response(JSON.stringify({ error: "Access code is not valid." }), { status: 401 });
    }
    grantVaultSession(cookies);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
const DELETE = async ({ cookies }) => {
  clearVaultSession(cookies);
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
