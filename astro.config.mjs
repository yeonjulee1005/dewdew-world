import { defineConfig } from 'astro/config'
import { markReadingTime } from './src/utils/readingTime.mjs'

import robotsTxt from 'astro-robots-txt'
import tailwind from '@astrojs/tailwind'
import icon from "astro-icon"
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales.ts';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    icon(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE_SETTING,
        locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(
            ([key, value]) => [key, value.lang ?? key]
          )
        ),
      },
    }),
    robotsTxt(),
    mdx()
  ],
  site: 'https://www.dewdew.world',
  adapter: vercel({
    edgeMiddleware: true
  }),
  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    // fallback: {
    //   'ko': 'en',
    // },
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
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
