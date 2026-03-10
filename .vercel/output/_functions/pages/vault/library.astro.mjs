import { c as createComponent, d as renderTemplate, r as renderComponent, b as addAttribute, a as renderHead } from '../../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$Image } from '../../chunks/_astro_assets_DmJ3QSJS.mjs';
import { g as getCollection } from '../../chunks/_astro_content_C6C8B_CO.mjs';
import { $ as $$BaseHead } from '../../chunks/BaseHead_Wy0sVJGX.mjs';
import { a as $$Footer, $ as $$Header } from '../../chunks/Header_DmMLhIda.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_DG4XXLPz.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Library = createComponent(async ($$result, $$props, $$slots) => {
  const entries = (await getCollection("vault")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-uvtyrfzs> <head>', "", "</head> <body data-astro-cid-uvtyrfzs> ", ' <main data-astro-cid-uvtyrfzs> <div id="vault-shell" class="vault-shell" data-astro-cid-uvtyrfzs> <section class="section-header" data-astro-cid-uvtyrfzs> <p class="eyebrow" data-astro-cid-uvtyrfzs>Members Vault</p> <h1 data-astro-cid-uvtyrfzs>Private Library</h1> <p data-astro-cid-uvtyrfzs>Private collections for approved members only.</p> </section> <section class="vault-grid" data-astro-cid-uvtyrfzs> ', " </section> </div> </main> ", " <script>\n			const key = 'mvp_vault_access';\n			if (localStorage.getItem(key) !== 'granted') {\n				window.location.href = '/vault';\n			} else {\n				const shell = document.getElementById('vault-shell');\n				shell?.classList.add('is-ready');\n			}\n		<\/script> </body> </html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Vault Library | MVP Media", "description": "Protected vault library for private members.", "noIndex": true, "data-astro-cid-uvtyrfzs": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-uvtyrfzs": true }), entries.map((entry) => renderTemplate`<a class="vault-card"${addAttribute(`/vault/${entry.id}/`, "href")} data-astro-cid-uvtyrfzs> ${entry.data.coverImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 900, "height": 560, "src": entry.data.coverImage, "alt": entry.data.title, "data-astro-cid-uvtyrfzs": true })}`} <div class="vault-content" data-astro-cid-uvtyrfzs> <div class="vault-meta" data-astro-cid-uvtyrfzs> <span data-astro-cid-uvtyrfzs>Private</span> <span data-astro-cid-uvtyrfzs>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": entry.data.pubDate, "data-astro-cid-uvtyrfzs": true })}</span> </div> <h2 data-astro-cid-uvtyrfzs>${entry.data.title}</h2> <p data-astro-cid-uvtyrfzs>${entry.data.description}</p> <div class="vault-tags" data-astro-cid-uvtyrfzs> ${entry.data.tags.map((tag) => renderTemplate`<span data-astro-cid-uvtyrfzs>#${tag}</span>`)} </div> </div> </a>`), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-uvtyrfzs": true }));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/library.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/library.astro";
const $$url = "/vault/library";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Library,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
