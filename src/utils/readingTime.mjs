import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export function markReadingTime() {
  return function (tree, { data }) {
    const texts = toString(tree)
    const readingTime = getReadingTime(texts)
    data.astro.frontmatter.readMinutes = readingTime.text
  }
}
