import { c as createComponent, r as renderComponent, a as renderHead, d as renderTemplate } from '../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../chunks/BaseHead_Wy0sVJGX.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Header_DmMLhIda.mjs';
import { $ as $$LeadForm } from '../chunks/LeadForm_CqNF-KHX.mjs';
import { S as SITE_TITLE } from '../chunks/consts_B2K2yu7A.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Booking = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-pdfs7twc> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Booking | ${SITE_TITLE}`, "description": "Start your after dark boudoir project with a discreet intake and fast response.", "data-astro-cid-pdfs7twc": true })}${renderHead()}</head> <body data-astro-cid-pdfs7twc> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-pdfs7twc": true })} <main data-astro-cid-pdfs7twc> <section class="booking-intro" data-astro-cid-pdfs7twc> <p class="eyebrow" data-astro-cid-pdfs7twc>Booking</p> <h1 data-astro-cid-pdfs7twc>Start Your Boudoir Session</h1> <p data-astro-cid-pdfs7twc>
Share your vision, comfort level, and preferred timeline. We qualify first, then schedule privately.
</p> </section> <section class="offers" data-astro-cid-pdfs7twc> <article data-astro-cid-pdfs7twc> <h2 data-astro-cid-pdfs7twc>Private Boudoir</h2> <p data-astro-cid-pdfs7twc>Discreet boudoir sessions in studio or private location with guided direction.</p> </article> <article data-astro-cid-pdfs7twc> <h2 data-astro-cid-pdfs7twc>Artistic Nude</h2> <p data-astro-cid-pdfs7twc>Fine-art nude portrait direction with tasteful framing and privacy-first pacing.</p> </article> <article data-astro-cid-pdfs7twc> <h2 data-astro-cid-pdfs7twc>Afterdark Editorial</h2> <p data-astro-cid-pdfs7twc>Low-light cinematic sets with controlled mood, styling, and confidential delivery.</p> </article> </section> <section class="next-steps" data-astro-cid-pdfs7twc> <h2 data-astro-cid-pdfs7twc>What Happens Next</h2> <p data-astro-cid-pdfs7twc>1. We review your inquiry and goals.</p> <p data-astro-cid-pdfs7twc>2. You receive options, pricing range, and availability.</p> <p data-astro-cid-pdfs7twc>3. We confirm scope and lock in your date.</p> </section> <section data-astro-cid-pdfs7twc> ${renderComponent($$result, "LeadForm", $$LeadForm, { "niche": "boudoir", "source": "booking-page", "data-astro-cid-pdfs7twc": true })} </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-pdfs7twc": true })} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/booking.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/booking.astro";
const $$url = "/booking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Booking,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
