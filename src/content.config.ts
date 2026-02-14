import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  schema: z.object({
    type: z.string(),
    title: z.string(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { pages };
