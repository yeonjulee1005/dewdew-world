import { defineConfig, svgoOptimizer } from 'astro/config'
import { markReadingTime } from './src/utils/readingTime.mjs'
import { rehypeSlug } from './src/utils/rehypeSlug.mjs'

import robotsTxt from 'astro-robots-txt'
import tailwindcssPlugin from 'tailwindcss'
import autoprefixerPlugin from 'autoprefixer'
import icon from "astro-icon"
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

import { unified } from '@astrojs/markdown-remark'
import remarkToc from 'remark-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales.ts';

// 환경에 따른 사이트 URL 설정
const getSiteUrl = () => {
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV;
  const branch = process.env.VERCEL_GIT_COMMIT_REF;

  if (env === 'production' && branch === 'master') {
    return 'https://www.dewdew.world';
  } else if (env === 'preview' || branch === 'develop') {
    return 'https://dev.dewdew.world';
  }

  return 'https://www.dewdew.world'; // 기본값
};

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: true },
  // 클릭 전에 다음 페이지를 미리 받아와서, 클릭 후 페인트까지의 지연을 줄임
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  // Astro 7의 compressHTML 기본값('jsx')은 인라인 엘리먼트 사이 공백을 제거함.
  // 기존 레이아웃이 그 공백에 의존하므로 v6까지의 동작(true)을 명시적으로 유지.
  compressHTML: true,
  vite: {
    build: {
      cssCodeSplit: false, // CSS를 하나의 파일로 번들링하여 로딩 지연 방지
    },
    css: {
      // @astrojs/tailwind가 astro 6/7을 지원하지 않아(peer astro ^3~^5) 제거하고,
      // 해당 통합이 하던 일(postcss에 tailwindcss+autoprefixer 연결)을 직접 구성함.
      postcss: {
        plugins: [tailwindcssPlugin(), autoprefixerPlugin()],
      },
    },
  },
  experimental: {
    // v7: experimental.svgo(boolean) -> experimental.svgOptimizer(factory)
    svgOptimizer: svgoOptimizer(),
  },
  serverComponents: [],
  integrations: [
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
  site: getSiteUrl(),
  adapter: vercel(),
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
    // Astro 7부터 기본 마크다운 프로세서가 바뀌어, remark/rehype 플러그인은
    // markdown.remarkPlugins가 아니라 unified()의 옵션으로 전달해야 함.
    processor: unified({
      remarkPlugins: [ [remarkToc, { heading: "contents" } ], markReadingTime ],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'prepend' }]],
    }),
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'min-light',
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      wrap: true,
    },
    syntaxHighlight: 'shiki'
  },
})
