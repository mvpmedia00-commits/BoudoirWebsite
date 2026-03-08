import { e as createAstro, c as createComponent, d as renderTemplate, b as addAttribute, a as renderHead, r as renderComponent } from '../../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../../chunks/BaseHead_BXjp2pBo.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_C6Gzotw0.mjs';
import { g as getRosterEntryBySlug, R as ROSTER_SLUGS } from '../../chunks/roster_EQpwDjSn.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mvpmedia.studio");
function getStaticPaths() {
  return ROSTER_SLUGS.map((slug) => ({ params: { slug } }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug || "";
  const entry = getRosterEntryBySlug(slug);
  if (!entry) {
    return Astro2.redirect("/roster");
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-lq74bl3o> <head>', "", '</head> <body data-astro-cid-lq74bl3o> <main class="page" data-astro-cid-lq74bl3o> <div class="container" data-astro-cid-lq74bl3o> <div class="topbar" data-reveal data-astro-cid-lq74bl3o> <a class="back-link" href="/roster" data-astro-cid-lq74bl3o>Back to roster</a> <p class="badge" data-astro-cid-lq74bl3o>MVP+ PROFILE FILE</p> </div> <section class="hero" data-reveal data-astro-cid-lq74bl3o> <div class="hero-image" data-astro-cid-lq74bl3o> <img', "", ' data-astro-cid-lq74bl3o> <div class="hero-title" data-astro-cid-lq74bl3o> <p class="eyebrow" data-astro-cid-lq74bl3o>', "</p> <h1 data-astro-cid-lq74bl3o>", '</h1> </div> </div> <div class="hero-reel" data-astro-cid-lq74bl3o> <iframe', "", ' loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-lq74bl3o></iframe> </div> </section> <section class="meta-rail" data-reveal data-astro-cid-lq74bl3o> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Location</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Availability</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Represented By</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Primary Role</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> </section> <section class="columns" data-astro-cid-lq74bl3o> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Profile</h2> <p class="bio" data-astro-cid-lq74bl3o>', '</p> </div> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Focus</h2> <ul class="tag-list" data-astro-cid-lq74bl3o> ', ' </ul> </div> </section> <section class="columns" style="margin-top: 0.85rem;" data-astro-cid-lq74bl3o> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Selected Work</h2> <div class="film-list" data-astro-cid-lq74bl3o> ', ' </div> </div> <div style="display: grid; gap: 0.85rem;" data-astro-cid-lq74bl3o> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Awards</h2> <ul class="bullet-list" data-astro-cid-lq74bl3o> ', ' </ul> </div> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Likes</h2> <ul class="bullet-list" data-astro-cid-lq74bl3o> ', ` </ul> <div class="likes-row" data-astro-cid-lq74bl3o> <button type="button" class="like-btn" data-like-btn data-astro-cid-lq74bl3o>Like Profile</button> <span class="like-count" data-astro-cid-lq74bl3o>Likes: <strong data-like-count data-astro-cid-lq74bl3o>0</strong></span> </div> </div> </div> </section> </div> </main> <script>
			const likeBtn = document.querySelector('[data-like-btn]');
			const likeCount = document.querySelector('[data-like-count]');
			const key = \`mvp-roster-like-\${location.pathname}\`;
			const current = Number(localStorage.getItem(key) || '0');
			if (likeCount) likeCount.textContent = String(current);
			likeBtn?.addEventListener('click', () => {
				const next = Number(localStorage.getItem(key) || '0') + 1;
				localStorage.setItem(key, String(next));
				if (likeCount) likeCount.textContent = String(next);
			});

			const revealItems = document.querySelectorAll('[data-reveal]');
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((item) => {
						if (item.isIntersecting) {
							item.target.classList.add('is-visible');
							observer.unobserve(item.target);
						}
					});
				},
				{ threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
			);
			revealItems.forEach((item) => observer.observe(item));
		<\/script> </body> </html>`], ['<html lang="en" data-astro-cid-lq74bl3o> <head>', "", '</head> <body data-astro-cid-lq74bl3o> <main class="page" data-astro-cid-lq74bl3o> <div class="container" data-astro-cid-lq74bl3o> <div class="topbar" data-reveal data-astro-cid-lq74bl3o> <a class="back-link" href="/roster" data-astro-cid-lq74bl3o>Back to roster</a> <p class="badge" data-astro-cid-lq74bl3o>MVP+ PROFILE FILE</p> </div> <section class="hero" data-reveal data-astro-cid-lq74bl3o> <div class="hero-image" data-astro-cid-lq74bl3o> <img', "", ' data-astro-cid-lq74bl3o> <div class="hero-title" data-astro-cid-lq74bl3o> <p class="eyebrow" data-astro-cid-lq74bl3o>', "</p> <h1 data-astro-cid-lq74bl3o>", '</h1> </div> </div> <div class="hero-reel" data-astro-cid-lq74bl3o> <iframe', "", ' loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-lq74bl3o></iframe> </div> </section> <section class="meta-rail" data-reveal data-astro-cid-lq74bl3o> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Location</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Availability</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Represented By</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> <div class="meta-box" data-astro-cid-lq74bl3o> <p class="label" data-astro-cid-lq74bl3o>Primary Role</p> <p class="value" data-astro-cid-lq74bl3o>', '</p> </div> </section> <section class="columns" data-astro-cid-lq74bl3o> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Profile</h2> <p class="bio" data-astro-cid-lq74bl3o>', '</p> </div> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Focus</h2> <ul class="tag-list" data-astro-cid-lq74bl3o> ', ' </ul> </div> </section> <section class="columns" style="margin-top: 0.85rem;" data-astro-cid-lq74bl3o> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Selected Work</h2> <div class="film-list" data-astro-cid-lq74bl3o> ', ' </div> </div> <div style="display: grid; gap: 0.85rem;" data-astro-cid-lq74bl3o> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Awards</h2> <ul class="bullet-list" data-astro-cid-lq74bl3o> ', ' </ul> </div> <div class="section-card" data-reveal data-astro-cid-lq74bl3o> <h2 class="section-title" data-astro-cid-lq74bl3o>Likes</h2> <ul class="bullet-list" data-astro-cid-lq74bl3o> ', ` </ul> <div class="likes-row" data-astro-cid-lq74bl3o> <button type="button" class="like-btn" data-like-btn data-astro-cid-lq74bl3o>Like Profile</button> <span class="like-count" data-astro-cid-lq74bl3o>Likes: <strong data-like-count data-astro-cid-lq74bl3o>0</strong></span> </div> </div> </div> </section> </div> </main> <script>
			const likeBtn = document.querySelector('[data-like-btn]');
			const likeCount = document.querySelector('[data-like-count]');
			const key = \\\`mvp-roster-like-\\\${location.pathname}\\\`;
			const current = Number(localStorage.getItem(key) || '0');
			if (likeCount) likeCount.textContent = String(current);
			likeBtn?.addEventListener('click', () => {
				const next = Number(localStorage.getItem(key) || '0') + 1;
				localStorage.setItem(key, String(next));
				if (likeCount) likeCount.textContent = String(next);
			});

			const revealItems = document.querySelectorAll('[data-reveal]');
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((item) => {
						if (item.isIntersecting) {
							item.target.classList.add('is-visible');
							observer.unobserve(item.target);
						}
					});
				},
				{ threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
			);
			revealItems.forEach((item) => observer.observe(item));
		<\/script> </body> </html>`])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${entry.name} | ${SITE_TITLE}`, "description": `${entry.role} profile, selected work, and credits.`, "data-astro-cid-lq74bl3o": true }), renderHead(), addAttribute(entry.heroImage, "src"), addAttribute(entry.name, "alt"), entry.role, entry.name, addAttribute(entry.reelUrl, "src"), addAttribute(`${entry.name} reel`, "title"), entry.location, entry.availability, entry.representedBy, entry.role, entry.bio, entry.focus.map((item) => renderTemplate`<li data-astro-cid-lq74bl3o>${item}</li>`), entry.films.map((film) => renderTemplate`<div class="film-row" data-astro-cid-lq74bl3o> <p class="film-year" data-astro-cid-lq74bl3o>${film.year}</p> <p class="film-main" data-astro-cid-lq74bl3o> ${film.title} ${film.oneLiner && renderTemplate`<span data-astro-cid-lq74bl3o>${film.oneLiner}</span>`} </p> <p class="film-format" data-astro-cid-lq74bl3o>${film.format}</p> </div>`), entry.awards.map((award) => renderTemplate`<li data-astro-cid-lq74bl3o>${award}</li>`), entry.likes.map((like) => renderTemplate`<li data-astro-cid-lq74bl3o>${like}</li>`));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/roster/[slug].astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/roster/[slug].astro";
const $$url = "/roster/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
