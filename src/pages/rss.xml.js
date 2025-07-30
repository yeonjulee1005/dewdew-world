import rss from '@astrojs/rss';
import { getCollection } from 'astro:content'
import { SITE_DESCRIPTION, SITE_TITLE } from '../i18n/consts.ts';
import { localeParams } from "../i18n.ts";

export const getStaticPaths = () => localeParams;

export async function GET(context) {
  const locale = context.params?.lang || 'en';
  
  const localeTitle = typeof SITE_TITLE === "string"
    ? SITE_TITLE
    : SITE_TITLE[locale];
  const localeDescription = typeof SITE_DESCRIPTION === "string"
    ? SITE_DESCRIPTION
    : SITE_DESCRIPTION[locale];

  const tech = await getCollection('tech')
  const sortedTech = tech.sort((a, b) => new Date(b.data.publishedDate) - new Date(a.data.publishedDate))

  return rss({
    stylesheet: '/rss/style.xsl',
    title: localeTitle,
    description: localeDescription,
    site: context.site,
    items: sortedTech.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/tech/${post.slug}/`
    }))
  })
}