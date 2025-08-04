import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});