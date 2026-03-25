---
title: "Bounce Rate vs Exit Rate: What's the Difference and Why It Matters"
seoTitle: "Bounce Rate vs Exit Rate: Key Differences [2026]"
description: "Bounce rate and exit rate measure different things. Confusing them leads to wrong diagnoses and wasted effort. Here's what each metric actually tells you."
publishDate: 2026-03-25
updatedDate: 2026-03-25
author: "Mario Kuren"
image: "/images/blog/bounce-rate-vs-exit-rate.webp"
imageHero: "/images/blog/bounce-rate-vs-exit-rate.webp"
imageAlt: "Two contrasting user session paths illustrating bounce rate versus exit rate"
category: "CRO Strategy"
tags: ["bounce rate", "exit rate", "analytics", "conversion metrics", "google analytics"]
faqs:
  - question: "What is the difference between bounce rate and exit rate?"
    answer: "Bounce rate measures single-page sessions — visitors who land on a page and leave without viewing any other page on your site. Exit rate measures the percentage of sessions that ended on a specific page, regardless of how many pages were viewed before. A page can have a high exit rate but zero bounce rate if all exits come from multi-page sessions. A page can have a high bounce rate but a low exit rate if it receives only a small fraction of total traffic."
  - question: "What is a high bounce rate?"
    answer: "Bounce rate interpretation depends on the page type and traffic source. Blog posts and content pages typically have bounce rates of 65–90% — this is normal because users read the article and leave. Landing pages should have bounce rates below 60%. Homepages typically sit between 40–60%. Product pages in e-commerce should be below 50%. A 'high' bounce rate is only a problem if the page is supposed to drive visitors deeper into the site — for a blog post, it's expected."
  - question: "What is a good exit rate?"
    answer: "Like bounce rate, exit rate depends on the page's role. Confirmation and thank-you pages should have near-100% exit rates — the session is complete. Blog posts: 60–80% exit rate is normal. For funnel pages — product pages, pricing pages, checkout steps — an exit rate above 40–50% warrants investigation. The key question: is this page supposed to be where sessions end? If yes, high exit rate is fine. If no, investigate."
  - question: "Which is more important: bounce rate or exit rate?"
    answer: "Exit rate is more actionable for conversion optimisation. It tells you specifically where sessions end in your funnel, which lets you identify the precise drop-off points to fix. Bounce rate is more useful for diagnosing traffic quality and page relevance — a high bounce rate on a paid traffic landing page suggests a message mismatch between your ad and your page. For CRO purposes, prioritise exit rate analysis on your key conversion pages."
---

Your checkout has a 68% exit rate. Your homepage has a 72% bounce rate. Are these problems? Do they need fixing? Are they even measuring the same thing?

Most analytics dashboards show both metrics, and most marketers treat them as interchangeable. They're not. Using them interchangeably leads to wrong diagnoses, wasted A/B testing budget, and optimisation work on pages that don't actually have a problem.

Here's exactly what each metric measures, how to tell when it signals a real problem, and what to do about it.

## What Is Bounce Rate?

**Bounce rate** is the percentage of sessions in which a visitor views only one page and leaves without interacting further.

A "bounce" is a single-page session. The visitor arrives on a page, reads it (or doesn't), and leaves — without clicking any links, visiting any other pages, or triggering any events on your site.

**Formula:**
> Bounce rate = (Single-page sessions ÷ Total sessions) × 100

**Example:** 1,000 visitors arrive on your homepage. 420 leave without visiting any other page. Bounce rate = 42%.

### What Bounce Rate Does NOT Measure

Bounce rate does not measure whether a visitor read your content, how long they spent on the page, or whether they found what they were looking for. A visitor who spends 8 minutes reading a blog post and then closes the tab is counted as a bounce — even though they got exactly what they came for.

This is why a 90% bounce rate on a blog post is not necessarily a problem. The visitor came to read the article. They read it. Mission accomplished.

## What Is Exit Rate?

**Exit rate** is the percentage of sessions that ended on a specific page, regardless of how many pages were viewed in that session.

Every page has an exit rate. Someone has to be the last page a visitor sees before they leave — exit rate tells you which pages that is, and how often.

**Formula:**
> Exit rate = (Exits from page ÷ Total pageviews of that page) × 100

**Example:** Your checkout page receives 2,000 pageviews. 860 sessions end on that page. Exit rate = 43%.

Crucially: those 860 exits could include visitors who bounced directly to checkout (single-page sessions) AND visitors who browsed 5 pages before abandoning at checkout. Exit rate captures both.

## The Key Difference, Explained Simply

| | Bounce Rate | Exit Rate |
|---|---|---|
| What it counts | Sessions with only 1 page viewed | Sessions that ended on this specific page |
| Who it counts | Only people who arrived AND left from this page | Everyone who left from this page |
| What it measures | Engagement failure at the entry point | Drop-off at a specific point in the journey |
| When it's a problem | On pages meant to drive clicks (landing pages, homepages) | On pages that shouldn't be session-ending (checkout, pricing) |

**The clearest illustration:**

Imagine a visitor who arrives on your homepage, clicks through to your pricing page, and then leaves from the pricing page.

- **Bounce rate contribution:** Zero. This was a multi-page session.
- **Exit rate contribution:** This visitor contributes to the exit rate of your pricing page.

Now imagine a visitor who arrives directly on your pricing page and immediately leaves.

- **Bounce rate contribution:** This is a bounce from your pricing page.
- **Exit rate contribution:** This visitor also contributes to the exit rate of your pricing page.

Exit rate catches both types. Bounce rate only catches the second.

## When Is Bounce Rate a Problem?

High bounce rate is a problem specifically when the page is designed to drive visitors further into your site.

**High bounce rate IS a problem on:**
- Paid traffic landing pages (you paid to get them there — why are they leaving immediately?)
- Homepages where the goal is to route visitors to product/service pages
- Product pages in e-commerce (visitor should be adding to cart)
- Any page where a high-intent visitor should be taking a next step

**High bounce rate is NOT a problem on:**
- Blog posts and articles (reading and leaving is expected)
- Glossary and definition pages (visitor got their answer)
- FAQ pages (same)
- Pages that answer a specific question and have no logical next step

**Typical bounce rate ranges by page type:**

| Page Type | Normal Range | Problem Threshold |
|---|---|---|
| Blog post / article | 65–90% | >95% (suggests content mismatch) |
| Homepage | 35–55% | >65% |
| Landing page (paid) | 40–60% | >70% |
| E-commerce product page | 30–50% | >60% |
| Pricing page | 40–65% | >75% |
| Contact page | 35–55% | >65% |

## When Is Exit Rate a Problem?

Exit rate is a problem when a page has a high exit rate AND it shouldn't be a session-ending page.

**High exit rate IS expected on:**
- Order confirmation / thank-you pages (100% exit is correct — the job is done)
- Contact form success pages
- Unsubscribe confirmation pages
- Content-only pages with no intended next step

**High exit rate IS a problem on:**
- Checkout steps (especially if not the final step)
- Shopping cart page
- Pricing page
- Demo request page
- Any page in a defined conversion funnel

**Exit rate benchmarks for funnel pages:**

| Funnel Page | Acceptable Exit Rate | Investigate If |
|---|---|---|
| Product page → add to cart | < 40% | > 50% |
| Cart page → checkout | < 30% | > 45% |
| Checkout step 1 → step 2 | < 25% | > 40% |
| Pricing page → demo/contact | < 45% | > 60% |

## How to Diagnose a High Bounce Rate

If a page that should drive clicks has a high bounce rate, the most likely causes:

**1. Message mismatch**
The headline or content of the page doesn't match what the visitor expected based on the link or ad that brought them. They arrived, scanned, and left because it wasn't what they came for. Fix: align your headline with the traffic source. See [Landing Page Best Practices](/blog/landing-page-best-practices/) for the full message match framework.

**2. Slow page load**
Every 1-second delay increases bounce rate by approximately 8–12%. If mobile bounce rate is dramatically higher than desktop, page speed is the first thing to check.

**3. Poor mobile experience**
A page that looks fine on desktop can be unusable on mobile — tiny text, overlapping elements, CTAs that require precise tapping. Check your bounce rate segmented by device.

**4. No clear next step**
The visitor read the content but there's no obvious CTA or next link. They finished the page and had nowhere to go. Fix: add a clear next step relevant to what they just read.

## How to Diagnose a High Exit Rate

If a funnel page has a high exit rate:

**1. Unanswered objection**
Something on the page is raising a concern that isn't resolved. Common examples: a price that appears without context, a form that asks for sensitive information without explaining why, shipping costs that appear late in checkout.

**2. Unexpected friction**
A required form field that surprises the visitor, a mandatory account creation step, a payment method they don't have available.

**3. Missing information**
The visitor has a question your page doesn't answer. They exit to search for it — and often don't come back. Fix: use live chat data and survey responses to identify the most common pre-conversion questions and answer them on the page.

**4. Technical errors**
A broken form submit button, a payment processor that fails silently, an error message that appears without explanation. Check your session recordings on high-exit pages.

## How to Find These Metrics in Google Analytics 4

GA4 restructured where these metrics live compared to Universal Analytics. Here's exactly where to find them.

### Bounce Rate in GA4

Google Analytics 4 replaced traditional bounce rate with **engagement rate** as the primary metric, and added a redefined bounce rate as its inverse.

**GA4 bounce rate definition:** The percentage of sessions that were NOT engaged. A session is "engaged" if it lasted longer than 10 seconds, had a conversion event, or had 2+ pageviews. This is significantly different from UA's single-page-session definition.

**Where to find it:**
Reports → Acquisition → Traffic acquisition → Add secondary dimension or scroll right to find "Bounce rate" column (it may be hidden by default — click the column settings icon to add it).

For page-level bounce rate: Reports → Engagement → Pages and screens → Look for the "Bounce rate" column.

**Important:** GA4's bounce rate is not comparable to UA bounce rate. A UA bounce rate of 70% and a GA4 bounce rate of 70% measure different things. Don't compare across the two platforms.

### Exit Rate in GA4

GA4 doesn't surface exit rate as prominently as Universal Analytics did, but it's available:

**Where to find it:**
Reports → Engagement → Pages and screens

The "Exits" column shows the raw count of exits per page. To calculate exit rate manually:
> Exit rate = Exits ÷ Views (for that page) × 100

For funnel pages, use the **Funnel exploration** report in Explore instead:
Explore → Create new exploration → Funnel technique → Build your funnel steps → GA4 will show abandonment rate at each step (which is the equivalent of exit rate for your specific funnel).

### Segmenting by Device

Both metrics should always be reviewed segmented by device type. Mobile and desktop bounce rates for the same page can differ by 20–30 percentage points.

In GA4: Add "Device category" as a secondary dimension to any report, or create a comparison segment for mobile vs. desktop. The gaps between device types will show you where mobile-specific friction is driving exits.

For a detailed walkthrough of mobile-specific optimisation, see [Mobile CRO](/blog/mobile-conversion-rate-optimization/).

---

## Using Both Metrics Together

The most powerful analysis uses bounce rate and exit rate together to distinguish between two different problems:

**High bounce rate + high exit rate on the same page:**
The page is failing at the entry point — visitors are arriving and immediately leaving. The problem is likely message mismatch, slow load speed, or poor first impression.

**Low bounce rate + high exit rate on a funnel page:**
Visitors are engaging with the site but dropping off specifically at this page. The problem is something on this page — an unanswered objection, unexpected friction, or missing information.

**Low bounce rate + low exit rate:**
The page is working — visitors are engaging and moving forward. No urgent action needed.

For a full walkthrough of how to use analytics data to identify conversion problems, see [What Is CRO](/blog/what-is-conversion-rate-optimization/) and the [CRO Audit Checklist](/blog/cro-audit-checklist/).

Want us to audit your funnel and identify exactly where sessions are ending and why? [Book a free CRO audit](/contact/).
