---
term: "Cumulative Layout Shift (CLS)"
shortDefinition: "A Core Web Vitals metric measuring visual stability — how much page elements unexpectedly move around while loading, frustrating visitors and causing misclicks."
category: "Technical"
difficulty: "intermediate"
relatedTerms: ["core-web-vitals", "page-speed", "bounce-rate", "above-the-fold"]
publishDate: "2026-03-24"
faqs:
  - question: "What is Cumulative Layout Shift (CLS)?"
    answer: "Cumulative Layout Shift (CLS) is a Core Web Vitals metric that measures visual instability — how much visible page content unexpectedly moves while the page loads. CLS is expressed as a score from 0 (perfectly stable) to any positive number (higher = more shifting). A score under 0.1 is good. Common CLS causes: images without defined dimensions causing content to jump when the image loads, ads that insert above existing content, web fonts that cause text to reflow when they load."
  - question: "How does layout shift affect conversion rate?"
    answer: "Layout shift directly causes misclicks — a visitor about to click a CTA button has the button shift just as they tap, and they click an adjacent element instead (or nothing at all). On mobile this is particularly damaging because the tap target is smaller and the shift tends to be larger. Beyond misclicks, unstable layouts signal poor quality and reduce trust. Google research found CLS improvements correlate with lower session abandon rates, as users feel more confident interacting with stable pages."
  - question: "What causes high CLS and how do I fix it?"
    answer: "The most common CLS causes: (1) Images without width/height attributes — the browser doesn't reserve space until the image loads, causing content to jump. Fix: always set explicit dimensions on img tags. (2) Ads or embeds that load after content — inject ads with a fixed placeholder. (3) Web fonts causing text reflow (FOIT/FOUT) — use font-display: optional or preload fonts. (4) Dynamically injected content (cookie banners, chat widgets) — inject these elements with fixed-height containers. (5) CSS animations that affect layout properties — use transform and opacity instead."
---

**Cumulative Layout Shift (CLS)** is a [Core Web Vitals](/cro-glossary/core-web-vitals/) metric that measures the visual stability of a web page during loading — specifically, how much visible content unexpectedly shifts position.

**CLS thresholds:**
- **Good:** Under 0.1
- **Needs Improvement:** 0.1–0.25
- **Poor:** Over 0.25

CLS is scored as the sum of all unexpected layout shift scores — each individual shift contributes based on both the fraction of the viewport affected and the distance elements moved.

## Why CLS Matters for Conversion

Layout shifts are not just an annoyance — they directly cause conversion failures:

**The misclick problem:** A visitor is about to tap a "Add to Cart" button on mobile. As they tap, an ad loads above the button and shifts it 80px down. The visitor taps the product image instead. The cart was not added. The conversion was lost.

This scenario is common enough that Google included CLS as a ranking signal precisely because it correlates with poor user experience and higher session abandonment rates.

**Trust erosion:** Unstable pages that "jump around" signal low quality. Visitors subconsciously associate visual instability with unreliability — the same way a physical store with disorganized shelves signals unprofessionalism.

## Common CLS Causes

### Images Without Defined Dimensions
**The most common CLS cause.** When a browser encounters `<img src="hero.jpg">` without width and height attributes, it doesn't know how much space to reserve. When the image loads, it pushes all content below it down — a large, visible shift.

**Fix:** Always include explicit dimensions:
```html
<img src="hero.webp" width="1200" height="630" alt="...">
```

Or in CSS:
```css
img { aspect-ratio: 16/9; width: 100%; }
```

### Ads and Dynamically Injected Content
Third-party ads, cookie consent banners, and chat widgets often inject into the page after initial render — pushing existing content down.

**Fix:** Reserve space for dynamic content:
```css
.ad-slot { min-height: 250px; }
```

### Web Fonts (FOIT/FOUT)
Fonts that load late cause text to first render in a fallback font (different size) then reflow when the custom font loads — causing layout shift.

**Fix:** Preload the font and use `font-display: optional` or `font-display: swap` with careful fallback font sizing.

### CSS Animations Affecting Layout
Animating properties like `top`, `left`, `height`, or `width` triggers layout recalculation and CLS.

**Fix:** Use `transform` and `opacity` for animations — these don't trigger layout recalculation:
```css
/* Causes CLS */
.slide-in { animation: slideDown; } /* changes top: value */

/* No CLS */
.slide-in { animation: slideDown; } /* uses transform: translateY() */
```

## Measuring CLS

**Google PageSpeed Insights** — Reports field CLS (real user data) from CrUX and lab CLS from Lighthouse.

**Chrome DevTools → Performance tab** — Run a performance profile to see layout shifts highlighted in the timeline (marked in red/green bands).

**Chrome Extension: Web Vitals** — Shows real-time CLS score as you interact with any page.

**Google Search Console → Core Web Vitals** — Shows CLS data by page URL group across real users.

## CLS and Mobile

CLS issues are almost always more severe on mobile because:
- Viewport is smaller — a 50px shift is a larger percentage of the screen
- Mobile connections are slower — more assets load with delays between them
- Touch targets are smaller — shifted elements are harder to re-target

For any page where mobile represents a significant share of traffic (typically 50–70%+ for most sites), CLS on mobile should be your primary CLS focus.

For the full Core Web Vitals context, see [Core Web Vitals](/cro-glossary/core-web-vitals/) and [Page Speed](/cro-glossary/page-speed/).
