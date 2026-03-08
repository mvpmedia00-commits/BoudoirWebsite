import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderScript, d as renderTemplate } from './astro/server_CA-1NlPe.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://mvpmedia.studio");
const $$LeadForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeadForm;
  const { niche, source = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form class="lead-form" data-lead-form${addAttribute(niche, "data-niche")}${addAttribute(source, "data-source")} data-astro-cid-tpaelkd6> <input name="name" placeholder="Full Name" required data-astro-cid-tpaelkd6> <input name="email" type="email" placeholder="Email Address" required data-astro-cid-tpaelkd6> <input name="budget" type="number" min="0" placeholder="Budget (USD)" data-astro-cid-tpaelkd6> <textarea name="message" placeholder="Tell us about your project..."${addAttribute(5, "rows")} data-astro-cid-tpaelkd6></textarea> <button type="submit" data-astro-cid-tpaelkd6>Get My Quote</button> <p class="lead-feedback" data-feedback aria-live="polite" data-astro-cid-tpaelkd6></p> </form> ${renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/components/ui/LeadForm.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/components/ui/LeadForm.astro", void 0);

export { $$LeadForm as $ };
