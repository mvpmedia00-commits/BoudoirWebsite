import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../../../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$Image } from '../../../chunks/_astro_assets_DmJ3QSJS.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_C6C8B_CO.mjs';
import { $ as $$BaseHead } from '../../../chunks/BaseHead_Wy0sVJGX.mjs';
import { $ as $$Header, a as $$Footer } from '../../../chunks/Header_DmMLhIda.mjs';
import { $ as $$FormattedDate } from '../../../chunks/FormattedDate_DG4XXLPz.mjs';
/* empty css                                            */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const categories = Array.from(new Set(posts.map((post) => post.data.category)));
  return categories.map((category) => ({ params: { category } }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const posts = (await getCollection("blog", ({ data }) => !data.draft && data.category === category)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  if (!category || posts.length === 0) {
    return Astro2.redirect("/blog");
  }
  const titleCategory = category.replaceAll("-", " ");
  return renderTemplate`<html lang="en" data-astro-cid-cw2six23> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${titleCategory} | MVP Media Blog`, "description": `Browse ${titleCategory} articles from MVP Media.`, "data-astro-cid-cw2six23": true })}${renderHead()}</head> <body data-astro-cid-cw2six23> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-cw2six23": true })} <main data-astro-cid-cw2six23> <section class="section-header" data-astro-cid-cw2six23> <p class="eyebrow" data-astro-cid-cw2six23>Category</p> <h1 data-astro-cid-cw2six23>${titleCategory}</h1> <p data-astro-cid-cw2six23><a href="/blog" data-astro-cid-cw2six23>Back to all posts</a></p> </section> <section class="posts" data-astro-cid-cw2six23> ${posts.map((post) => renderTemplate`<a class="post-card"${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-cw2six23> ${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 900, "height": 560, "src": post.data.heroImage, "alt": post.data.title, "data-astro-cid-cw2six23": true })}`} <div class="post-content" data-astro-cid-cw2six23> <div class="meta" data-astro-cid-cw2six23> <span data-astro-cid-cw2six23>${post.data.category.replaceAll("-", " ")}</span> <span data-astro-cid-cw2six23>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-cw2six23": true })}</span> </div> <h2 data-astro-cid-cw2six23>${post.data.title}</h2> <p data-astro-cid-cw2six23>${post.data.description}</p> </div> </a>`)} </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-cw2six23": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/category/[category].astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/category/[category].astro";
const $$url = "/blog/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
