import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ],
  site: 'https://www.dewdew.world',
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true
  })
});