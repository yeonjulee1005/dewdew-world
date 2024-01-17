import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export function markReadingTime() {
  return function (tree, { data }) {
    const texts = toString(tree)
    const readingTime = getReadingTime(texts)
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.readMinutes = readingTime.text
  }
}
