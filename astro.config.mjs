// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Update `site` to the real production domain before launch — it drives
// canonical URLs, Open Graph tags and the generated sitemap.
export default defineConfig({
  site: 'https://www.folddesigns.co.uk',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
