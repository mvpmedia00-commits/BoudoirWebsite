import { e as createAstro, c as createComponent, d as renderTemplate, r as renderComponent, a as renderHead } from '../../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_C6C8B_CO.mjs';
import { $ as $$BaseHead } from '../../chunks/BaseHead_Wy0sVJGX.mjs';
import { a as $$Footer, $ as $$Header } from '../../chunks/Header_DmMLhIda.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_DG4XXLPz.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const entries = await getCollection("vault");
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: entry
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const entry = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-syq5isbd> <head>', "", "</head> <body data-astro-cid-syq5isbd> ", ' <main data-astro-cid-syq5isbd> <article id="vault-entry" class="vault-entry" data-astro-cid-syq5isbd> <p class="eyebrow" data-astro-cid-syq5isbd>Members Vault</p> <h1 data-astro-cid-syq5isbd>', "</h1> <p data-astro-cid-syq5isbd>", '</p> <div class="meta" data-astro-cid-syq5isbd> <span data-astro-cid-syq5isbd>', "</span> ", " </div> ", " ", ' <p data-astro-cid-syq5isbd><a href="/vault/library" data-astro-cid-syq5isbd>Back to vault library</a></p> </article> </main> ', " <script>\n			const key = 'mvp_vault_access';\n			if (localStorage.getItem(key) !== 'granted') {\n				window.location.href = '/vault';\n			} else {\n				const entry = document.getElementById('vault-entry');\n				entry?.classList.add('is-ready');\n			}\n		<\/script> </body> </html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${entry.data.title} | Vault`, "description": entry.data.description, "noIndex": true, "data-astro-cid-syq5isbd": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-syq5isbd": true }), entry.data.title, entry.data.description, renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": entry.data.pubDate, "data-astro-cid-syq5isbd": true }), entry.data.tags.map((tag) => renderTemplate`<span data-astro-cid-syq5isbd>#${tag}</span>`), renderComponent($$result, "Content", Content, { "data-astro-cid-syq5isbd": true }), entry.data.privateNote && renderTemplate`<p class="note" data-astro-cid-syq5isbd><strong data-astro-cid-syq5isbd>Private Note:</strong> ${entry.data.privateNote}</p>`, renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-syq5isbd": true }));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/[...slug].astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/[...slug].astro";
const $$url = "/vault/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
