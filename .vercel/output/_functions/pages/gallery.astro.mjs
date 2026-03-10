import { c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../chunks/BaseHead_Wy0sVJGX.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Header_DmMLhIda.mjs';
import { S as SITE_TITLE } from '../chunks/consts_B2K2yu7A.mjs';
import { G as GALLERY_CATEGORIES } from '../chunks/galleryMedia_MWrt3wVc.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1F4X4R } from '../chunks/blog-placeholder-1_D1Pmb4Eu.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_MGbyL, a as __ASTRO_IMAGE_IMPORT_1inyCS, b as __ASTRO_IMAGE_IMPORT_ZulDpU, c as __ASTRO_IMAGE_IMPORT_1NHVvs } from '../chunks/blog-placeholder-5_UAO6lreG.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1Yq4sn } from '../chunks/blog-placeholder-about_DKvlEyOU.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const categoryVisuals = {
    boudoir: {
      image: __ASTRO_IMAGE_IMPORT_ZulDpU.src,
      mood: "Warm editorial silhouettes and confident direction."
    },
    "artistic-nude": {
      image: __ASTRO_IMAGE_IMPORT_1inyCS.src,
      mood: "Fine-art composition focused on form, light, and shape."
    },
    "body-paint": {
      image: __ASTRO_IMAGE_IMPORT_Z1F4X4R.src,
      mood: "Color-washed texture and body-art storytelling."
    },
    "editorial-portrait": {
      image: __ASTRO_IMAGE_IMPORT_MGbyL.src,
      mood: "Brand-safe portraiture with cinematic styling and polish."
    }
  };
  const featuredStrip = [__ASTRO_IMAGE_IMPORT_Z1F4X4R.src, __ASTRO_IMAGE_IMPORT_1NHVvs.src, __ASTRO_IMAGE_IMPORT_ZulDpU.src, __ASTRO_IMAGE_IMPORT_1inyCS.src, __ASTRO_IMAGE_IMPORT_MGbyL.src, __ASTRO_IMAGE_IMPORT_Z1Yq4sn.src];
  return renderTemplate`<html lang="en" data-astro-cid-sahthylw> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Gallery | ${SITE_TITLE}`, "description": "Explore boudoir, artistic nude, body paint, and editorial portrait portfolio categories.", "data-astro-cid-sahthylw": true })}${renderHead()}</head> <body data-astro-cid-sahthylw> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sahthylw": true })} <main class="gallery-index" data-astro-cid-sahthylw> <section class="gallery-atmosphere" data-astro-cid-sahthylw> <img class="atmosphere-still"${addAttribute(__ASTRO_IMAGE_IMPORT_Z1Yq4sn.src, "src")} alt="" loading="eager" data-astro-cid-sahthylw> <div class="gallery-atmosphere-overlay" data-astro-cid-sahthylw></div> <div class="gallery-lead fade-up" data-astro-cid-sahthylw> <p class="eyebrow" data-astro-cid-sahthylw>Curated For The Bold</p> <h1 data-astro-cid-sahthylw>Every Body Tells A Story. Choose Where Yours Begins.</h1> <p data-astro-cid-sahthylw>
Cinematic boudoir, artistic nude, body-paint, and editorial portrait collections with discreet direction and premium
						visual finish.
</p> <p class="lead-note" data-astro-cid-sahthylw>Sensitive categories use an elegant 18+ confirmation before entry.</p> </div> </section> <section class="gallery-grid fade-up" data-astro-cid-sahthylw> ${GALLERY_CATEGORIES.map((category) => renderTemplate`<a class="category-card"${addAttribute(`/gallery/${category.slug}`, "href")} data-astro-cid-sahthylw> <div class="category-media" data-astro-cid-sahthylw> <img${addAttribute(categoryVisuals[category.slug].image, "src")}${addAttribute(`${category.label} teaser`, "alt")} loading="lazy" data-astro-cid-sahthylw> <div class="category-wash" data-astro-cid-sahthylw></div> </div> <div class="category-content" data-astro-cid-sahthylw> <p class="card-kicker" data-astro-cid-sahthylw>${category.sensitive ? "18+ Category" : "All Audiences"}</p> <h2 data-astro-cid-sahthylw>${category.label}</h2> <p data-astro-cid-sahthylw>${category.description}</p> <p class="category-mood" data-astro-cid-sahthylw>${categoryVisuals[category.slug].mood}</p> <span data-astro-cid-sahthylw>Open Gallery</span> </div> </a>`)} </section> <section class="featured-strip fade-up" aria-label="Featured Work Preview" data-astro-cid-sahthylw> <div class="featured-track" data-astro-cid-sahthylw> ${featuredStrip.map((src) => renderTemplate`<img${addAttribute(src, "src")} alt="Featured work teaser" loading="lazy" data-astro-cid-sahthylw>`)} ${featuredStrip.map((src) => renderTemplate`<img${addAttribute(src, "src")} alt="Featured work teaser" loading="lazy" data-astro-cid-sahthylw>`)} </div> </section> <section class="creator-reassurance fade-up" data-astro-cid-sahthylw> <p class="eyebrow" data-astro-cid-sahthylw>Creator Reassurance</p> <h2 data-astro-cid-sahthylw>Private. Empowering. Artistically Directed.</h2> <div class="reassurance-grid" data-astro-cid-sahthylw> <article data-astro-cid-sahthylw> <h3 data-astro-cid-sahthylw>Your Images, Your Control</h3> <p data-astro-cid-sahthylw>Publication permissions stay in your hands with clear boundaries and documented usage.</p> </article> <article data-astro-cid-sahthylw> <h3 data-astro-cid-sahthylw>Discreet Premium Delivery</h3> <p data-astro-cid-sahthylw>Secure transfer workflow for personal galleries, campaign edits, and platform-ready exports.</p> </article> <article data-astro-cid-sahthylw> <h3 data-astro-cid-sahthylw>Creative Direction</h3> <p data-astro-cid-sahthylw>Guided posing and styling that preserves comfort while delivering cinematic, elevated outcomes.</p> </article> </div> </section> <section class="category-cta fade-up" data-astro-cid-sahthylw> <h2 data-astro-cid-sahthylw>Step Into The Studio</h2> <p data-astro-cid-sahthylw>Begin your transformation with a private consultation and a curated concept built around your vision.</p> <a class="btn btn-solid" href="/booking" data-astro-cid-sahthylw>Begin Your Session</a> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sahthylw": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Gallery,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
