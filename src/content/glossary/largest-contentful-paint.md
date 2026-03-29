---
term: "Largest Contentful Paint (LCP)"
shortDefinition: "A Core Web Vital that measures how long it takes for the main content of a page to load — the primary page speed metric for SEO and UX."
category: "Technical"
difficulty: "intermediate"
relatedTerms: ["core-web-vitals", "page-speed", "bounce-rate", "conversion-rate", "cumulative-layout-shift"]
publishDate: "2026-03-24"
updatedDate: "2026-03-29"
faqs:
  - question: "What is Largest Contentful Paint (LCP)?"
    answer: "Largest Contentful Paint (LCP) is a Core Web Vitals metric that measures the time from when a user first navigates to a page until the largest visible content element has fully loaded in the viewport. 'Largest content' is typically the hero image, the main H1 heading, or a large block of text. LCP is the most important page speed metric for user experience because it correlates most strongly with when visitors feel the page is 'ready.' Google uses LCP as a search ranking signal and the threshold for 'good' is under 2.5 seconds."
  - question: "What is a good LCP score?"
    answer: "Google defines LCP thresholds as: Good = under 2.5 seconds, Needs Improvement = 2.5–4.0 seconds, Poor = over 4.0 seconds. For competitive SEO, targeting under 2.0s on mobile is the practical goal. According to Google's CrUX 2024 data, the median mobile LCP across all web pages is approximately 4.2 seconds — meaning most pages are in the 'needs improvement' or 'poor' range. This represents significant opportunity: most pages can improve their LCP meaningfully with targeted optimizations."
  - question: "What causes slow LCP and how do I fix it?"
    answer: "The most common LCP causes and fixes: (1) Unoptimized hero image — convert to WebP format, compress to minimum quality for display size, serve via CDN, add fetchpriority='high'. (2) Render-blocking CSS/JS — defer non-critical JavaScript, inline critical CSS for above-fold content. (3) Slow server TTFB — upgrade hosting, enable caching, use a CDN. (4) No resource preloading — add preload hints for the LCP element and critical fonts. (5) Third-party blocking scripts — delay non-critical analytics, chat, and ad scripts until after page renders."
  - question: "What is the LCP element and how do I find it?"
    answer: "The LCP element is whichever visible content block is largest in the viewport at the time it finishes loading. On most landing pages, it's the hero image (most common), the H1 heading (if large and text-rendered), or a video poster image. To find it: run Google PageSpeed Insights on your URL and look for the 'LCP element' in the results — it shows exactly which element is being measured and its render time. Chrome DevTools → Performance tab → run a recording → look for the LCP marker in the timeline."
  - question: "How does LCP affect paid advertising ROI?"
    answer: "For paid traffic campaigns, LCP directly determines how many paid visitors see your actual offer. If LCP is 5 seconds on mobile, a significant percentage of paid visitors (research suggests 40–50% for load times over 3s) abandon before the main content renders — you pay for the click but get no chance to convert. For a campaign spending €10,000/month with 5s LCP, improving to 2s LCP could recover €4,000–5,000/month in effectively wasted clicks. This makes LCP optimization one of the highest-ROI technical interventions for any business running paid traffic."
  - question: "What is TTFB and how does it relate to LCP?"
    answer: "Time to First Byte (TTFB) is the time between the browser requesting a page and receiving the first byte of the response from the server. TTFB directly impacts LCP because LCP can't start rendering until the server responds. A TTFB of 2 seconds means LCP will be at least 2 seconds — before any asset downloading or rendering begins. Google recommends TTFB under 800ms for good LCP. The fixes: server-side caching (biggest impact), CDN edge caching, faster hosting infrastructure, and database query optimization for dynamic pages."
---

**Largest Contentful Paint (LCP)** is a [Core Web Vitals](/cro-glossary/core-web-vitals/) metric that measures the time from initial page navigation until the largest visible content element has fully loaded.

**LCP thresholds:**
- **Good:** Under 2.5 seconds
- **Needs Improvement:** 2.5–4.0 seconds
- **Poor:** Over 4.0 seconds

LCP is the primary page speed metric used by Google for search ranking and by UX researchers to measure perceived load speed — because it correlates most strongly with when a user feels the page is "ready."

## What LCP Actually Measures

LCP captures the render time of the largest content block visible in the viewport at page load. The element measured is typically:

- **Hero image** (most common on landing pages and homepages)
- **Large heading text** (H1 above the fold)
- **Full-width video poster image**
- **Background image with text overlay**

The browser continuously updates the LCP candidate as the page loads — whichever element is largest at the point it finishes loading becomes the final LCP.

## LCP and Conversion Rate

LCP is not just a SEO metric — it has direct conversion implications:

| LCP score | Relative bounce rate increase | Conversion impact |
|---|---|---|
| Under 1s | Baseline | Best performance |
| 1–2.5s | +32% bounce rate | Minor impact |
| 2.5–4s | +90% bounce rate | Significant impact |
| Over 4s | +123% bounce rate | Severe impact |

*Source: Google/SOASTA research on 11M mobile landing page sessions*

For paid traffic especially, slow LCP is expensive: you're paying for clicks that bounce immediately because the page took too long to show the hero image or headline.

## LCP Industry Benchmarks

| Industry | Median mobile LCP (2024) | % achieving 'Good' |
|----------|--------------------------|-------------------|
| Technology / SaaS | 3.1s | 40% |
| E-commerce | 3.8s | 28% |
| News & Publishing | 3.4s | 35% |
| Travel | 4.2s | 22% |
| Finance | 2.9s | 45% |

*Source: Google Chrome User Experience Report (CrUX) 2024*

Most industries are far from the 'good' threshold, representing significant opportunity.

## What Causes Poor LCP

### Unoptimized Hero Image (Most Common)
A 2MB JPG hero image on a 4G mobile connection takes 4–8 seconds to load. The hero image is almost always the LCP element — making it the single most important asset to optimize.

**Fixes:**
- Convert to WebP format (typically 30–50% smaller than JPG at same quality)
- Compress to the smallest file size that still looks good at display dimensions
- Add explicit width and height attributes to prevent layout shifts
- Add `fetchpriority="high"` to tell the browser to prioritize this image
- Serve from a CDN close to your users (reduces TTFB by 50–70%)

### Render-Blocking Resources
If the browser must download and process large CSS or JavaScript files before rendering, LCP is delayed even if the image itself is fast.

**Fixes:**
- Inline critical CSS (the styles needed for above-the-fold content)
- Defer non-critical JavaScript with `defer` or `async` attributes
- Remove unused CSS with tools like PurgeCSS

### Slow Server Response (TTFB)
Every millisecond of server response delay adds to LCP. TTFB over 800ms is a significant LCP problem.

**Fixes:**
- Use CDN for static assets (edge caching reduces TTFB dramatically)
- Enable page caching on the server
- Upgrade to faster hosting infrastructure

## Measuring LCP

**Google PageSpeed Insights** ([pagespeed.web.dev](https://pagespeed.web.dev/)) — Shows field data (real users) and lab data. The field data LCP is what Google uses for ranking.

**Chrome DevTools** → Lighthouse tab → Performance audit → Shows LCP element highlighted in the filmstrip view.

**Google Search Console** → Core Web Vitals report → Shows real-user LCP by page group.

## LCP as a CRO Priority

On high-traffic pages where LCP is above 4 seconds, fixing LCP is typically the highest-ROI CRO action available — no A/B testing required. A 3-second improvement to LCP on a checkout or landing page generates measurable conversion rate improvement that applies to every visitor immediately, without any design, copy, or testing work.

For the full performance optimization context, see [Core Web Vitals](/cro-glossary/core-web-vitals/) and [Page Speed](/cro-glossary/page-speed/). LCP fixes are included in every technical [CRO audit](/services/cro-audit/).
