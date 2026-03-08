import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_CA-1NlPe.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */

const $$Astro = createAstro("https://mvpmedia.studio");
const $$AgeGate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AgeGate;
  const { redirectTo = "/gallery", returnTo = "/gallery" } = Astro2.props;
  const continueHref = `/api/adult-access?returnTo=${encodeURIComponent(returnTo)}`;
  return renderTemplate`${maybeRenderHead()}<section class="age-gate" aria-labelledby="age-gate-title" data-astro-cid-c2ayhruq> <div class="age-gate-dialog" data-astro-cid-c2ayhruq> <p class="age-gate-kicker" data-astro-cid-c2ayhruq>18+ Access</p> <h2 id="age-gate-title" data-astro-cid-c2ayhruq>This portfolio category is intended for adults only.</h2> <p data-astro-cid-c2ayhruq>
This content presents professional boudoir, artistic nude, and body-art work in a respectful editorial context.
			Please confirm that you are 18 or older to continue.
</p> <div class="age-gate-actions" data-astro-cid-c2ayhruq> <a class="btn btn-solid"${addAttribute(continueHref, "href")} data-astro-cid-c2ayhruq>I am 18 or older - Enter Gallery</a> <a class="btn btn-ghost"${addAttribute(redirectTo, "href")} data-age-gate-decline data-astro-cid-c2ayhruq>Leave</a> </div> </div> </section> `;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/AgeGate.astro", void 0);

export { $$AgeGate as $ };
