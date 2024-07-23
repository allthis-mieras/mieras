// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const workCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    role: z.array(z.string()),
    video: z.string().optional(),
    size: z.enum(['S', 'M', 'L']),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'work': workCollection,
};