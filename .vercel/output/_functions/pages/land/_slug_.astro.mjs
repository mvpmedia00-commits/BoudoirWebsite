import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, f as renderScript, r as renderComponent, a as renderHead, F as Fragment } from '../../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../../chunks/BaseHead_BXjp2pBo.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Header_BmKSZvhv.mjs';
import { $ as $$LeadForm } from '../../chunks/LeadForm_O0OWr70y.mjs';
import 'clsx';
import { _ as __ASTRO_IMAGE_IMPORT_Z1F4X4R } from '../../chunks/blog-placeholder-1_D1Pmb4Eu.mjs';
import { c as __ASTRO_IMAGE_IMPORT_1NHVvs, b as __ASTRO_IMAGE_IMPORT_ZulDpU, a as __ASTRO_IMAGE_IMPORT_1inyCS, _ as __ASTRO_IMAGE_IMPORT_MGbyL } from '../../chunks/blog-placeholder-5_UAO6lreG.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://mvpmedia.studio");
const $$NicheGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NicheGallery;
  const { niche } = Astro2.props;
  const fallbackCards = [
    { title: `${niche} session highlight`, image: __ASTRO_IMAGE_IMPORT_Z1F4X4R.src },
    { title: `${niche} detail frame`, image: __ASTRO_IMAGE_IMPORT_1NHVvs.src },
    { title: `${niche} hero composition`, image: __ASTRO_IMAGE_IMPORT_ZulDpU.src },
    { title: `${niche} ambient portrait`, image: __ASTRO_IMAGE_IMPORT_1inyCS.src },
    { title: `${niche} closing shot`, image: __ASTRO_IMAGE_IMPORT_MGbyL.src }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="niche-gallery" data-niche-gallery${addAttribute(niche, "data-niche")} data-astro-cid-rhdp6blp> ${fallbackCards.map((card) => renderTemplate`<figure data-astro-cid-rhdp6blp> <img${addAttribute(card.image, "src")}${addAttribute(card.title, "alt")} loading="lazy" data-astro-cid-rhdp6blp> <figcaption data-astro-cid-rhdp6blp>${card.title}</figcaption> </figure>`)} </div> ${renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/components/ui/NicheGallery.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/ui/NicheGallery.astro", void 0);

const $$Astro$1 = createAstro("https://mvpmedia.studio");
const $$VideoPlayer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoPlayer;
  const { src, poster } = Astro2.props;
  const videoId = `video-${Math.random().toString(36).slice(2)}`;
  return renderTemplate`${maybeRenderHead()}<div class="video-wrap"${addAttribute(videoId, "data-video-wrap")} data-astro-cid-c6ixmeqx> ${poster && renderTemplate`<img class="poster"${addAttribute(poster, "src")} alt="" aria-hidden="true" data-astro-cid-c6ixmeqx>`} <video${addAttribute(videoId, "id")}${addAttribute(src, "src")} muted playsinline loop preload="metadata"${addAttribute(poster, "poster")} aria-label="Portfolio reel preview" data-astro-cid-c6ixmeqx></video> </div> ${renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/components/ui/VideoPlayer.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/ui/VideoPlayer.astro", void 0);

const NICHES = [
  {
    slug: "boudoir",
    name: "After Dark Boudoir",
    title: "After Dark Boudoir Sessions",
    description: "Discreet, luxury boudoir photography for adults with premium direction and private delivery.",
    hero: "Elegant, intentional, adult boudoir visuals built around trust, comfort, and discretion.",
    isMature: true
  },
  {
    slug: "artistic-nude",
    name: "Artistic Nude",
    title: "Artistic Nude Portrait Sessions",
    description: "Fine-art nude portrait sessions with museum-grade composition, privacy-first process, and tasteful direction.",
    hero: "Minimal, sculptural, artistic nude imagery for adults seeking elevated visual storytelling.",
    isMature: true
  },
  {
    slug: "afterdark",
    name: "Afterdark",
    title: "Afterdark Editorial Sessions",
    description: "Cinematic low-light afterdark sessions focused on mood, silhouette, and premium editorial execution.",
    hero: "Night-driven editorial portraits designed for atmosphere, confidence, and discretion.",
    isMature: true
  }
];
const NICHE_SLUGS = NICHES.map((entry) => entry.slug);
function getNicheBySlug(slug) {
  return NICHES.find((entry) => entry.slug === slug);
}

const $$Astro = createAstro("https://mvpmedia.studio");
function getStaticPaths() {
  return NICHE_SLUGS.map((slug) => ({
    params: { slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug ?? "";
  const niche = getNicheBySlug(slug);
  if (!niche) {
    return Astro2.redirect("/");
  }
  const hasAdultAccess = Astro2.cookies.get("mvp_adult_access")?.value === "granted";
  const requiresGate = niche.isMature === true;
  const isAllowed = !requiresGate || hasAdultAccess;
  return renderTemplate`<html lang="en" data-astro-cid-stt23bxk> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${niche.title} | MVP Media`, "description": niche.description, "image": __ASTRO_IMAGE_IMPORT_1NHVvs, "noIndex": requiresGate, "data-astro-cid-stt23bxk": true })}${renderHead()}</head> <body data-astro-cid-stt23bxk> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-stt23bxk": true })} <main data-astro-cid-stt23bxk> ${isAllowed ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-stt23bxk": true }, { "default": ($$result2) => renderTemplate` <section class="niche-hero" data-astro-cid-stt23bxk> <div data-astro-cid-stt23bxk> <h1 data-astro-cid-stt23bxk>${niche.title}</h1> <p data-astro-cid-stt23bxk>${niche.hero}</p> </div> ${renderComponent($$result2, "VideoPlayer", $$VideoPlayer, { "src": "https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4", "poster": __ASTRO_IMAGE_IMPORT_1NHVvs.src, "data-astro-cid-stt23bxk": true })} </section> <section class="niche-section" data-astro-cid-stt23bxk> <h2 data-astro-cid-stt23bxk>Featured Work</h2> ${renderComponent($$result2, "NicheGallery", $$NicheGallery, { "niche": niche.slug, "data-astro-cid-stt23bxk": true })} </section> <section class="niche-section two-col" data-astro-cid-stt23bxk> <div data-astro-cid-stt23bxk> <h2 data-astro-cid-stt23bxk>Why This Matters</h2> <ul data-astro-cid-stt23bxk> <li data-astro-cid-stt23bxk><strong data-astro-cid-stt23bxk>Experience:</strong> Clear session planning from first message to final gallery.</li> <li data-astro-cid-stt23bxk><strong data-astro-cid-stt23bxk>Comfort:</strong> Direction that keeps your session relaxed, private, and efficient.</li> <li data-astro-cid-stt23bxk><strong data-astro-cid-stt23bxk>Results:</strong> Cinematic boudoir images with premium finishing and discretion.</li> </ul> <p class="trust" data-astro-cid-stt23bxk>Trusted by adult clients nationwide for discreet, luxury boudoir work.</p> </div> <div data-astro-cid-stt23bxk> <h2 data-astro-cid-stt23bxk>Get a Quote</h2> ${renderComponent($$result2, "LeadForm", $$LeadForm, { "niche": niche.slug, "source": `${niche.slug}-page`, "data-astro-cid-stt23bxk": true })} </div> </section> ` })}` : renderTemplate`<section class="gate" data-astro-cid-stt23bxk> <p class="eyebrow" data-astro-cid-stt23bxk>Private Access</p> <h1 data-astro-cid-stt23bxk>Mature Artistic Portfolio</h1> <p data-astro-cid-stt23bxk>
This section contains mature, non-explicit portrait work intended for adults who request it.
							Continue only if you are 18+ and intentionally reviewing this service.
</p> <a class="btn btn-solid"${addAttribute(`/api/adult-access?returnTo=/land/${niche.slug}`, "href")} data-astro-cid-stt23bxk>I am 18+ and want to continue</a> <a class="btn btn-ghost" href="/" data-astro-cid-stt23bxk>Return to Homepage</a> </section>`} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-stt23bxk": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/land/[slug].astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/land/[slug].astro";
const $$url = "/land/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
