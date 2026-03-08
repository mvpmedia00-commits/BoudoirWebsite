import { n as normalizeReturnTo, a as grantAdultAccess } from '../../chunks/auth_BQBBuG7a.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ cookies, url, redirect }) => {
  const returnTo = normalizeReturnTo(url.searchParams.get("returnTo"), "/");
  grantAdultAccess(cookies);
  return redirect(returnTo);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
