import { c as createComponent, d as renderTemplate, r as renderComponent, b as addAttribute, a as renderHead } from '../chunks/astro/server_BWvinCl0.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../chunks/BaseHead_Wy0sVJGX.mjs';
import { a as $$Footer, $ as $$Header } from '../chunks/Header_DmMLhIda.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const vaultCode = String("mvp-after-dark");
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-k6vpfytl> <head>', "", "</head> <body data-astro-cid-k6vpfytl> ", ' <main data-astro-cid-k6vpfytl> <section class="vault-entry" data-astro-cid-k6vpfytl> <p class="eyebrow" data-astro-cid-k6vpfytl>Private Access</p> <h1 data-astro-cid-k6vpfytl>Members Vault</h1> <p data-astro-cid-k6vpfytl>Enter your passcode to unlock private collections and member-only editorial drops.</p> <form id="vault-access-form"', ' data-astro-cid-k6vpfytl> <label for="vault-code" data-astro-cid-k6vpfytl>Access Code</label> <input id="vault-code" name="vault-code" type="password" required autocomplete="off" data-astro-cid-k6vpfytl> <p id="vault-error" class="error" data-astro-cid-k6vpfytl></p> <div class="entry-actions" data-astro-cid-k6vpfytl> <button type="submit" class="btn btn-solid" data-astro-cid-k6vpfytl>Unlock Vault</button> <a class="btn btn-ghost" href="/" data-astro-cid-k6vpfytl>Return Home</a> </div> </form> </section> </main> ', " <script>\n			const form = document.getElementById('vault-access-form');\n			const errorEl = document.getElementById('vault-error');\n			const key = 'mvp_vault_access';\n			const expectedCodeRaw = form instanceof HTMLFormElement ? form.dataset.vaultCode || '' : '';\n			const expectedCode = expectedCodeRaw.trim().toLowerCase();\n\n			if (localStorage.getItem(key) === 'granted') {\n				window.location.href = '/vault/library';\n			}\n\n			form?.addEventListener('submit', (event) => {\n				event.preventDefault();\n				const codeInput = document.getElementById('vault-code');\n				const entered = codeInput instanceof HTMLInputElement ? codeInput.value.trim().toLowerCase() : '';\n				if (!expectedCode) {\n					if (errorEl) errorEl.textContent = 'Vault is not configured yet. Set PUBLIC_VAULT_CODE in .env and restart.';\n					return;\n				}\n				if (entered !== expectedCode) {\n					if (errorEl) errorEl.textContent = 'Access code is not valid. Try again.';\n					return;\n				}\n				localStorage.setItem(key, 'granted');\n				window.location.href = '/vault/library';\n			});\n		</script> </body> </html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Members Vault | MVP Media", "description": "Private member access for protected portfolio collections and client-only drops.", "noIndex": true, "data-astro-cid-k6vpfytl": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-k6vpfytl": true }), addAttribute(vaultCode, "data-vault-code"), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-k6vpfytl": true }));
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/index.astro", void 0);
const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/vault/index.astro";
const $$url = "/vault";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
