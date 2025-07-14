import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '*.md', base: "src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    client: z.string(),
    country: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    categories: z.array(z.string())
  })
});

export const collections = { 
  portfolio 
};