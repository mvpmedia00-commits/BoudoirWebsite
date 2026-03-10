import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, d as renderTemplate, b as addAttribute, f as renderSlot } from '../../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_C6C8B_CO.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DmJ3QSJS.mjs';
import { $ as $$BaseHead } from '../../chunks/BaseHead_Wy0sVJGX.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Header_DmMLhIda.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_DG4XXLPz.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, category, tags } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article class="article-wrap" data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1440, "height": 720, "src": heroImage, "alt": title, "data-astro-cid-bvzihdzo": true })}`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> <div data-astro-cid-bvzihdzo>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })}</div> ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Updated ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <div class="meta-links" data-astro-cid-bvzihdzo> <a${addAttribute(`/blog/category/${category}/`, "href")} data-astro-cid-bvzihdzo>${category.replaceAll("-", " ")}</a> ${tags?.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.toLowerCase()}/`, "href")} data-astro-cid-bvzihdzo>#${tag}</a>`)} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> </div> <div class="article-content" data-astro-cid-bvzihdzo> ${renderSlot($$result, $$slots["default"])} </div> </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
