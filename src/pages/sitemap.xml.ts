import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://grow-conversions.com';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-04-27' },
  { url: '/about/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/author/mario-kuren/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/services/', priority: '0.9', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/services/cro-audit/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/services/ab-testing/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/services/landing-page-design/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/services/conversion-copywriting/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/case-studies/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/blog/', priority: '0.9', changefreq: 'daily', lastmod: '2026-04-27' },
  { url: '/cro-glossary/', priority: '0.9', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/blog/category/cro-strategy/', priority: '0.7', changefreq: 'weekly', lastmod: '2026-04-27' },
  { url: '/blog/category/a-b-testing/', priority: '0.7', changefreq: 'weekly', lastmod: '2026-04-27' },
  { url: '/blog/category/landing-pages/', priority: '0.7', changefreq: 'weekly', lastmod: '2026-04-27' },
  { url: '/tools/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/conversion-rate-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/ab-test-significance-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/ab-test-sample-size-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/ab-test-duration-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/checkout-funnel-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/cart-abandonment-rate-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/landing-page-roi-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/customer-lifetime-value-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/form-conversion-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
  { url: '/tools/cro-roi-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-04-15' },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const glossaryTerms = await getCollection('glossary');
  const caseStudies = await getCollection('case-studies', ({ data }) => !data.draft);

  const postEntries = posts.map((post) => ({
    url: `/blog/${post.slug}/`,
    lastmod: (post.data.updatedDate ?? post.data.publishDate).toISOString().split('T')[0],
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const glossaryEntries = glossaryTerms.map((term) => ({
    url: `/cro-glossary/${term.slug}/`,
    lastmod: (term.data.updatedDate ?? term.data.publishDate).toISOString().split('T')[0],
    priority: '0.6',
    changefreq: 'monthly',
  }));

  const caseEntries = caseStudies.map((c: { slug: string; data: { draft: boolean; publishDate: Date } }) => ({
    url: `/case-studies/${c.slug}/`,
    lastmod: c.data.publishDate.toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allPages = [
    ...staticPages,
    ...postEntries,
    ...glossaryEntries,
    ...caseEntries,
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
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
