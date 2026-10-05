import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://estiloconintencion.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  adapter: cloudflare({ imageService: 'passthrough' }),
  integrations: [
    sitemap({
      filter: (page) => !/\/(admin|cuestionario|api)(\/|$)/.test(new URL(page).pathname),
    }),
  ],
});
