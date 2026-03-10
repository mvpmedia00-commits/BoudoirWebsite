export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ cookies, url, redirect }) => {
  const returnTo = url.searchParams.get("returnTo") || "/";
  cookies.set("mvp_adult_access", "granted", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 24 * 30
  });
  return redirect(returnTo);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
