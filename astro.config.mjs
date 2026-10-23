import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL lets preview builds use their pages.dev address. Production = real domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://plantedbyfaith.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
