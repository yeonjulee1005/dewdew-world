import { defineConfig } from 'astro/config'
import { markReadingTime } from './src/utils/readingTime.mjs'

import robotsTxt from 'astro-robots-txt'
import tailwind from '@astrojs/tailwind'
import icon from "astro-icon"
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

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
    defaultLocale: "en",
    locales: ["en"], // fallback: { 'ko': 'en' },
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: "contents"} ] ],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'prepend' }]],
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
