---
term: "Page Speed"
shortDefinition: "How quickly a web page loads and becomes usable — directly affecting bounce rate, conversion rate, and search engine rankings."
category: "Technical"
difficulty: "beginner"
relatedTerms: ["core-web-vitals", "bounce-rate", "conversion-rate", "above-the-fold"]
publishDate: "2026-03-24"
faqs:
  - question: "How does page speed affect conversion rate?"
    answer: "Page speed has a direct, quantified impact on conversion rate. Google research found that pages loading in 1 second convert 3× better than pages loading in 5 seconds. For every 1 second of load time added, conversion rates drop by approximately 7% (Akamai research). Mobile users are especially sensitive — 53% of mobile sessions are abandoned if a page takes longer than 3 seconds to load. For e-commerce specifically, Walmart found that every 1 second of improvement increased conversions by 2%."
  - question: "How do I test my page speed?"
    answer: "Use Google PageSpeed Insights (pagespeed.web.dev) for the most SEO-relevant score — it measures real-world CrUX data and provides specific improvement recommendations. For waterfall analysis (identifying which specific assets are slowest), use Google Lighthouse (built into Chrome DevTools), WebPageTest.org, or GTmetrix. Test from the same geographic region as your users. Always test on mobile as well as desktop — mobile scores are almost always lower and more impactful."
  - question: "What page speed score is good enough?"
    answer: "Google PageSpeed Insights scores of 90+ (green) are the target for both mobile and desktop. Scores of 50–89 (orange) need improvement. Below 50 (red) is severely impacting both user experience and SEO rankings. In practice, a mobile score of 70+ is a reasonable initial target for most sites. The LCP (Largest Contentful Paint) should be under 2.5 seconds, and the Total Blocking Time should be under 200ms for good user experience."
---

**Page speed** is the measurement of how quickly a web page loads and becomes usable for visitors. It directly affects user experience, bounce rate, conversion rate, and organic search rankings.

Page speed is not a single number — it's a collection of metrics measuring different aspects of load performance, most formally defined by Google's [Core Web Vitals](/cro-glossary/core-web-vitals/) framework.

## Page Speed and Conversion Rate: The Data

The commercial impact of page speed is well documented:

| Source | Finding |
|---|---|
| Google/SOASTA research | Pages loading in 1s convert 3× better than pages loading in 5s |
| Akamai study | 1 second delay → 7% reduction in conversions |
| Walmart internal data | 1 second improvement → 2% increase in conversions |
| Google mobile research | 53% of mobile sessions abandoned after 3+ seconds load time |
| Deloitte research | 0.1s improvement → 8% increase in retail conversions |

For a business doing €100,000/month in e-commerce revenue, a 3-second improvement to page load could represent €6,000–21,000/month in additional revenue.

## Key Page Speed Metrics

| Metric | What it measures | Good threshold |
|---|---|---|
| **Time to First Byte (TTFB)** | Server response time | Under 800ms |
| **First Contentful Paint (FCP)** | First visual content appears | Under 1.8s |
| **Largest Contentful Paint (LCP)** | Main content loaded | Under 2.5s |
| **Total Blocking Time (TBT)** | Time page is unresponsive to input | Under 200ms |
| **Cumulative Layout Shift (CLS)** | Visual stability (elements jumping around) | Under 0.1 |
| **Time to Interactive (TTI)** | Page fully usable | Under 3.8s |

LCP and CLS are the Core Web Vitals metrics with the most direct SEO ranking impact.

## Common Page Speed Problems and Fixes

| Problem | Symptom | Fix |
|---|---|---|
| **Unoptimized images** | Large file sizes in waterfall | Convert to WebP, compress, set explicit dimensions |
| **Render-blocking JavaScript** | High TBT | Defer non-critical JS, move scripts to footer |
| **Third-party scripts** | Long waterfall with external domains | Audit and remove unnecessary analytics, chat widgets, pixels |
| **No browser caching** | Repeated visitors re-download all assets | Set cache-control headers, enable CDN |
| **No CDN** | Assets served from one geographic origin | Use Cloudflare, Fastly, or AWS CloudFront |
| **Large CSS files** | Slow FCP | Remove unused CSS (PurgeCSS), minify, inline critical CSS |
| **Slow server response** | High TTFB | Upgrade hosting, enable server-side caching |
| **Web fonts** | Text invisible until fonts load | Preload fonts, use font-display: swap |

## Testing Page Speed

**Google PageSpeed Insights** ([pagespeed.web.dev](https://pagespeed.web.dev/)) — Uses real-world Chrome User Experience Report (CrUX) data. The most relevant score for SEO decisions.

**Google Lighthouse** — Available in Chrome DevTools (F12 → Lighthouse). Lab-based testing that provides actionable diagnostics.

**WebPageTest** ([webpagetest.org](https://www.webpagetest.org/)) — Advanced waterfall analysis, filmstrip view, test from multiple locations.

**GTmetrix** — Combines Lighthouse + additional metrics, easy visual reports.

**Key testing note:** Always test on mobile. Desktop scores are almost always better — but mobile represents 60%+ of web traffic, and mobile performance is weighted more heavily in Google's ranking signals.

## Page Speed as a CRO Quick Win

Unlike most CRO changes, page speed improvements are:
- **No-test-required** — every visitor benefits from faster load times
- **Permanent** — the improvement applies to all future traffic
- **Compounding** — faster pages also benefit SEO rankings, increasing future traffic

Page speed improvements are typically in the Phase 1 "fix first, test second" category of CRO work. A page load over 4 seconds on mobile is fixed before any A/B tests are run on that page.
