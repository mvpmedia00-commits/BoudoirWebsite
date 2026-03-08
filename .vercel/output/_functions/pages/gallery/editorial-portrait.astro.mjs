import { c as createComponent, r as renderComponent, a as renderHead, d as renderTemplate } from '../../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../../chunks/BaseHead_BXjp2pBo.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Header_BmKSZvhv.mjs';
import { $ as $$GalleryCanvas } from '../../chunks/GalleryCanvas_wNMPTP-O.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_C6Gzotw0.mjs';
import { g as getGalleryCategory, a as getGalleryItemsByCategory } from '../../chunks/galleryMedia_CTS_rLaz.mjs';
export { renderers } from '../../renderers.mjs';

const $$EditorialPortrait = createComponent(($$result, $$props, $$slots) => {
  const category = getGalleryCategory("editorial-portrait");
  const items = getGalleryItemsByCategory(category.slug);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${category.label} | ${SITE_TITLE}`, "description": category.description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "GalleryCanvas", $$GalleryCanvas, { "title": category.label, "description": category.description, "items": items })} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery/editorial-portrait.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery/editorial-portrait.astro";
const $$url = "/gallery/editorial-portrait";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$EditorialPortrait,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
