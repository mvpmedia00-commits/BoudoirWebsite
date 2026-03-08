import { e as createAstro, c as createComponent, d as renderTemplate, r as renderComponent, a as renderHead } from '../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../chunks/BaseHead_BXjp2pBo.mjs';
import { a as $$Footer, $ as $$Header } from '../chunks/Header_BmKSZvhv.mjs';
import { k as hasVaultSession } from '../chunks/auth_BQBBuG7a.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mvpmedia.studio");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (hasVaultSession(Astro2.cookies)) {
    return Astro2.redirect("/vault/library");
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-k6vpfytl> <head>', "", "</head> <body data-astro-cid-k6vpfytl> ", ' <main data-astro-cid-k6vpfytl> <section class="vault-entry" data-astro-cid-k6vpfytl> <p class="eyebrow" data-astro-cid-k6vpfytl>Private Access</p> <h1 data-astro-cid-k6vpfytl>Members Vault</h1> <p data-astro-cid-k6vpfytl>Enter your passcode to unlock private collections and member-only editorial drops.</p> <form id="vault-access-form" data-astro-cid-k6vpfytl> <label for="vault-code" data-astro-cid-k6vpfytl>Access Code</label> <input id="vault-code" name="vault-code" type="password" required autocomplete="off" data-astro-cid-k6vpfytl> <p id="vault-error" class="error" data-astro-cid-k6vpfytl></p> <div class="entry-actions" data-astro-cid-k6vpfytl> <button type="submit" class="btn btn-solid" data-astro-cid-k6vpfytl>Unlock Vault</button> <a class="btn btn-ghost" href="/" data-astro-cid-k6vpfytl>Return Home</a> </div> </form> </section> </main> ', ` <script>
			const form = document.getElementById('vault-access-form');
			const errorEl = document.getElementById('vault-error');

			form?.addEventListener('submit', async (event) => {
				event.preventDefault();
				const codeInput = document.getElementById('vault-code');
				const submitButton = form.querySelector('button[type="submit"]');
				const entered = codeInput instanceof HTMLInputElement ? codeInput.value.trim() : '';

				if (!(submitButton instanceof HTMLButtonElement)) return;

				submitButton.disabled = true;
				submitButton.textContent = 'Unlocking...';
				if (errorEl) errorEl.textContent = '';

				try {
					const response = await fetch('/api/vault-session', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ code: entered })
					});

					const data = await response.json().catch(() => ({}));
					if (!response.ok) {
						throw new Error(typeof data.error === 'string' ? data.error : 'Access code is not valid.');
					}

					window.location.href = '/vault/library';
				} catch (error) {
					if (errorEl) {
						errorEl.textContent = error instanceof Error ? error.message : 'Could not unlock the vault right now.';
					}
				} finally {
					submitButton.disabled = false;
					submitButton.textContent = 'Unlock Vault';
				}
			});
		<\/script> </body> </html>`])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Members Vault | MVP Media", "description": "Private member access for protected portfolio collections and client-only drops.", "noIndex": true, "data-astro-cid-k6vpfytl": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-k6vpfytl": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-k6vpfytl": true }));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/index.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/index.astro";
const $$url = "/vault";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
