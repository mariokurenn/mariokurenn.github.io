import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Darko'),
    category: z.enum([
      'CRO Strategy',
      'A/B Testing',
      'Landing Pages',
      'Copywriting',
      'Analytics',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    seoKeyword: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    results: z.array(z.object({
      metric: z.string(),
      before: z.string(),
      after: z.string(),
      change: z.string(),
    })),
    publishDate: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, 'case-studies': caseStudies };
