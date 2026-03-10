import { c as createComponent, r as renderComponent, a as renderHead, g as renderScript, d as renderTemplate } from '../../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../../chunks/BaseHead_Wy0sVJGX.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Header_DmMLhIda.mjs';
import { $ as $$GalleryCanvas, a as $$AgeGate } from '../../chunks/AgeGate_DEnC8Vw_.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_B2K2yu7A.mjs';
import { g as getGalleryCategory, a as getGalleryItemsByCategory } from '../../chunks/galleryMedia_MWrt3wVc.mjs';
export { renderers } from '../../renderers.mjs';

const $$ArtisticNude = createComponent(($$result, $$props, $$slots) => {
  const category = getGalleryCategory("artistic-nude");
  const items = getGalleryItemsByCategory(category.slug);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${category.label} | ${SITE_TITLE}`, "description": category.description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <div id="gallery"> ${renderComponent($$result, "GalleryCanvas", $$GalleryCanvas, { "title": category.label, "description": category.description, "items": items })} </div> ${renderComponent($$result, "Footer", $$Footer, {})} <div id="ageGate"> ${renderComponent($$result, "AgeGate", $$AgeGate, { "redirectTo": "/gallery" })} </div> ${renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery/artistic-nude.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery/artistic-nude.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery/artistic-nude.astro";
const $$url = "/gallery/artistic-nude";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ArtisticNude,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
