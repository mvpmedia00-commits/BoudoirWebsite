import { c as createComponent, m as maybeRenderHead, d as renderTemplate, e as createAstro, b as addAttribute, f as renderScript } from './astro/server_CA-1NlPe.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { S as SITE_TITLE } from './consts_C6Gzotw0.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-shell" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${today.getFullYear()} MVP Media · Matthew Phillips</p> <p class="muted" data-astro-cid-sz7xmlte>Boudoir, artistic nude, and afterdark adult portrait sessions with discreet premium delivery.</p> <div class="links" data-astro-cid-sz7xmlte> <a href="mailto:hello@mvpmedia.studio" data-astro-cid-sz7xmlte>hello@mvpmedia.studio</a> <a href="/gallery" data-astro-cid-sz7xmlte>View Gallery</a> </div> </div> </footer> `;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://mvpmedia.studio");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const workLinks = [
    { href: "/gallery", label: "All Galleries" },
    { href: "/gallery/boudoir", label: "Boudoir" },
    { href: "/gallery/artistic-nude", label: "Artistic Nude" },
    { href: "/gallery/body-paint", label: "Body Paint" },
    { href: "/gallery/editorial-portrait", label: "Editorial Portrait" }
  ];
  const exploreLinks = [
    { href: "/roster", label: "Roster" },
    { href: "/editor-lab", label: "Editor Lab" },
    { href: "/vault", label: "Vault" }
  ];
  const isActive = (href) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const isGroupActive = (links) => links.some((link) => isActive(link.href));
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <nav class="nav-shell" aria-label="Primary" data-astro-cid-3ef6ksr2> <a class="brand" href="/" data-astro-cid-3ef6ksr2>${SITE_TITLE}</a> <button type="button" class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="site-nav-panel" data-astro-cid-3ef6ksr2>
Menu
</button> <div id="site-nav-panel" class="nav-panel" data-nav-panel data-astro-cid-3ef6ksr2> <div class="nav-primary" data-astro-cid-3ef6ksr2> <details${addAttribute(["nav-group", { active: isGroupActive(workLinks) }], "class:list")} data-astro-cid-3ef6ksr2> <summary data-astro-cid-3ef6ksr2>Work</summary> <div class="dropdown-menu" data-astro-cid-3ef6ksr2> ${workLinks.map((link) => renderTemplate`<a${addAttribute(["dropdown-link", { active: isActive(link.href) }], "class:list")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.label} </a>`)} </div> </details> <a${addAttribute(["nav-link", { active: isActive("/hub") }], "class:list")} href="/hub" data-astro-cid-3ef6ksr2>Hub</a> <a${addAttribute(["nav-link", { active: isActive("/blog") }], "class:list")} href="/blog" data-astro-cid-3ef6ksr2>Journal</a> <a${addAttribute(["nav-link", { active: isActive("/about") }], "class:list")} href="/about" data-astro-cid-3ef6ksr2>About</a> <details${addAttribute(["nav-group", { active: isGroupActive(exploreLinks) }], "class:list")} data-astro-cid-3ef6ksr2> <summary data-astro-cid-3ef6ksr2>Explore</summary> <div class="dropdown-menu" data-astro-cid-3ef6ksr2> ${exploreLinks.map((link) => renderTemplate`<a${addAttribute(["dropdown-link", { active: isActive(link.href) }], "class:list")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.label} </a>`)} </div> </details> <a class="nav-link" href="/#contact" data-astro-cid-3ef6ksr2>Contact</a> </div> <a class="book-link" href="/booking" data-astro-cid-3ef6ksr2>Book Consultation</a> </div> </nav> </header> ${renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/Header.astro", void 0);

export { $$Header as $, $$Footer as a };
