// import rss from '@astrojs/rss';
// import { getCollection } from 'astro:content'

// export async function GET(context) {
//   const tech = await getCollection('techRss')
//   console.log('tech', tech)
//   return rss({
//     title: 'Dewdew Tech',
//     description: 'Dewdew Tech RSS Feed',
//     site: context.site,
//     items: tech.map((post) => ({
//       title: post.data.title,
//       pubDate: post.data.pubDate,
//       description: post.data.description,
//       customData: post.data.customData,
//       // 게시물의 `slug`에서 RSS 링크를 생성합니다
//       // 이 예에서는 모든 글이 `/tech/[slug]` 경로로 렌더링된다고 가정합니다.
//       link: `/tech/${post.slug}/`
//     }))
//   })
// }