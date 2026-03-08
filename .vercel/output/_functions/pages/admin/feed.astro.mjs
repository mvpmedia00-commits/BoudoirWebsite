import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, d as renderTemplate, F as Fragment, f as renderScript, b as addAttribute } from '../../chunks/astro/server_CA-1NlPe.mjs';
import 'piccolore';
import { $ as $$BaseHead } from '../../chunks/BaseHead_BXjp2pBo.mjs';
import { l as listLeads } from '../../chunks/pocketbase_D_R3pIkz.mjs';
import { h as hasAdminSession } from '../../chunks/auth_BQBBuG7a.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mvpmedia.studio");
const prerender = false;
const $$Feed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feed;
  const isAuthed = hasAdminSession(Astro2.cookies);
  let leads = [];
  let loadError = "";
  if (isAuthed) {
    try {
      leads = await listLeads(200);
    } catch (error) {
      loadError = error instanceof Error ? error.message : "Failed to load leads.";
    }
  }
  const nicheOptions = Array.from(new Set(leads.map((lead) => String(lead.niche ?? "general")))).sort();
  const sourceOptions = Array.from(new Set(leads.map((lead) => String(lead.source ?? "direct-page")))).sort();
  return renderTemplate`<html lang="en" data-astro-cid-ridis4xa> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Lead Feed | MVP Media", "description": "Private feed for all lead submissions.", "noIndex": true, "data-astro-cid-ridis4xa": true })}${renderHead()}</head> <body data-astro-cid-ridis4xa> <main class="feed-page" data-astro-cid-ridis4xa> ${!isAuthed ? renderTemplate`<section class="login-shell" data-astro-cid-ridis4xa> <p class="eyebrow" data-astro-cid-ridis4xa>Private Access</p> <h1 data-astro-cid-ridis4xa>Lead Feed</h1> <p data-astro-cid-ridis4xa>Enter the admin access token to review and update inquiries.</p> <form id="admin-login-form" class="login-form" data-astro-cid-ridis4xa> <label data-astro-cid-ridis4xa>
Access Token
<input id="admin-token" type="password" autocomplete="current-password" required data-astro-cid-ridis4xa> </label> <p id="admin-login-error" class="error" data-astro-cid-ridis4xa></p> <button type="submit" class="save-note" data-astro-cid-ridis4xa>Unlock Feed</button> </form> </section>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ridis4xa": true }, { "default": async ($$result2) => renderTemplate` <div class="page-head" data-astro-cid-ridis4xa> <h1 data-astro-cid-ridis4xa>Lead Feed</h1> <button id="admin-logout" type="button" class="ghost-action" data-astro-cid-ridis4xa>Log Out</button> </div> ${loadError ? renderTemplate`<p class="error" data-astro-cid-ridis4xa>${loadError}</p>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ridis4xa": true }, { "default": async ($$result3) => renderTemplate` <div class="controls" data-astro-cid-ridis4xa> <label data-astro-cid-ridis4xa>
Filter by niche
<select id="nicheFilter" data-astro-cid-ridis4xa> <option value="all" data-astro-cid-ridis4xa>All</option> ${nicheOptions.map((niche) => renderTemplate`<option${addAttribute(niche, "value")} data-astro-cid-ridis4xa>${niche}</option>`)} </select> </label> <label data-astro-cid-ridis4xa>
Filter by source
<select id="sourceFilter" data-astro-cid-ridis4xa> <option value="all" data-astro-cid-ridis4xa>All</option> ${sourceOptions.map((source) => renderTemplate`<option${addAttribute(source, "value")} data-astro-cid-ridis4xa>${source}</option>`)} </select> </label> <label data-astro-cid-ridis4xa>
Filter by status
<select id="statusFilter" data-astro-cid-ridis4xa> <option value="all" data-astro-cid-ridis4xa>All</option> <option value="new" data-astro-cid-ridis4xa>new</option> <option value="contacted" data-astro-cid-ridis4xa>contacted</option> <option value="booked" data-astro-cid-ridis4xa>booked</option> </select> </label> <label data-astro-cid-ridis4xa>
Search
<input id="textFilter" type="search" placeholder="name, email, message..." data-astro-cid-ridis4xa> </label> </div> <div class="feed-list" id="feedList" data-astro-cid-ridis4xa> ${leads.map((lead) => {
    const status = String(lead.status ?? "new");
    const niche = String(lead.niche ?? "general");
    return renderTemplate`<details class="feed-item" data-lead-item${addAttribute(niche, "data-niche")}${addAttribute(String(lead.source ?? "direct-page"), "data-source")}${addAttribute(status, "data-status")}${addAttribute(`${String(lead.name ?? "")} ${String(lead.email ?? "")} ${String(lead.message ?? "")}`.toLowerCase(), "data-search")} data-astro-cid-ridis4xa> <summary data-astro-cid-ridis4xa> <div data-astro-cid-ridis4xa> <p class="name" data-astro-cid-ridis4xa>${String(lead.name ?? "Unknown")}</p> <p data-astro-cid-ridis4xa>${String(lead.email ?? "")}</p> <p class="meta" data-astro-cid-ridis4xa>${niche} • ${String(lead.source ?? "direct-page")}</p> </div> <div class="right" data-astro-cid-ridis4xa> <p data-astro-cid-ridis4xa>${new Date(String(lead.created ?? Date.now())).toLocaleDateString()}</p> <span${addAttribute(["badge", status], "class:list")} data-astro-cid-ridis4xa>${status}</span> </div> </summary> <div class="details-body" data-astro-cid-ridis4xa> <p data-astro-cid-ridis4xa><strong data-astro-cid-ridis4xa>Message:</strong> ${String(lead.message ?? "No message provided.")}</p> <p data-astro-cid-ridis4xa><strong data-astro-cid-ridis4xa>Budget:</strong> ${lead.budget ? `$${lead.budget}` : "Not provided"}</p> <p data-astro-cid-ridis4xa><strong data-astro-cid-ridis4xa>Source:</strong> ${String(lead.source ?? "direct-page")}</p> <p data-astro-cid-ridis4xa><strong data-astro-cid-ridis4xa>UTM:</strong> ${String(lead.utm_source ?? "-")} / ${String(lead.utm_medium ?? "-")} / ${String(lead.utm_campaign ?? "-")}</p> <p data-astro-cid-ridis4xa><strong data-astro-cid-ridis4xa>Referrer:</strong> ${String(lead.referrer ?? "-")}</p> <div class="actions" data-astro-cid-ridis4xa> <label data-astro-cid-ridis4xa>
Status
<select data-status${addAttribute(String(lead.id ?? ""), "data-id")} data-astro-cid-ridis4xa> <option${addAttribute(status === "new", "selected")} value="new" data-astro-cid-ridis4xa>new</option> <option${addAttribute(status === "contacted", "selected")} value="contacted" data-astro-cid-ridis4xa>contacted</option> <option${addAttribute(status === "booked", "selected")} value="booked" data-astro-cid-ridis4xa>booked</option> </select> </label> <label class="notes-wrap" data-astro-cid-ridis4xa>
Quick notes
<textarea data-notes${addAttribute(String(lead.id ?? ""), "data-id")}${addAttribute(3, "rows")} data-astro-cid-ridis4xa>${String(lead.notes ?? "")}</textarea> </label> <button type="button" class="save-note" data-save-notes${addAttribute(String(lead.id ?? ""), "data-id")} data-astro-cid-ridis4xa>Save Notes</button> </div> </div> </details>`;
  })} </div> ` })}`}` })}`} </main> ${renderScript($$result, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/admin/feed.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "C:/projects/NEW photo booth/afraid-antimatter/src/pages/admin/feed.astro", void 0);

const $$file = "C:/projects/NEW photo booth/afraid-antimatter/src/pages/admin/feed.astro";
const $$url = "/admin/feed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Feed,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
