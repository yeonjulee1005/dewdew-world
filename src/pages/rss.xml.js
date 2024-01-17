import rss from '@astrojs/rss';
import { getCollection } from 'astro:content'

export async function GET(context) {
  const blog = await getCollection('blog')
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      // 게시물의 `slug`에서 RSS 링크를 생성합니다
      // 이 예에서는 모든 글이 `/blog/[slug]` 경로로 렌더링된다고 가정합니다.
      link: `/blog/${post.slug}/`
    }))
  })
}