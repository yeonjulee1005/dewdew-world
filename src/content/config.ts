// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
import { rssSchema } from '@astrojs/rss'

// Define a schema for each collection you'd like to validate.
const techCollection = defineCollection({
  type: 'content', // v2.5.0 이상
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isDraft: z.boolean(),
    author: z.string().default('Dewdew'),
    language: z.enum(['ko', 'en']),
    publishedDate: z.date(),
    tags: z.array(z.string()),
    authorContact: z.string().email(),
    canonicalURL: z.string().url(),
    avatar: z.string(),
    avatarAlt: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
  })
})

const techRss = defineCollection({
  schema: rssSchema
})

// Export a single `collections` object to register your collection(s)
export const collections = { tech: techCollection, techRss }
