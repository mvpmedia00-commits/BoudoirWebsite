# MVP Media Center TODO

## Conversion Tracking
- [x] Add analytics event endpoint (`/api/events`).
- [x] Add global client tracker (`window.mvpTrack`) in `BaseHead`.
- [x] Track home CTA clicks.
- [x] Track hub CTA clicks.
- [x] Track media expand actions in hub lightbox.
- [x] Track lead form submissions.

## Lead Attribution
- [x] Capture `source` on lead form submissions.
- [x] Capture `utm_source`, `utm_medium`, `utm_campaign`.
- [x] Capture `referrer`.
- [x] Persist attribution fields in API + PocketBase helper.
- [x] Show attribution fields in admin lead feed.

## Media Pipeline (CMS-backed)
- [x] Add PocketBase collection schema for `media_items`.
- [x] Add media listing helper in `src/lib/pocketbase.ts`.
- [x] Add media API route (`/api/media`).
- [x] Hydrate hub station media from PocketBase with fallback.
- [x] Hydrate niche gallery from PocketBase with fallback.

## CRM-lite Admin Feed
- [x] Add filter by niche.
- [x] Add filter by source.
- [x] Add filter by status.
- [x] Add search by name/email/message.
- [x] Keep status update + notes save workflow.

## SEO + Metadata
- [x] Add keywords support in `BaseHead`.
- [x] Add JSON-LD support in `BaseHead`.
- [x] Add homepage JSON-LD + keywords.
- [x] Add hub JSON-LD + keywords.
- [x] Keep mature route noindex behavior.

## Trust + Authority Layer
- [x] Add process/proof section in hub.
- [x] Keep client trust strip and station structure.

## Remaining Manual Ops (requires your accounts/content)
- [ ] Import updated `backend/pb_schema.json` into PocketBase.
- [ ] Populate `media_items` with real media URLs/thumbnails per station.
- [ ] Connect SMTP/hook notifications in PocketBase admin.
- [ ] Add production analytics destination (optional, if you want external BI).
- [ ] Replace placeholder media with final branded assets.
