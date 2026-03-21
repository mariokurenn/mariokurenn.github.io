import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: process.env.SITE_URL || 'https://grow-conversions.com',
  base: '/',
  integrations: [
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
