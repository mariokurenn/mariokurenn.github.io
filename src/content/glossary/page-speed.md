---
term: "Page Speed"
shortDefinition: "How quickly a web page loads and becomes usable — directly affecting bounce rate, conversion rate, and search engine rankings."
category: "Technical"
difficulty: "beginner"
relatedTerms: ["core-web-vitals", "bounce-rate", "conversion-rate", "largest-contentful-paint", "cumulative-layout-shift"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "How does page speed affect conversion rate?"
    answer: "Page speed has a direct, quantified impact on conversion rate. Google's research shows pages loading in 1 second convert 3× better than pages loading in 5 seconds. For every 1 second of additional load time, conversion rates drop by approximately 7% (Akamai). Mobile users are especially sensitive — 53% of mobile sessions are abandoned if a page takes longer than 3 seconds to load (Google, 2018). Walmart found that every 1 second of improvement increased conversions by 2%. Deloitte's 2020 retail study found a 0.1-second speed improvement increased conversion rate by 8%."
  - question: "How do I test my page speed?"
    answer: "Use Google PageSpeed Insights (pagespeed.web.dev) for the most SEO-relevant score — it shows real-world CrUX data from actual Chrome users plus Lighthouse lab data with specific improvement suggestions. For waterfall analysis (identifying which specific assets are slowest), use WebPageTest.org — test from the same geographic region as your users. GTmetrix combines Lighthouse with additional metrics and provides easy visual reports. Always test on mobile — mobile scores are almost always lower, and mobile performance is weighted more heavily in Google's ranking algorithm."
  - question: "What page speed score is good enough?"
    answer: "Google PageSpeed Insights scores of 90+ (green) are the target for both mobile and desktop. Scores of 50–89 (orange) need improvement. Below 50 (red) is severely impacting both user experience and SEO rankings. In practice, a mobile score of 70+ is a realistic initial target for most sites with third-party scripts. The metric-level targets that matter most for CRO: LCP under 2.5s, Total Blocking Time under 200ms, CLS under 0.1."
  - question: "What are the biggest factors causing slow page speed?"
    answer: "The five most common causes of slow page speed, in order of impact: (1) Unoptimized images — large JPG/PNG files instead of compressed WebP, especially for hero images; (2) Render-blocking JavaScript — third-party scripts (analytics, chat, ads, social widgets) that block rendering; (3) No CDN — serving all assets from one geographic server location; (4) Slow server response (high TTFB) — cheap shared hosting or no server-side caching; (5) Excessive DOM size — pages with thousands of HTML elements require longer processing. Any one of these can push a page from 2s to 6s load time."
  - question: "Does page speed matter for SEO?"
    answer: "Yes — Google uses Core Web Vitals (LCP, INP, CLS) as ranking signals in its Page Experience update (launched June 2021). Pages with consistently good Core Web Vitals scores have a rankings advantage over equivalent-quality pages with poor scores. The SEO impact is particularly significant in competitive niches where page experience is a meaningful differentiator. However, Google has clarified that page experience signals are one of many ranking factors — they won't overcome a significant deficit in content quality and relevance. The CRO impact (direct conversion improvement) is typically larger and more immediate than the SEO impact."
  - question: "Is there a point of diminishing returns for page speed optimization?"
    answer: "Yes. The conversion impact of speed improvements is not linear. The biggest gains are between 4s+ and sub-2.5s (where most visitors are currently abandoning). The incremental conversion gains from reducing a 2s LCP to 1s LCP are real but smaller than reducing 5s to 2s. For most sites, targeting 'good' Core Web Vitals thresholds (LCP under 2.5s, CLS under 0.1, INP under 200ms) captures the majority of available conversion improvement. Further micro-optimization beyond those thresholds is useful for SEO competitive advantage but has diminishing CRO returns."
---

**Page speed** is the measurement of how quickly a web page loads and becomes usable for visitors. It directly affects user experience, bounce rate, conversion rate, and organic search rankings.

Page speed is not a single number — it's a collection of metrics measuring different aspects of load performance, most formally defined by Google's [Core Web Vitals](/cro-glossary/core-web-vitals/) framework.

## Page Speed and Conversion Rate: The Data

The commercial impact of page speed is well documented:

| Source | Finding |
|---|---|
| Google/SOASTA | Pages loading in 1s convert 3× better than pages loading in 5s |
| Akamai study | 1 second delay → 7% reduction in conversions |
| Walmart internal data | 1 second improvement → 2% increase in conversions |
| Google mobile research | 53% of mobile sessions abandoned after 3+ seconds load time |
| Deloitte research (2020) | 0.1s improvement → 8% increase in retail CVR |
| BBC data | Each additional second of load time = 10% fewer users |

For a business doing €100,000/month in e-commerce revenue, improving mobile load time from 5s to 2s could represent €14,000–21,000/month in additional revenue — based on the Akamai conversion impact data.

## Key Page Speed Metrics

| Metric | What it measures | Good threshold |
|---|---|---|
| **Time to First Byte (TTFB)** | Server response time | Under 800ms |
| **First Contentful Paint (FCP)** | First visible content renders | Under 1.8s |
| **Largest Contentful Paint (LCP)** | Main content loaded | Under 2.5s |
| **Total Blocking Time (TBT)** | Time page is unresponsive to input | Under 200ms |
| **Cumulative Layout Shift (CLS)** | Visual stability (elements jumping) | Under 0.1 |
| **Interaction to Next Paint (INP)** | Runtime interactivity | Under 200ms |
| **Time to Interactive (TTI)** | Page fully usable | Under 3.8s |

LCP, INP, and CLS are the three Core Web Vitals metrics with direct SEO ranking impact. LCP and TBT have the most direct conversion rate implications.

## Common Page Speed Problems and Fixes

| Problem | Detection | Fix |
|---|---|---|
| **Unoptimized images** | Large files in waterfall | Convert to WebP, compress, set explicit dimensions |
| **Render-blocking JavaScript** | High TBT in Lighthouse | Defer non-critical JS, move scripts to footer |
| **Third-party scripts** | External domains in waterfall | Audit and remove unnecessary pixels, chat widgets |
| **No browser caching** | Repeated full downloads | Set cache-control headers, enable CDN |
| **No CDN** | Single origin location | Cloudflare (free tier), AWS CloudFront, Fastly |
| **Large CSS files** | Slow FCP | Remove unused CSS (PurgeCSS), minify, inline critical |
| **Slow server response** | High TTFB | Upgrade hosting, enable server-side caching |
| **Web fonts** | Text invisible then reflows | Preload fonts, use font-display: swap or optional |

## Industry Page Speed Benchmarks

Current state of page speed performance by industry (Google CrUX data, 2024):

| Industry | Median mobile LCP | % pages with 'Good' LCP | Median mobile TTFB |
|----------|-------------------|--------------------------|-------------------|
| Finance | 2.9s | 45% | 520ms |
| Technology / SaaS | 3.1s | 40% | 580ms |
| News & Publishing | 3.4s | 35% | 620ms |
| B2B Services | 3.3s | 38% | 590ms |
| Healthcare | 3.6s | 31% | 650ms |
| E-commerce | 3.8s | 28% | 710ms |
| Travel | 4.2s | 22% | 780ms |

E-commerce has the slowest median performance and the lowest percentage of pages achieving 'Good' LCP — despite being the industry where mobile purchasing intent is highest and the conversion cost of slow loads is greatest.

## Page Speed by Device

Mobile speeds are almost always worse than desktop — and matter more:

| Device | Typical score gap | Why |
|--------|------------------|-----|
| Desktop | Higher scores | Faster CPUs, wired connections, larger bandwidth |
| Mobile | Lower scores (often 30–50 points lower) | Cellular connections, limited CPU, battery throttling |

Mobile represents 60–70% of web traffic for most consumer sites. Google's ranking signals weight mobile performance. A site with 90 desktop score and 40 mobile score has a serious mobile performance problem — and is likely losing both ranking positions and conversions on the device that carries most of the traffic.

For the full mobile optimization context, see [Mobile Conversion Rate Optimization](/blog/mobile-conversion-rate-optimization/).

## Testing Page Speed

**Google PageSpeed Insights** ([pagespeed.web.dev](https://pagespeed.web.dev/)) — Uses real-world Chrome User Experience Report (CrUX) data. The most relevant score for SEO decisions.

**Google Lighthouse** — Available in Chrome DevTools (F12 → Lighthouse). Lab-based testing that provides actionable diagnostics and specific fix suggestions.

**WebPageTest** ([webpagetest.org](https://www.webpagetest.org/)) — Advanced waterfall analysis, filmstrip view, test from multiple locations and devices. Essential for understanding which specific assets are causing delays.

**GTmetrix** — Combines Lighthouse + additional metrics, easy visual reports.

**Google Search Console → Core Web Vitals** — Shows real-user field data by page group, segmented by mobile and desktop. The most actionable view for prioritizing fixes across a large site.

## The Page Speed Fix Priority Order

Not all speed improvements are equal. Fix in this order for maximum impact:

1. **Hero image optimization** (WebP + compression + `fetchpriority="high"`) — typically the single largest LCP improvement
2. **TTFB optimization** (CDN + server caching) — reduces all downstream metrics
3. **Render-blocking script audit** — identify and defer third-party scripts
4. **Web font optimization** — preload critical fonts, use `font-display: swap`
5. **CSS optimization** — inline critical CSS, defer non-critical styles
6. **Remove unnecessary third-party tags** — audit all GTM tags for value vs performance cost

## Page Speed as a CRO Quick Win

Unlike most CRO changes, page speed improvements are:
- **No-test-required** — every visitor benefits from faster load times immediately
- **Permanent** — the improvement applies to all future traffic
- **Compounding** — faster pages also benefit SEO rankings, increasing future traffic

Page speed improvements are in the Phase 1 "fix first, test second" category of CRO work. A mobile LCP over 4 seconds should be fixed before any A/B tests are run on that page — otherwise you're A/B testing on a fundamentally broken foundation.

See [Largest Contentful Paint](/cro-glossary/largest-contentful-paint/) for the deep-dive on the most important individual speed metric. For how page speed fits within the full [CRO strategy](/blog/what-is-conversion-rate-optimization/), the technical foundation must always be established before behavioral optimization begins.
