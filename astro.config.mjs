// @ts-check


import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://boudoir-website.vercel.app',
  integrations: [mdx(), sitemap()],
  adapter: vercel(),
  output: 'server',
  vite: {
    // Keep cache in project root to avoid locked node_modules/.vite files on this machine.
    cacheDir: '.cache/vite',
    plugins: [tailwindcss()],
  },
});
