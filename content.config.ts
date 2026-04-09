import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        date: z.string(),
        description: z.string().optional(),
        published: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
