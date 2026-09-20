# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

# MVP Media

Astro 5 site for MVP Media, a fine art figure, boudoir, body paint, and editorial photography studio.

## Local development

```sh
npm install
npm run dev
```

Set `PUBLIC_SITE_URL` to the canonical production URL when building for a different domain. It defaults to `https://boudoir-website.vercel.app`.

## Production build

```sh
npm run build
```

The site uses Cloudinary-hosted media and Vercel's Astro adapter. Keep deployment secrets and service credentials in local or Vercel environment variables; never commit them.
├── astro.config.mjs
