import { e as createAstro, c as createComponent, d as renderTemplate, f as renderScript, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from './astro/server_CA-1NlPe.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mvpmedia.studio");
const $$GalleryCanvas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryCanvas;
  const { title, description, items } = Astro2.props;
  const extraCanvasDepth = 1e3;
  const stageHeight = Math.max(...items.map((item) => item.y + item.h)) + extraCanvasDepth;
  const INITIAL_RENDER_COUNT = 24;
  return renderTemplate(_a || (_a = __template(["", '<main class="gallery-main" data-astro-cid-4gdooufe> <section class="gallery-head" data-astro-cid-4gdooufe> <p class="eyebrow" data-astro-cid-4gdooufe>MVP Media Gallery</p> <h1 data-astro-cid-4gdooufe>', "</h1> <p data-astro-cid-4gdooufe> ", "\nLoaded: <strong data-astro-cid-4gdooufe>", '</strong> images.\n</p> </section> <section class="stage-shell" data-astro-cid-4gdooufe> <p id="drag-instruction" class="sr-only" data-astro-cid-4gdooufe>Drag to reposition cards. Press Enter to open image preview.</p> <div class="stage" data-stage', " data-astro-cid-4gdooufe> ", ' <div class="stage-sentinel" data-stage-sentinel aria-hidden="true" data-astro-cid-4gdooufe></div> <div class="credit" data-astro-cid-4gdooufe> <h3 data-astro-cid-4gdooufe>MVP Media</h3> <p data-astro-cid-4gdooufe>Cinematic photography and visual storytelling</p> </div> </div> </section> </main> <div class="image-lightbox" data-lightbox hidden data-astro-cid-4gdooufe> <div class="image-lightbox-overlay" data-close-lightbox data-astro-cid-4gdooufe></div> <div class="image-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Expanded gallery image" data-astro-cid-4gdooufe> <button type="button" class="lightbox-close" data-close-lightbox aria-label="Close expanded image" data-astro-cid-4gdooufe>&times;</button> <div class="lightbox-media" data-astro-cid-4gdooufe> <div class="lightbox-loader" data-lightbox-loader aria-hidden="true" data-astro-cid-4gdooufe></div> <img data-lightbox-image src="" alt="" hidden data-astro-cid-4gdooufe> </div> </div> </div> <script type="application/json" id="gallery-items-data">', "<\/script> ", " "])), maybeRenderHead(), title, description, items.length, addAttribute(`min-height:${stageHeight}px;`, "style"), items.slice(0, INITIAL_RENDER_COUNT).map((item, index) => renderTemplate`<button type="button" class="project-card" data-draggable-card${addAttribute(index, "data-index")}${addAttribute(item.id, "data-id")}${addAttribute(item.x, "data-x")}${addAttribute(item.y, "data-y")}${addAttribute(`width:${item.w}px; transform: translate3d(${item.x}px, ${item.y}px, 0); z-index:${10 + index % 25};`, "style")}${addAttribute(`Open ${item.title}`, "aria-label")} aria-describedby="drag-instruction" aria-grabbed="false" data-astro-cid-4gdooufe> <div class="media-wrap"${addAttribute(`height:${item.h}px;`, "style")} data-astro-cid-4gdooufe> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")}${addAttribute(index < 6 ? "eager" : "lazy", "loading")} decoding="async"${addAttribute(index < 4 ? "high" : "auto", "fetchpriority")}${addAttribute(item.w, "width")}${addAttribute(item.h, "height")} draggable="false" data-astro-cid-4gdooufe> <div class="shade" data-astro-cid-4gdooufe></div> </div> <p data-astro-cid-4gdooufe>${item.title}</p> </button>`), unescapeHTML(JSON.stringify(items)), renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/components/gallery/GalleryCanvas.astro?astro&type=script&index=0&lang.ts"));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/gallery/GalleryCanvas.astro", void 0);

export { $$GalleryCanvas as $ };
