import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Mario'),
    category: z.enum([
      'CRO Strategy',
      'A/B Testing',
      'Landing Pages',
      'Copywriting',
      'Analytics',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageHero: z.string().optional(),
    imageAlt: z.string().optional(),
    seoKeyword: z.string().optional(),
    seoTitle: z.string().max(60).optional(),
    canonicalURL: z.string().url().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    howTo: z.object({
      name: z.string(),
      description: z.string().optional(),
      steps: z.array(z.object({
        name: z.string(),
        text: z.string(),
      })),
    }).optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    client: z.string(),
    clientUrl: z.string().url().optional(),
    industry: z.string(),
    duration: z.string().optional(),
    services: z.array(z.string()),
    results: z.array(z.object({
      metric: z.string(),
      before: z.string(),
      after: z.string(),
      change: z.string(),
    })),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    }).optional(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const glossary = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    shortDefinition: z.string().max(160),
    category: z.enum(['Metrics', 'A/B Testing', 'Analytics', 'CRO Strategy', 'Psychology', 'Technical']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    relatedTerms: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog, 'case-studies': caseStudies, glossary };
