import { e as createAstro, c as createComponent, r as renderComponent, b as addAttribute, a as renderHead, F as Fragment, d as renderTemplate, g as renderScript } from '../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../chunks/BaseHead_Wy0sVJGX.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Header_DmMLhIda.mjs';
import { S as SITE_TITLE } from '../chunks/consts_B2K2yu7A.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1F4X4R } from '../chunks/blog-placeholder-1_D1Pmb4Eu.mjs';
import { c as __ASTRO_IMAGE_IMPORT_1NHVvs, b as __ASTRO_IMAGE_IMPORT_ZulDpU, a as __ASTRO_IMAGE_IMPORT_1inyCS, _ as __ASTRO_IMAGE_IMPORT_MGbyL } from '../chunks/blog-placeholder-5_UAO6lreG.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1Yq4sn } from '../chunks/blog-placeholder-about_DKvlEyOU.mjs';
import { l as listMediaItems } from '../chunks/pocketbase_CQz5--Ye.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Hub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hub;
  const DRIVE_VIDEO_PREVIEW = "https://drive.google.com/file/d/1RizgFs5c6eV4A7hWAinKD7jsAl_k-xmI/preview";
  const HUB_HERO_IMAGE = "https://res.cloudinary.com/dg4xwrzu9/image/upload/v1772942536/5B1A2340_hocjor.jpg";
  const slices = [
    {
      id: "branding",
      kicker: "Branding Content",
      title: "Recognition Is Never an Accident.",
      image: __ASTRO_IMAGE_IMPORT_Z1F4X4R.src,
      video: "https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4",
      statA: "+100%",
      statB: "+100%",
      metricA: "Follower Growth",
      metricB: "Returning Users",
      copy: "Consistent visual language and clear storytelling keep your brand memorable.",
      reverse: false
    },
    {
      id: "edits",
      kicker: "High Quality Edits",
      title: "Bad Editing Kills a Great Message.",
      image: __ASTRO_IMAGE_IMPORT_1NHVvs.src,
      video: "https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4",
      statA: "+100%",
      statB: "+1.5Mio.",
      metricA: "Engagement Rate",
      metricB: "Video Views",
      copy: "Precise editing, timing, and sound design hold attention and deliver your message clearly.",
      reverse: true
    },
    {
      id: "ugc",
      kicker: "UGC Content",
      title: "Standard Content Gets Lost in the Feed.",
      image: __ASTRO_IMAGE_IMPORT_ZulDpU.src,
      video: "https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4",
      statA: "+1Mio.",
      statB: "+10k",
      metricA: "Views",
      metricB: "Comments",
      copy: "Authentic creator formats build trust, reach, and measurable engagement.",
      reverse: false
    },
    {
      id: "testimonials",
      kicker: "Testimonials",
      title: "Claims Mean Nothing Without Proof.",
      image: __ASTRO_IMAGE_IMPORT_1inyCS.src,
      video: "https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4",
      statA: "+50%",
      statB: "+4.5%",
      metricA: "Repeat Purchase Rate",
      metricB: "Conversion Rate",
      copy: "Real voices over vague claims. We produce testimonials that build trust and drive action.",
      reverse: true
    },
    {
      id: "long-form",
      kicker: "Long Form Content",
      title: "Boring Is Worse Than Long.",
      image: __ASTRO_IMAGE_IMPORT_MGbyL.src,
      video: "https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4",
      statA: "+0%",
      statB: "+100%",
      metricA: "Bounce Rate",
      metricB: "Watch Time",
      copy: "Long-form content tells deeper stories, keeps attention longer, and builds authority.",
      reverse: false
    },
    {
      id: "droneshots",
      kicker: "Drone Shots",
      title: "Perspective Changes Performance.",
      image: __ASTRO_IMAGE_IMPORT_Z1Yq4sn.src,
      video: "https://cdn.coverr.co/videos/coverr-a-city-at-night-1579/1080p.mp4",
      statA: "+100%",
      statB: "+20%",
      metricA: "Recognition",
      metricB: "More Inquiries",
      copy: "Aerial perspective adds depth, motion, and a clear visual advantage to your project.",
      reverse: true
    }
  ];
  const stripImages = [__ASTRO_IMAGE_IMPORT_Z1F4X4R.src, __ASTRO_IMAGE_IMPORT_1NHVvs.src, __ASTRO_IMAGE_IMPORT_ZulDpU.src, __ASTRO_IMAGE_IMPORT_1inyCS.src, __ASTRO_IMAGE_IMPORT_MGbyL.src, __ASTRO_IMAGE_IMPORT_Z1Yq4sn.src];
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "MVP Media Hub",
    description: "Vertical-first media hub for branding, edits, UGC, testimonials, long form, and drone content.",
    url: Astro2.url.href
  };
  let hubMediaCount = 0;
  try {
    const media = await listMediaItems(void 0, void 0, 200);
    hubMediaCount = media.length;
  } catch {
    hubMediaCount = 0;
  }
  return renderTemplate`<html lang="en" data-astro-cid-ji5mkv6w> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Media Hub | ${SITE_TITLE}`, "description": "Media production hub in a vertical-first style.", "keywords": "media production, video editing, ugc production, testimonial video, drone video", "jsonLd": hubSchema, "data-astro-cid-ji5mkv6w": true })}<link rel="preconnect" href="https://res.cloudinary.com" crossorigin><link rel="preload" as="image"${addAttribute(HUB_HERO_IMAGE, "href")}>${renderHead()}</head> <body data-astro-cid-ji5mkv6w> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ji5mkv6w": true })} <main class="hub-main hub-page" data-astro-cid-ji5mkv6w> <section class="hub-superhero" data-astro-cid-ji5mkv6w> <img class="hub-superhero-image"${addAttribute(HUB_HERO_IMAGE, "src")} alt="MVP Media hero portrait" loading="eager" fetchpriority="high" decoding="async" data-astro-cid-ji5mkv6w> <div class="hub-superhero-overlay" data-astro-cid-ji5mkv6w></div> <div class="container hub-superhero-content hub-hero" data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>MVP Media Hub</p> <h1 class="hub-heading-accent" data-astro-cid-ji5mkv6w>Big Vision.<br data-astro-cid-ji5mkv6w>Cinematic Output.</h1> <p class="muted" data-astro-cid-ji5mkv6w>
Strategy, production, and post in one workflow. Built for brands that want premium results.
</p> <p class="muted subtle" data-astro-cid-ji5mkv6w>Media library synced: ${hubMediaCount > 0 ? `${hubMediaCount} items` : "fallback mode"}</p> <div class="superhero-actions" data-astro-cid-ji5mkv6w> <a class="btn-primary" href="#hub-start" data-astro-cid-ji5mkv6w>Explore Hub</a> <a class="btn-secondary" href="#youtube-station" data-astro-cid-ji5mkv6w>YouTube Station</a> </div> </div> </section> <div class="hub-container" data-astro-cid-ji5mkv6w> <section class="hero-slice" id="hub-start" data-astro-cid-ji5mkv6w> <div class="container hero-grid" data-astro-cid-ji5mkv6w> <div class="reveal" data-stagger="0" data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>Video Agency</p> <h1 data-astro-cid-ji5mkv6w>Vertical<br data-astro-cid-ji5mkv6w>First</h1> <p class="lead" data-astro-cid-ji5mkv6w>A media team with zero tolerance for average work.</p> <p class="muted" data-astro-cid-ji5mkv6w>
We produce video content for clients who want more than standard. Strategy-led, platform-ready, and focused on impact.
</p> <a class="btn-primary" href="/booking" data-astro-cid-ji5mkv6w>Get Started</a> </div> <div class="hero-video-wrap reveal" data-stagger="1" data-astro-cid-ji5mkv6w> <div class="hero-glow" data-astro-cid-ji5mkv6w></div> <iframe data-expandable-iframe${addAttribute(DRIVE_VIDEO_PREVIEW, "src")} title="MVP Media Featured Reel" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen data-astro-cid-ji5mkv6w></iframe> <button class="expand-btn" type="button" data-expand-trigger aria-label="Open video fullscreen" data-astro-cid-ji5mkv6w>⤢</button> </div> <div class="hero-stats reveal" data-stagger="2" data-astro-cid-ji5mkv6w> <div data-astro-cid-ji5mkv6w><strong data-count data-value="5000000" data-prefix="+" data-suffix=" Mio." data-astro-cid-ji5mkv6w>+5 Mio.</strong><span data-astro-cid-ji5mkv6w>Monthly Views</span></div> <div data-astro-cid-ji5mkv6w><strong data-count data-value="25000" data-prefix="+" data-suffix="K" data-astro-cid-ji5mkv6w>+25K</strong><span data-astro-cid-ji5mkv6w>Produced Videos</span></div> <div data-astro-cid-ji5mkv6w><strong data-count data-value="100" data-prefix="+" data-suffix="%" data-astro-cid-ji5mkv6w>+100%</strong><span data-astro-cid-ji5mkv6w>Commitment</span></div> </div> </div> </section> <section class="trust-banner" data-astro-cid-ji5mkv6w> <div class="container" data-astro-cid-ji5mkv6w> <div class="scroller-track" data-astro-cid-ji5mkv6w> <span data-astro-cid-ji5mkv6w>LICHTWUNDER</span><span data-astro-cid-ji5mkv6w>SCHUECO</span><span data-astro-cid-ji5mkv6w>WICKER</span><span data-astro-cid-ji5mkv6w>GELB SOLAR</span> <span data-astro-cid-ji5mkv6w>OSBORN</span><span data-astro-cid-ji5mkv6w>AUTOHAUS HOFFMANN</span><span data-astro-cid-ji5mkv6w>TEAMPROJEKT</span> <span data-astro-cid-ji5mkv6w>LICHTWUNDER</span><span data-astro-cid-ji5mkv6w>SCHUECO</span><span data-astro-cid-ji5mkv6w>WICKER</span><span data-astro-cid-ji5mkv6w>GELB SOLAR</span> <span data-astro-cid-ji5mkv6w>OSBORN</span><span data-astro-cid-ji5mkv6w>AUTOHAUS HOFFMANN</span><span data-astro-cid-ji5mkv6w>TEAMPROJEKT</span> </div> </div> </section> <nav class="section-nav" data-astro-cid-ji5mkv6w> <div class="container nav-links" data-astro-cid-ji5mkv6w> <a href="#branding" data-astro-cid-ji5mkv6w>Branding</a> <a href="#edits" data-astro-cid-ji5mkv6w>Edits</a> <a href="#ugc" data-astro-cid-ji5mkv6w>UGC</a> <a href="#testimonials" data-astro-cid-ji5mkv6w>Testimonials</a> <a href="#long-form" data-astro-cid-ji5mkv6w>Long Form</a> <a href="#droneshots" data-astro-cid-ji5mkv6w>Drone</a> </div> </nav> ${slices.map((slice, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ji5mkv6w": true }, { "default": async ($$result2) => renderTemplate` <section class="video-facts-slice"${addAttribute(slice.id, "id")}${addAttribute(slice.id, "data-station")} data-astro-cid-ji5mkv6w> <div class="container card-shell hub-card reveal" data-astro-cid-ji5mkv6w> <div class="intro" data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>${slice.kicker}</p> <p class="display" data-astro-cid-ji5mkv6w>${slice.title}</p> </div> <div${addAttribute(["content-row", { reverse: slice.reverse }], "class:list")} data-astro-cid-ji5mkv6w> <div class="media-col reveal" data-stagger="1" data-astro-cid-ji5mkv6w> <video class="media-video parallax" data-parallax-speed="0.08" data-expandable-video${addAttribute(slice.id, "data-station-media")} autoplay muted loop playsinline preload="metadata"${addAttribute(slice.image, "poster")} data-astro-cid-ji5mkv6w> <source${addAttribute(slice.video, "src")} type="video/mp4" data-astro-cid-ji5mkv6w> </video> <button class="expand-btn" type="button" data-expand-trigger aria-label="Open video fullscreen" data-astro-cid-ji5mkv6w>⤢</button> </div> <div class="text-col reveal" data-stagger="2" data-astro-cid-ji5mkv6w> <div class="stats-row" data-astro-cid-ji5mkv6w> <div data-astro-cid-ji5mkv6w><strong data-astro-cid-ji5mkv6w>${slice.statA}</strong><span data-astro-cid-ji5mkv6w>${slice.metricA}</span></div> <div data-astro-cid-ji5mkv6w><strong data-astro-cid-ji5mkv6w>${slice.statB}</strong><span data-astro-cid-ji5mkv6w>${slice.metricB}</span></div> </div> <p data-astro-cid-ji5mkv6w>${slice.copy}</p> <button class="btn-primary" type="button" data-astro-cid-ji5mkv6w>Watch Video</button> </div> </div> </div> </section> ${index < slices.length - 1 && renderTemplate`<section class="photo-divider" data-astro-cid-ji5mkv6w> <div class="container" data-astro-cid-ji5mkv6w> <div${addAttribute(["photo-track", { reverse: index % 2 === 1 }], "class:list")} data-astro-cid-ji5mkv6w> ${stripImages.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="Portfolio strip preview" loading="lazy" data-astro-cid-ji5mkv6w>`)} ${stripImages.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="Portfolio strip preview" loading="lazy" data-astro-cid-ji5mkv6w>`)} </div> </div> </section>`}` })}`)} <section class="services-slice" data-astro-cid-ji5mkv6w> <div class="container reveal" data-stagger="1" data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>Services</p> <h2 data-astro-cid-ji5mkv6w>One Media Agency, Everything You Need</h2> <div class="slider-wrap" data-astro-cid-ji5mkv6w> <button class="slider-btn" data-prev aria-label="Previous" data-astro-cid-ji5mkv6w>‹</button> <div class="slider-track" data-track data-astro-cid-ji5mkv6w> <article class="hub-card" data-astro-cid-ji5mkv6w><h3 data-astro-cid-ji5mkv6w>Concept</h3><p data-astro-cid-ji5mkv6w>Strategy, story architecture, and positioning before production.</p></article> <article class="hub-card" data-astro-cid-ji5mkv6w><h3 data-astro-cid-ji5mkv6w>Production</h3><p data-astro-cid-ji5mkv6w>Shoot planning, on-set direction, and premium capture quality.</p></article> <article class="hub-card" data-astro-cid-ji5mkv6w><h3 data-astro-cid-ji5mkv6w>Editing</h3><p data-astro-cid-ji5mkv6w>Rhythm, clarity, and messaging tuned for every platform.</p></article> <article class="hub-card" data-astro-cid-ji5mkv6w><h3 data-astro-cid-ji5mkv6w>Post Production</h3><p data-astro-cid-ji5mkv6w>Visual enhancement, motion, and finishing for maximum impact.</p></article> <article class="hub-card" data-astro-cid-ji5mkv6w><h3 data-astro-cid-ji5mkv6w>Color Grading</h3><p data-astro-cid-ji5mkv6w>Distinctive looks aligned to your style and brand language.</p></article> <article class="hub-card" data-astro-cid-ji5mkv6w><h3 data-astro-cid-ji5mkv6w>Sound Design</h3><p data-astro-cid-ji5mkv6w>Music, mix, and sound detail for stronger emotional response.</p></article> </div> <button class="slider-btn" data-next aria-label="Next" data-astro-cid-ji5mkv6w>›</button> </div> </div> </section> <section class="youtube-station" id="youtube-station" data-astro-cid-ji5mkv6w> <div class="container station-grid reveal" data-stagger="1" data-astro-cid-ji5mkv6w> <div data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>YouTube Station</p> <h2 data-astro-cid-ji5mkv6w>Channel Highlights</h2> <p class="muted" data-astro-cid-ji5mkv6w>
Add your latest channel videos here to show long-form authority, case breakdowns, and behind-the-scenes content.
</p> <a class="btn-primary" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" data-astro-cid-ji5mkv6w>Open YouTube</a> </div> <div class="youtube-frame" data-astro-cid-ji5mkv6w> <iframe data-expandable-iframe data-station-media="youtube" src="https://www.youtube.com/embed/videoseries?list=PLrAXtmRdnEQxwM7lQfV6m4BGr4pJQpQv4" title="MVP Media YouTube Station" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-ji5mkv6w></iframe> <button class="expand-btn" type="button" data-expand-trigger aria-label="Open YouTube fullscreen" data-astro-cid-ji5mkv6w>⤢</button> </div> </div> </section> <section class="photo-divider" data-astro-cid-ji5mkv6w> <div class="container" data-astro-cid-ji5mkv6w> <div class="photo-track reverse" data-astro-cid-ji5mkv6w> ${stripImages.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="Portfolio strip preview" loading="lazy" data-astro-cid-ji5mkv6w>`)} ${stripImages.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="Portfolio strip preview" loading="lazy" data-astro-cid-ji5mkv6w>`)} </div> </div> </section> <section class="personal-station" id="personal-station" data-astro-cid-ji5mkv6w> <div class="container station-grid reveal" data-stagger="1" data-astro-cid-ji5mkv6w> <div data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>Personal Station</p> <h2 data-astro-cid-ji5mkv6w>Your Signature Video</h2> <p class="muted" data-astro-cid-ji5mkv6w>
This block is for your personal reel or founder story. Replace the source URL with your own final cut.
</p> <a class="btn-secondary" href="/booking" data-astro-cid-ji5mkv6w>Start a Project</a> </div> <div class="personal-video-wrap" data-astro-cid-ji5mkv6w> <iframe data-expandable-iframe data-station-media="personal"${addAttribute(DRIVE_VIDEO_PREVIEW, "src")} title="MVP Media Personal Reel" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen data-astro-cid-ji5mkv6w></iframe> <button class="expand-btn" type="button" data-expand-trigger aria-label="Open personal video fullscreen" data-astro-cid-ji5mkv6w>⤢</button> </div> </div> </section> <section class="proof-slice" data-astro-cid-ji5mkv6w> <div class="container proof-grid reveal" data-stagger="1" data-astro-cid-ji5mkv6w> <article class="hub-card" data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>Process</p> <h3 data-astro-cid-ji5mkv6w>Clear production workflow</h3> <p data-astro-cid-ji5mkv6w>Brief, pre-production, shoot, edit, delivery. Every step has owners, timelines, and review gates.</p> </article> <article class="hub-card" data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>Trust</p> <h3 data-astro-cid-ji5mkv6w>Built for business outcomes</h3> <p data-astro-cid-ji5mkv6w>Used by brands, founders, and teams who need content that converts and stays on-brand.</p> </article> <article class="hub-card" data-astro-cid-ji5mkv6w> <p class="heading" data-astro-cid-ji5mkv6w>Delivery</p> <h3 data-astro-cid-ji5mkv6w>Platform-ready outputs</h3> <p data-astro-cid-ji5mkv6w>Exports and cutdowns for paid social, web headers, reels, and campaign landing pages.</p> </article> </div> </section> <section class="final-cta" data-astro-cid-ji5mkv6w> <div class="container reveal" data-stagger="1" data-astro-cid-ji5mkv6w> <h2 data-astro-cid-ji5mkv6w>Outperform the Competition.</h2> <a class="btn-primary" href="/booking" data-astro-cid-ji5mkv6w>Get Started</a> </div> </section> </div> </main> <div class="media-lightbox" data-lightbox hidden data-astro-cid-ji5mkv6w> <button type="button" class="lightbox-close" data-lightbox-close aria-label="Close fullscreen media" data-astro-cid-ji5mkv6w>Close</button> <div class="lightbox-content" data-lightbox-content data-astro-cid-ji5mkv6w></div> </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ji5mkv6w": true })}  ${renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/hub.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/hub.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/hub.astro";
const $$url = "/hub";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hub,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
