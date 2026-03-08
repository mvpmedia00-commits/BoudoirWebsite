import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, d as renderTemplate } from '../../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { a as getEntry, r as renderEntry } from '../../chunks/_astro_content_JnFDEse4.mjs';
import { $ as $$BaseHead } from '../../chunks/BaseHead_BXjp2pBo.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Header_BmKSZvhv.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_BaAnjusg.mjs';
import { k as hasVaultSession } from '../../chunks/auth_BQBBuG7a.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mvpmedia.studio");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  if (!hasVaultSession(Astro2.cookies)) {
    return Astro2.redirect("/vault");
  }
  const slug = Astro2.params.slug?.trim() ?? "";
  const entry = slug ? await getEntry("vault", slug) : void 0;
  if (!entry) {
    return Astro2.redirect("/vault/library");
  }
  const { Content } = await renderEntry(entry);
  return renderTemplate`<html lang="en" data-astro-cid-syq5isbd> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${entry.data.title} | Vault`, "description": entry.data.description, "noIndex": true, "data-astro-cid-syq5isbd": true })}${renderHead()}</head> <body data-astro-cid-syq5isbd> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-syq5isbd": true })} <main data-astro-cid-syq5isbd> <article class="vault-entry is-ready" data-astro-cid-syq5isbd> <p class="eyebrow" data-astro-cid-syq5isbd>Members Vault</p> <h1 data-astro-cid-syq5isbd>${entry.data.title}</h1> <p data-astro-cid-syq5isbd>${entry.data.description}</p> <div class="meta" data-astro-cid-syq5isbd> <span data-astro-cid-syq5isbd>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": entry.data.pubDate, "data-astro-cid-syq5isbd": true })}</span> ${entry.data.tags.map((tag) => renderTemplate`<span data-astro-cid-syq5isbd>#${tag}</span>`)} </div> ${renderComponent($$result, "Content", Content, { "data-astro-cid-syq5isbd": true })} ${entry.data.privateNote && renderTemplate`<p class="note" data-astro-cid-syq5isbd><strong data-astro-cid-syq5isbd>Private Note:</strong> ${entry.data.privateNote}</p>`} <p data-astro-cid-syq5isbd><a href="/vault/library" data-astro-cid-syq5isbd>Back to vault library</a></p> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-syq5isbd": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/[...slug].astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/[...slug].astro";
const $$url = "/vault/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
