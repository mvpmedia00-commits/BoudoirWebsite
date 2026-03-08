import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, d as renderTemplate } from '../../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../../chunks/BaseHead_BXjp2pBo.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Header_BmKSZvhv.mjs';
import { $ as $$GalleryCanvas } from '../../chunks/GalleryCanvas_wNMPTP-O.mjs';
import { $ as $$AgeGate } from '../../chunks/AgeGate_Db8cP2KN.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_C6Gzotw0.mjs';
import { j as hasAdultAccess } from '../../chunks/auth_BQBBuG7a.mjs';
import { g as getGalleryCategory, a as getGalleryItemsByCategory } from '../../chunks/galleryMedia_CTS_rLaz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mvpmedia.studio");
const $$Boudoir = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Boudoir;
  const category = getGalleryCategory("boudoir");
  const items = getGalleryItemsByCategory(category.slug);
  const isAllowed = !category.sensitive || hasAdultAccess(Astro2.cookies);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${category.label} | ${SITE_TITLE}`, "description": category.description, "noIndex": category.sensitive })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${isAllowed ? renderTemplate`${renderComponent($$result, "GalleryCanvas", $$GalleryCanvas, { "title": category.label, "description": category.description, "items": items })}` : renderTemplate`${renderComponent($$result, "AgeGate", $$AgeGate, { "redirectTo": "/gallery", "returnTo": Astro2.url.pathname })}`} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery/boudoir.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery/boudoir.astro";
const $$url = "/gallery/boudoir";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Boudoir,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
