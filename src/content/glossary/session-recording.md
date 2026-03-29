---
term: "Session Recording"
shortDefinition: "A tool that records video replays of real user sessions — showing clicks, scrolls, and rage clicks to reveal why visitors aren't converting."
category: "Analytics"
difficulty: "beginner"
relatedTerms: ["heatmap", "funnel-optimization", "bounce-rate", "ab-testing", "conversion-rate"]
publishDate: "2026-03-21"
updatedDate: "2026-03-29"
faqs:
  - question: "What is a session recording tool and how does it work?"
    answer: "Session recording tools (Hotjar, Microsoft Clarity, FullStory, LogRocket) capture anonymised video replays of real user sessions on your website. They record mouse movements, clicks, scrolls, form interactions, and navigation paths without capturing personal data. You watch replays to understand how actual users experience your site — where they get confused, what they click expecting to be a link, where they rage-click, and where they abandon. It's qualitative data that explains the 'why' behind quantitative metrics like bounce rate and exit rate."
  - question: "What should you look for in session recordings?"
    answer: "The highest-value signals in session recordings: (1) rage clicks — repeated fast clicks on a non-clickable element, indicating frustration and a broken expectation, (2) dead clicks — clicks on elements that don't respond, often meaning users expect something to be interactive, (3) u-turns — users scrolling down then immediately back up, suggesting they missed key information, (4) form abandonment — where in a form users stop typing, (5) scroll depth — how far users get before leaving, (6) confusing navigation — users visiting multiple pages in a loop without finding what they want."
  - question: "How many session recordings do you need to watch?"
    answer: "You don't need to watch hundreds. In usability research, 5 users typically reveal 85% of usability problems (Nielsen's law). For session recordings, watching 20–30 sessions of a specific page (e.g., your checkout page) is usually enough to identify recurring patterns. Focus on sessions from your target audience — filter by new visitors, mobile users, or users from specific traffic sources. The goal is to identify patterns, not watch every recording."
  - question: "Are session recordings GDPR compliant?"
    answer: "Session recording tools can be GDPR compliant when configured correctly. All major tools (Hotjar, Clarity, FullStory) automatically mask input fields, passwords, and sensitive text. You must: (1) disclose session recording in your privacy policy, (2) obtain consent via a cookie banner before recording begins, (3) ensure the tool is configured to exclude personally identifiable information (PII). Microsoft Clarity is fully GDPR compliant with default settings. Hotjar requires consent mode configuration."
  - question: "What is the difference between session recording and heatmaps?"
    answer: "Session recordings show individual user journeys in real time — you watch one user's complete session as a video replay. Heatmaps aggregate data from thousands of sessions into a visual summary — click heatmaps show where most users click, scroll heatmaps show how far down the page most users scroll. Use heatmaps first to identify patterns (e.g., most users don't scroll below the fold), then use session recordings to understand why (watch sessions of users who bounced at the fold to see what they did)."
  - question: "What's the best free session recording tool?"
    answer: "Microsoft Clarity is the best free session recording tool — unlimited recordings, no session caps, automatic rage-click and dead-click detection, built-in heatmaps, and GA4 integration at no cost. Hotjar's free plan limits you to 35 daily sessions, which is insufficient for most CRO research. Clarity's only limitation is that recordings are stored for 30 days. For advanced analysis (custom events, funnels within recordings, API access), FullStory or LogRocket are worth the investment."
---

**Session recording** (also called session replay) is a qualitative analytics technique that captures video-like recordings of real user sessions on your website — showing mouse movements, clicks, scrolls, form interactions, and navigation paths exactly as they happened.

Where quantitative tools (Google Analytics, GA4) tell you *what* visitors do in aggregate, session recordings show you *how* and *why* individual users behave — making them one of the most powerful diagnostic tools in CRO research.

## What Session Recordings Capture

| Interaction type | What it reveals |
|---|---|
| Mouse movements | Where attention goes; areas of hovering and uncertainty |
| Clicks | What users try to interact with; broken expectations |
| Scroll depth | How far users read before abandoning |
| Form field interactions | Where in a form abandonment happens |
| Page navigation | Path through the site; looping behavior |
| Device & browser | Technical issues affecting specific environments |
| Rage clicks | Repeated frustrated clicking on non-responsive elements |
| Dead clicks | Clicks on static elements users expect to be interactive |
| U-turns | Scroll down then immediately back up — missed content |

## High-Value Signals to Identify

**Rage clicks** — A user clicks the same element 3–5+ times rapidly. Classic signal of frustration: they expected something to happen and it didn't. Common causes: non-clickable elements that look like buttons, broken JavaScript, or slow-loading pages that appear unresponsive. Every rage click is a conversion opportunity destroyed.

**Dead clicks** — Clicks on static images, text, or decorative elements that users apparently expect to be links or navigation. These reveal where users are looking for more information or trying to navigate further into the site.

**U-turns** — User scrolls 60% down a page, then immediately scrolls back to the top. Often means they missed something critical, are re-reading the value proposition before deciding, or couldn't find the information they needed and are returning to the navigation.

**Form abandonment** — Watch exactly where users stop in multi-field forms. Did they abandon on the phone number field? (Too much friction.) The company size dropdown? (Confusing options.) A specific validation error? (UX bug.) Each drop-off point maps directly to a testable hypothesis.

**Disoriented navigation** — Users visiting 4–5 pages in rapid succession without finding what they want, then bouncing. This signals a navigation or information architecture problem, not a conversion copy problem.

## Popular Session Recording Tools

| Tool | Best for | Free tier | Key features |
|---|---|---|---|
| **Microsoft Clarity** | All sites; free tier | Unlimited recordings | Rage/dead click auto-detection, GA4 integration, heatmaps |
| **Hotjar** | SMBs; heatmaps + recordings together | 35 sessions/day | Surveys, funnels, recordings in one tool |
| **FullStory** | Enterprise; data analysis | 1,000 sessions/month | Custom events, DX data, API |
| **LogRocket** | SaaS / web apps | 1,000 sessions/month | Console logs, network activity, error tracking |
| **Smartlook** | Mobile apps + web | 3,000 sessions/month | Mobile SDK, funnels with recordings |

For a detailed comparison including privacy features, pricing, and CRO-specific capabilities, see [Hotjar Alternatives](/blog/hotjar-alternatives/).

Microsoft Clarity is the obvious starting point — completely free with no session caps, automatic behavioral signal detection, and direct GA4 integration.

## How to Use Session Recordings in a CRO Programme

The mistake most teams make: watching random recordings with no structure. A structured approach extracts 10× more value:

**Step 1: Identify high-exit pages.** In GA4, find pages with the highest exit rates or lowest conversion rates. These are your recording targets.

**Step 2: Filter recordings for those pages.** Don't watch random sessions — filter to the specific page where the problem occurs.

**Step 3: Segment the recordings.** Separate new visitors from returning; mobile from desktop; paid traffic from organic. Mobile sessions frequently show problems invisible on desktop.

**Step 4: Watch 20–30 sessions with a structured observation template.** Note: where did they pause? What did they click? Where did they stop scrolling? Tag each observation.

**Step 5: Look for patterns, not outliers.** One user who scrolled to the footer means nothing. Eight users who raged-clicked the same CTA button is a hypothesis.

**Step 6: Form specific hypotheses.** "Users are abandoning checkout because the shipping cost appears too late in the flow" — specific, testable, actionable.

**Step 7: Prioritize by frequency × impact.** A rage click happening in 30% of sessions on your highest-traffic page is priority one.

**Step 8: Test your hypothesis** with an A/B test.

## Session Recordings in the CRO Research Stack

Session recordings sit in the qualitative research layer. They explain *why* — but they don't prove statistical significance on their own. Use them alongside:

- **Heatmaps** ([heatmap](/cro-glossary/heatmap/)) — aggregate click and scroll patterns to identify where to focus recording analysis
- **Funnel analysis** ([funnel optimization](/cro-glossary/funnel-optimization/)) — identify which steps have highest drop-off rates before diving into recordings
- **Voice of customer surveys** — understand what visitors wanted but didn't find; see [Voice of Customer Research](/blog/voice-of-customer-research/)
- **A/B testing** — validate the hypothesis your recordings generated

The qualitative insight from session recordings generates the hypothesis; the A/B test proves whether the fix works. Neither is complete without the other.

For a full CRO research framework, see [What Is Conversion Rate Optimization?](/blog/what-is-conversion-rate-optimization/).
