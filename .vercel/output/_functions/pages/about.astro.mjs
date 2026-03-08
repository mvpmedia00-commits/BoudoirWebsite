import { c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../chunks/BaseHead_BXjp2pBo.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Header_BmKSZvhv.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1Yq4sn } from '../chunks/blog-placeholder-about_DKvlEyOU.mjs';
import { S as SITE_TITLE } from '../chunks/consts_C6Gzotw0.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `About | ${SITE_TITLE}`, "description": "Meet Matthew Phillips, photographer behind MVP Media." })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <section class="about-grid"> <img${addAttribute(__ASTRO_IMAGE_IMPORT_Z1Yq4sn.src, "src")} alt="Lead photographer holding camera during a shoot." loading="lazy"> <div> <p class="eyebrow">Meet the Photographer</p> <h1>Hi, I am Matthew Phillips.</h1> <p>
I built MVP Media to deliver premium photography with clear direction, consistent quality, and a
						discreet professional process from inquiry to final delivery.
</p> <p>
My work is dedicated to after dark boudoir and private adult portrait sessions. Every project begins
						with strategy and ends with intentional images delivered with discretion.
</p> </div> </section> <section class="values"> <article> <h2>Guided Experience</h2> <p>You never have to wonder what to do next. I guide pacing, poses, and timeline flow.</p> </article> <article> <h2>True-to-Life Color</h2> <p>Clean cinematic grading that holds up over time and across platforms.</p> </article> <article> <h2>Story-First Delivery</h2> <p>Final galleries are structured for narrative flow, social use, and marketing assets.</p> </article> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/about.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
