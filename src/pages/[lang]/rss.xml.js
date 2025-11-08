import rss from '@astrojs/rss';
import { getCollection } from 'astro:content'
import { SITE_DESCRIPTION, SITE_TITLE } from '../../i18n/consts.ts';
import { localeParams } from '../../i18n.ts';

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
  // 언어별로 필터링 (다른 페이지들과 동일하게 isDraft: true인 게시물만 포함)
  const filteredTech = tech.filter((post) => {
    const postLang = post.id.split('/')[0];
    return post.data.isDraft && postLang === locale;
  });
  
  const sortedTech = filteredTech.sort((a, b) => 
    new Date(b.data.publishedDate).valueOf() - 
    new Date(a.data.publishedDate).valueOf()
  );

  return rss({
    stylesheet: '/rss/style.xsl',
    title: localeTitle,
    description: localeDescription,
    site: context.site,
    items: sortedTech.map((post) => {
      // tech/index.astro와 동일한 방식으로 슬러그 추출
      const [, slug] = post.id.split("/");
      return {
        title: post.data.title,
        pubDate: post.data.publishedDate,
        description: post.data.description,
        link: `/${locale}/tech/${slug}/`
      };
    })
  })
}

