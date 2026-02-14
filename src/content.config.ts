import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z
    .object({
      type: z.string().optional(), // "Home" or "Page"
      title: z.string(),
      slug: z.string().optional(),
      seoDescription: z.string().optional(),

      // Allow Visual Editor sections data (we keep it permissive on purpose)
      sections: z.array(z.any()).optional()
    })
    .passthrough()
});

export const collections = { pages };
