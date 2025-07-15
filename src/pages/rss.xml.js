import rss from '@astrojs/rss';
import { getCollection } from 'astro:content'

export async function GET(context) {
  const tech = await getCollection('tech')
  const sortedTech = tech.sort((a, b) => new Date(b.data.publishedDate) - new Date(a.data.publishedDate))

  return rss({
    stylesheet: '/rss/style.xsl',
    title: 'Dewdew Tech',
    description: 'Dewdew Tech RSS Feed',
    site: context.site,
    items: sortedTech.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/tech/${post.slug}/`
    }))
  })
}