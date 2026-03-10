import { e as createAstro, c as createComponent } from '../../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import 'clsx';
import '../../chunks/BaseHead_Wy0sVJGX.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Feed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feed;
  Astro2.url.searchParams.get("token");
  {
    return Astro2.redirect("/");
  }
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/admin/feed.astro", void 0);
const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/admin/feed.astro";
const $$url = "/admin/feed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Feed,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
