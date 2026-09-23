# MVP Media

Astro 5 site for MVP Media, a fine art figure, boudoir, body paint, and editorial photography studio. It is server-rendered on Vercel, stores leads and analytics in PocketBase, and hosts media on Cloudinary.

## Local development

Requires Node 22.

```sh
npm install
cp .env.example .env   # then fill in the values
npm run dev            # http://localhost:4321
```

| Command          | What it does                                    |
| ---------------- | ----------------------------------------------- |
| `npm run dev`    | Start the dev server                            |
| `npm run check`  | Type-check every page, component, and script    |
| `npm run build`  | Production build into `.vercel/output`          |
| `npm run verify` | `check` + `build`; the same gate CI runs        |

## Environment variables

Set these in `.env` locally and in Vercel → Settings → Environment Variables for production. Never commit real values.

| Variable                 | Required            | Purpose                                                          |
| ------------------------ | ------------------- | ---------------------------------------------------------------- |
| `PUBLIC_SITE_URL`        | No                  | Canonical URL. Defaults to `https://boudoir-website.vercel.app`. |
| `POCKETBASE_URL`         | For leads and media | PocketBase base URL                                              |
| `POCKETBASE_ADMIN_TOKEN` | For leads and media | PocketBase auth token                                            |
| `ADMIN_DASH_TOKEN`       | For `/admin/feed`   | Admin sign-in token                                              |
| `VAULT_ACCESS_CODE`      | For `/vault`        | Members vault code. `PUBLIC_VAULT_CODE` is still accepted.       |

Without PocketBase, the site still renders: lead submissions fail with a friendly message and media falls back to the built-in images.

## Project structure

```
src/
├── pages/                 Routes (file name = URL)
│   ├── index.astro        Home (prerendered static page)
│   ├── films.astro        Films (/hub redirects here)
│   ├── store/             Store grid and item pages (items in src/content/store)
│   ├── gallery.astro      Gallery overview
│   ├── gallery/[category] boudoir, artistic-nude, body-paint, editorial-portrait
│   ├── land/[slug]        Niche landing pages (mature ones are age-gated)
│   ├── blog/              Blog index, posts, tag and category pages
│   ├── vault/             Members vault (access checked on the server)
│   ├── admin/feed.astro   Lead CRM (access checked on the server)
│   └── api/               leads, events, media, adult-access endpoints
├── components/            Shared layout and UI components
├── content/               Markdown collections: blog/, vault/, store/
├── data/                  Static gallery and site media lists
├── lib/
│   ├── access.ts          Vault, admin, and age-gate cookies (server only)
│   ├── pocketbase.ts      PocketBase client
│   └── niches.ts          Landing page definitions
└── styles/global.css      Global design tokens and base styles
backend/                   PocketBase Dockerfile, Fly config, schema
```

## Access control

- **Vault:** `/vault` posts the code to the server. A correct code sets an httpOnly cookie, and `/vault/library` and every vault post check that cookie before rendering. Changing `VAULT_ACCESS_CODE` signs everyone out.
- **Admin feed:** open `/admin/feed?token=<ADMIN_DASH_TOKEN>` once. The token is exchanged for a 12-hour httpOnly cookie and removed from the URL. Editing leads (`PATCH /api/leads`) requires that cookie.
- **Age gate:** landing pages use a server cookie; gallery pages use a browser-side confirmation.

## Store

Each store item is one Markdown file in `src/content/store/`. Copy `_template.md`, rename it (the file name becomes the address, e.g. `prints.md` → `/store/prints`), fill it in, and remove the leading underscore.

- `status`: `available` shows Buy buttons, `coming-soon` lists the item without them, `hidden` removes it.
- `options`: one entry per version (e.g. Print and Digital), each with a `price` and the https `url` where it is sold. Options without a link show as "Coming soon".
- `mature: true` blurs the item in the store grid and puts its page behind the 18+ confirmation.
- `image` / `gallery`: https image URLs. Host adult images on an adult-friendly CDN such as Bunny.net.

The Store link appears in the menu and footer as soon as one item is not hidden.

## Deployment

Vercel builds the site from source on every push, as configured in `vercel.json`. Do not commit `.vercel/`, `dist/`, or `.env*` files; they are git-ignored. To add a blog post, put a Markdown file in `src/content/blog/`.
