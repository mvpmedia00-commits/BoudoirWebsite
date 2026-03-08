import { c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_JnFDEse4.mjs';
import { $ as $$BaseHead } from '../chunks/BaseHead_BXjp2pBo.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Header_BmKSZvhv.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_BaAnjusg.mjs';
import { S as SITE_TITLE } from '../chunks/consts_C6Gzotw0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const publishedPosts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const categories = Array.from(new Set(publishedPosts.map((post) => post.data.category)));
  const recentTags = Array.from(new Set(publishedPosts.flatMap((post) => post.data.tags))).slice(0, 18);
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Blog | ${SITE_TITLE}`, "description": "Writing-focused blog from MVP Media on privacy-first after-dark photography, session prep, and creative direction.", "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section class="blog-layout" data-astro-cid-5tznm7mj> <div class="blog-main" data-astro-cid-5tznm7mj> <div class="blog-intro" data-astro-cid-5tznm7mj> <p class="eyebrow" data-astro-cid-5tznm7mj>Journal</p> <h1 data-astro-cid-5tznm7mj>MVP Media Blog</h1> <p data-astro-cid-5tznm7mj>Writing-led insights on after-dark direction, privacy standards, and client prep.</p> </div> <ul class="post-list" data-astro-cid-5tznm7mj> ${publishedPosts.map((post) => renderTemplate`<li class="post-row" data-astro-cid-5tznm7mj> <div class="post-meta" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>${post.data.featured ? "Featured" : "Article"}</span> <span data-astro-cid-5tznm7mj>${post.data.category.replaceAll("-", " ")}</span> <span data-astro-cid-5tznm7mj>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })}</span> </div> <h2 data-astro-cid-5tznm7mj><a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a></h2> <p data-astro-cid-5tznm7mj>${post.data.description}</p> <div class="post-tags" data-astro-cid-5tznm7mj> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.toLowerCase()}/`, "href")} data-astro-cid-5tznm7mj>#${tag}</a>`)} </div> <a class="read-link"${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5tznm7mj>Read article</a> </li>`)} </ul> </div> <aside class="blog-sidebar" data-astro-cid-5tznm7mj> <div data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>Categories</h3> <ul data-astro-cid-5tznm7mj> ${categories.map((category) => renderTemplate`<li data-astro-cid-5tznm7mj><a${addAttribute(`/blog/category/${category}/`, "href")} data-astro-cid-5tznm7mj>${category.replaceAll("-", " ")}</a></li>`)} </ul> </div> <div data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>Tags</h3> <ul data-astro-cid-5tznm7mj> ${recentTags.map((tag) => renderTemplate`<li data-astro-cid-5tznm7mj><a${addAttribute(`/blog/tag/${tag.toLowerCase()}/`, "href")} data-astro-cid-5tznm7mj>#${tag}</a></li>`)} </ul> </div> <div data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>Feed</h3> <p data-astro-cid-5tznm7mj><a href="/rss.xml" data-astro-cid-5tznm7mj>Subscribe via RSS</a></p> </div> </aside> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/index.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
