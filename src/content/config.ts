// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
import { rssSchema } from '@astrojs/rss'

// Define a schema for each collection you'd like to validate.
const tech = defineCollection({
  type: 'content', // v2.5.0 이상
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    draft: z.boolean(),
    cover: z.string().optional(),
    coverAlt: z.string(),
  })
})

const techRss = defineCollection({
  schema: rssSchema
})

// Export a single `collections` object to register your collection(s)
export const collections = { tech, techRss }
