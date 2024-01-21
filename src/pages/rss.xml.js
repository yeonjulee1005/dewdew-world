import rss from '@astrojs/rss';
import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const tech = await getCollection('tech')
  return rss({
    stylesheet: '/rss/style.xsl',
    title: 'Dewdew Tech',
    description: 'Dewdew Tech RSS Feed',
    site: context.site,
    items: tech.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/tech/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body))
    }))
  })
}