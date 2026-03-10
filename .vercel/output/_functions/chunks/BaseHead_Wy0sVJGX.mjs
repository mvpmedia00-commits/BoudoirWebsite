import { e as createAstro, c as createComponent, d as renderTemplate, u as unescapeHTML, b as addAttribute } from './astro/server_BWvinCl0.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { _ as __ASTRO_IMAGE_IMPORT_Z1F4X4R } from './blog-placeholder-1_D1Pmb4Eu.mjs';
import { S as SITE_TITLE } from './consts_B2K2yu7A.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = __ASTRO_IMAGE_IMPORT_Z1F4X4R, noIndex = false, keywords = "", jsonLd = null } = Astro2.props;
  return renderTemplate(_b || (_b = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"', "", '><meta name="generator"', '><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', ">", "", '<!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", "<script>\n	window.mvpTrack = function(payload) {\n		try {\n			var body = JSON.stringify(payload || {});\n			if (navigator.sendBeacon) {\n				var blob = new Blob([body], { type: 'application/json' });\n				navigator.sendBeacon('/api/events', blob);\n				return;\n			}\n			fetch('/api/events', {\n				method: 'POST',\n				headers: { 'Content-Type': 'application/json' },\n				body: body,\n				keepalive: true\n			});\n		} catch (_e) {}\n	};\n<\/script>"])), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, noIndex && renderTemplate`<meta name="robots" content="noindex,nofollow">`, addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"), jsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd))));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/BaseHead.astro", void 0);

export { $$BaseHead as $ };
