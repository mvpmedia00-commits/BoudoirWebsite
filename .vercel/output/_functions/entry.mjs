import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_4NxrivpU.mjs';
import { manifest } from './manifest_LpAquIpS.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/feed.astro.mjs');
const _page3 = () => import('./pages/api/admin-session.astro.mjs');
const _page4 = () => import('./pages/api/adult-access.astro.mjs');
const _page5 = () => import('./pages/api/events.astro.mjs');
const _page6 = () => import('./pages/api/leads.astro.mjs');
const _page7 = () => import('./pages/api/media.astro.mjs');
const _page8 = () => import('./pages/api/vault-session.astro.mjs');
const _page9 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page10 = () => import('./pages/blog/tag/_tag_.astro.mjs');
const _page11 = () => import('./pages/blog.astro.mjs');
const _page12 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page13 = () => import('./pages/booking.astro.mjs');
const _page14 = () => import('./pages/editor-lab.astro.mjs');
const _page15 = () => import('./pages/gallery/artistic-nude.astro.mjs');
const _page16 = () => import('./pages/gallery/body-paint.astro.mjs');
const _page17 = () => import('./pages/gallery/boudoir.astro.mjs');
const _page18 = () => import('./pages/gallery/editorial-portrait.astro.mjs');
const _page19 = () => import('./pages/gallery.astro.mjs');
const _page20 = () => import('./pages/hub.astro.mjs');
const _page21 = () => import('./pages/land/_slug_.astro.mjs');
const _page22 = () => import('./pages/roster/_slug_.astro.mjs');
const _page23 = () => import('./pages/roster.astro.mjs');
const _page24 = () => import('./pages/rss.xml.astro.mjs');
const _page25 = () => import('./pages/vault/library.astro.mjs');
const _page26 = () => import('./pages/vault.astro.mjs');
const _page27 = () => import('./pages/vault/_---slug_.astro.mjs');
const _page28 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/feed.astro", _page2],
    ["src/pages/api/admin-session.ts", _page3],
    ["src/pages/api/adult-access.ts", _page4],
    ["src/pages/api/events.ts", _page5],
    ["src/pages/api/leads.ts", _page6],
    ["src/pages/api/media.ts", _page7],
    ["src/pages/api/vault-session.ts", _page8],
    ["src/pages/blog/category/[category].astro", _page9],
    ["src/pages/blog/tag/[tag].astro", _page10],
    ["src/pages/blog/index.astro", _page11],
    ["src/pages/blog/[...slug].astro", _page12],
    ["src/pages/booking.astro", _page13],
    ["src/pages/editor-lab.astro", _page14],
    ["src/pages/gallery/artistic-nude.astro", _page15],
    ["src/pages/gallery/body-paint.astro", _page16],
    ["src/pages/gallery/boudoir.astro", _page17],
    ["src/pages/gallery/editorial-portrait.astro", _page18],
    ["src/pages/gallery.astro", _page19],
    ["src/pages/hub.astro", _page20],
    ["src/pages/land/[slug].astro", _page21],
    ["src/pages/roster/[slug].astro", _page22],
    ["src/pages/roster.astro", _page23],
    ["src/pages/rss.xml.js", _page24],
    ["src/pages/vault/library.astro", _page25],
    ["src/pages/vault/index.astro", _page26],
    ["src/pages/vault/[...slug].astro", _page27],
    ["src/pages/index.astro", _page28]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "25302778-6172-4672-9b6f-1e795e940692",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
