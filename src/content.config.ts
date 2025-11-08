// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

// Define a schema for each collection you'd like to validate.
const techCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/tech' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isDraft: z.boolean(),
    author: z.string().default('Dewdew'),
    language: z.enum(['en', 'ko']), // ['ko', 'en']
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

// Export a single `collections` object to register your collection(s)
export const collections = { tech: techCollection }
