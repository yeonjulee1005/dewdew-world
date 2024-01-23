import { defineConfig } from 'astro/config'
import { markReadingTime } from './src/utils/readingTime.mjs'

import robotsTxt from 'astro-robots-txt'
import tailwind from '@astrojs/tailwind'
import icon from "astro-icon"
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    icon(),
    sitemap(),
    robotsTxt(),
    mdx()
  ],
  site: 'https://www.dewdew.world',
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true
  }),
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
    fallback: {
      'en': 'ko'
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'min-light',
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      wrap: true,
    },
    remarkPlugins: [markReadingTime],
    syntaxHighlight: 'shiki'
  }
})
