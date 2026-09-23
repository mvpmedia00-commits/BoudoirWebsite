// @ts-check


import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

const site = process.env.PUBLIC_SITE_URL || 'https://boudoir-website.vercel.app';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  adapter: vercel(),
  output: 'server',
  redirects: {
    '/hub': '/films',
  },
  security: {
    // Astro only trusts the request Host header for these domains. Without them every
    // request looks like it came from localhost, so same-site form posts (the vault
    // login) fail Astro's cross-site check with a 403.
    allowedDomains: [
      { hostname: new URL(site).hostname },
      { hostname: '*.vercel.app' },
    ],
  },
  env: {
    // Secrets are read from the environment on every request (not baked in at build time),
    // so changing them in Vercel takes effect without a rebuild.
    schema: {
      POCKETBASE_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      POCKETBASE_ADMIN_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      ADMIN_DASH_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      VAULT_ACCESS_CODE: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  vite: {
    // Keep the Vite cache out of node_modules; on Windows, locked files there break `astro dev`.
    cacheDir: '.cache/vite',
  },
});
