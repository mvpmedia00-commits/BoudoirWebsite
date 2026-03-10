import { g as getCollection } from '../chunks/_astro_content_C6C8B_CO.mjs';
import rss from '@astrojs/rss';
import { a as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/consts_B2K2yu7A.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
