import { c as createComponent, d as renderTemplate, f as renderScript, u as unescapeHTML, b as addAttribute, a as renderHead, r as renderComponent } from '../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../chunks/BaseHead_BXjp2pBo.mjs';
import { S as SITE_TITLE } from '../chunks/consts_C6Gzotw0.mjs';
import { a as ROSTER_ENTRIES } from '../chunks/roster_EQpwDjSn.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Roster = createComponent(($$result, $$props, $$slots) => {
  const projects = ROSTER_ENTRIES.flatMap(
    (entry) => entry.films.map((film) => ({
      director: entry.name,
      brand: film.format,
      title: film.title,
      slug: entry.slug,
      year: film.year,
      location: entry.location,
      image: entry.heroImage,
      role: entry.role
    }))
  );
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-qkldwu3n> <head>', "", '</head> <body data-astro-cid-qkldwu3n> <main class="page" data-astro-cid-qkldwu3n> <div class="container" data-astro-cid-qkldwu3n> <div class="header" data-astro-cid-qkldwu3n> <a href="/" class="logo" data-astro-cid-qkldwu3n>MVP<span data-astro-cid-qkldwu3n>+</span></a> <div class="region" data-astro-cid-qkldwu3n> <span data-astro-cid-qkldwu3n>You are located in the United States.</span> <a href="/vault" data-astro-cid-qkldwu3n>visit private vault</a> </div> </div> <div class="filter-bar" data-astro-cid-qkldwu3n> <input type="text" id="searchInput" placeholder="Filter by director, format or title..." autocomplete="off" data-astro-cid-qkldwu3n> <span class="count" id="projectCount" data-astro-cid-qkldwu3n>0 projects</span> </div> <div class="preview" id="projectPreview" data-astro-cid-qkldwu3n> <img id="previewImage"', "", ' data-astro-cid-qkldwu3n> <div class="preview-info" data-astro-cid-qkldwu3n> <p id="previewRole" data-astro-cid-qkldwu3n>', '</p> <h2 id="previewDirector" data-astro-cid-qkldwu3n>', '</h2> <p id="previewTitle" data-astro-cid-qkldwu3n>', '</p> <p id="previewMeta" data-astro-cid-qkldwu3n>', " \xB7 ", " \xB7 ", '</p> </div> </div> <div class="projects-grid" id="projectGrid" data-astro-cid-qkldwu3n></div> <div class="footer" data-astro-cid-qkldwu3n> <span data-astro-cid-qkldwu3n>This index is for navigation and showcase purposes. <a href="/about" data-astro-cid-qkldwu3n>learn more here</a></span> <span data-astro-cid-qkldwu3n>\xA9 MVP Media</span> </div> </div> </main> <script type="application/json" id="roster-project-data">', "<\/script> ", " </body> </html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Roster Index | ${SITE_TITLE}`, "description": "Wanda-style project index with live filtering by director, format, and title.", "data-astro-cid-qkldwu3n": true }), renderHead(), addAttribute(projects[0]?.image || "", "src"), addAttribute(projects[0]?.director || "Project preview", "alt"), projects[0]?.role || "", projects[0]?.director || "", projects[0]?.title ? `"${projects[0]?.title}"` : "", projects[0]?.brand || "", projects[0]?.year || "", projects[0]?.location || "", unescapeHTML(JSON.stringify(projects)), renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/roster.astro?astro&type=script&index=0&lang.ts"));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/roster.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/roster.astro";
const $$url = "/roster";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Roster,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
