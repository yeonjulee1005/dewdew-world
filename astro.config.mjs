import { defineConfig } from 'astro/config'
import { markReadingTime } from './src/utils/readingTime.mjs'

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
  }),
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins: [markReadingTime],
    syntaxHighlight: 'shiki',
  },
});