import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../../../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$Image } from '../../../chunks/_astro_assets_DmJ3QSJS.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_C6C8B_CO.mjs';
import { $ as $$BaseHead } from '../../../chunks/BaseHead_Wy0sVJGX.mjs';
import { $ as $$Header, a as $$Footer } from '../../../chunks/Header_DmMLhIda.mjs';
import { $ as $$FormattedDate } from '../../../chunks/FormattedDate_DG4XXLPz.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tags = Array.from(new Set(posts.flatMap((post) => post.data.tags)));
  return tags.map((tag) => ({ params: { tag: tag.toLowerCase() } }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const posts = (await getCollection(
    "blog",
    ({ data }) => !data.draft && data.tags.map((entry) => entry.toLowerCase()).includes(String(tag))
  )).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  if (!tag || posts.length === 0) {
    return Astro2.redirect("/blog");
  }
  return renderTemplate`<html lang="en" data-astro-cid-trjsnkp3> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `#${tag} | MVP Media Blog`, "description": `Posts tagged ${tag} from MVP Media.`, "data-astro-cid-trjsnkp3": true })}${renderHead()}</head> <body data-astro-cid-trjsnkp3> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-trjsnkp3": true })} <main data-astro-cid-trjsnkp3> <section class="section-header" data-astro-cid-trjsnkp3> <p class="eyebrow" data-astro-cid-trjsnkp3>Tag</p> <h1 data-astro-cid-trjsnkp3>#${tag}</h1> <p data-astro-cid-trjsnkp3><a href="/blog" data-astro-cid-trjsnkp3>Back to all posts</a></p> </section> <section class="posts" data-astro-cid-trjsnkp3> ${posts.map((post) => renderTemplate`<a class="post-card"${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-trjsnkp3> ${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 900, "height": 560, "src": post.data.heroImage, "alt": post.data.title, "data-astro-cid-trjsnkp3": true })}`} <div class="post-content" data-astro-cid-trjsnkp3> <div class="meta" data-astro-cid-trjsnkp3> <span data-astro-cid-trjsnkp3>${post.data.category.replaceAll("-", " ")}</span> <span data-astro-cid-trjsnkp3>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-trjsnkp3": true })}</span> </div> <h2 data-astro-cid-trjsnkp3>${post.data.title}</h2> <p data-astro-cid-trjsnkp3>${post.data.description}</p> <div class="tag-list" data-astro-cid-trjsnkp3> ${post.data.tags.map((entry) => renderTemplate`<span data-astro-cid-trjsnkp3>#${entry}</span>`)} </div> </div> </a>`)} </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-trjsnkp3": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/tag/[tag].astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/tag/[tag].astro";
const $$url = "/blog/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
