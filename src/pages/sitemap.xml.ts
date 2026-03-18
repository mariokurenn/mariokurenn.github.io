import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://conversionrate-expert.com';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about/', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/cro-audit/', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/ab-testing/', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/landing-page-design/', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/conversion-copywriting/', priority: '0.8', changefreq: 'monthly' },
  { url: '/case-studies/', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog/', priority: '0.9', changefreq: 'daily' },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const postEntries = posts.map((post) => ({
    url: `/blog/${post.slug}/`,
    lastmod: (post.data.updatedDate ?? post.data.publishDate).toISOString().split('T')[0],
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const today = new Date().toISOString().split('T')[0];

  const allPages = [
    ...staticPages.map((p) => ({ ...p, lastmod: today })),
    ...postEntries,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${SITE}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
