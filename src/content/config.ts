import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    tags: z.array(z.string())
  })
});

const portfolio = defineCollection({
  type: 'content',
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
    services: z.array(z.string()) // This will work like tags for filtering
  })
});

export const collections = { 
  blog,
  portfolio 
};