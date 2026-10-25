import GithubSlugger from 'github-slugger'
import { headingRank } from 'hast-util-heading-rank'
import { visit } from 'unist-util-visit'
import { toString } from 'hast-util-to-string'

const slugs = new GithubSlugger()

// Astro v6부터 heading id의 트레일링 하이픈을 더 이상 제거하지 않음(예: 'what-is-bun-').
// 기존에 공유/북마크된 앵커 링크가 깨지지 않도록 v5 이하의 동작(트레일링 하이픈 제거)을 유지함.
// https://docs.astro.build/en/guides/upgrade-to/v6/
export function rehypeSlug() {
  return (tree) => {
    slugs.reset()
    visit(tree, 'element', (node) => {
      if (headingRank(node) && !node.properties.id) {
        let slug = slugs.slug(toString(node))
        if (slug.endsWith('-')) slug = slug.slice(0, -1)
        node.properties.id = slug
      }
    })
  }
}
