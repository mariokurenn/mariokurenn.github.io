---
term: "Session Recording"
shortDefinition: "A qualitative analytics tool that captures video replays of real user sessions — showing mouse movements, clicks, scrolls, and rage clicks to reveal conversion blockers."
category: "Analytics"
difficulty: "beginner"
relatedTerms: ["heatmap", "funnel-optimization", "bounce-rate", "ab-testing", "conversion-rate"]
publishDate: "2026-03-21"
faqs:
  - question: "What is a session recording tool and how does it work?"
    answer: "Session recording tools (Hotjar, Microsoft Clarity, FullStory, LogRocket) capture anonymised video replays of real user sessions on your website. They record mouse movements, clicks, scrolls, form interactions, and navigation paths without capturing personal data. You watch replays to understand how actual users experience your site — where they get confused, what they click expecting to be a link, where they rage-click, and where they abandon. It's qualitative data that explains the 'why' behind quantitative metrics like bounce rate and exit rate."
  - question: "What should you look for in session recordings?"
    answer: "The highest-value signals in session recordings: (1) rage clicks — repeated fast clicks on a non-clickable element, indicating frustration and a broken expectation, (2) dead clicks — clicks on elements that don't respond, often meaning users expect something to be interactive, (3) u-turns — users scrolling down then immediately back up, suggesting they missed key information, (4) form abandonment — where in a form users stop typing, (5) scroll depth — how far users get before leaving, (6) confusing navigation — users visiting multiple pages in a loop without finding what they want."
  - question: "How many session recordings do you need to watch?"
    answer: "You don't need to watch hundreds. In usability research, 5 users typically reveal 85% of usability problems (Nielsen's law). For session recordings, watching 20–30 sessions of a specific page (e.g., your checkout page) is usually enough to identify recurring patterns. Focus on sessions from your target audience — filter by new visitors, mobile users, or users from specific traffic sources. The goal is to identify patterns, not watch every recording."
---

**Session recording** (also called session replay) is a qualitative analytics technique that captures video-like recordings of real user sessions on your website — showing mouse movements, clicks, scrolls, form interactions, and navigation paths exactly as they happened.

Where quantitative tools (Google Analytics) tell you *what* visitors do, session recordings show you *how* and *why* — making them one of the most powerful diagnostic tools in CRO research.

## What Session Recordings Capture

| Interaction | What It Reveals |
|------------|----------------|
| Mouse movements | Where attention goes, areas of confusion |
| Clicks | What users try to interact with |
| Scroll depth | How far users read before abandoning |
| Form field interactions | Where form abandonment happens |
| Page navigation | The path users take through your site |
| Device & browser | Technical issues affecting specific devices |

## High-Value Signals to Look For

**Rage clicks** — A user clicks the same element 3–5+ times rapidly. Classic signal of frustration: they expected something to happen and it didn't. Common causes: non-clickable elements that look interactive, broken buttons, or slow-loading pages.

**Dead clicks** — Clicks on static elements (images, text) that users apparently expect to be links or buttons. These reveal where users are looking for more information or trying to navigate.

**U-turns** — User scrolls halfway down a page, then immediately scrolls back to the top. Often means they missed something important, or they're trying to re-read the value proposition.

**Form abandonment** — Watch where users stop typing in a form. Did they abandon on the phone number field? The company size dropdown? This directly informs form optimisation.

## Popular Session Recording Tools

| Tool | Best For | Pricing |
|------|----------|---------|
| **Microsoft Clarity** | Free, unlimited recordings | Free |
| **Hotjar** | SMBs, heatmaps included | Free–€99/mo |
| **FullStory** | Enterprise, data analysis | Custom |
| **LogRocket** | SaaS/app session capture | Free–custom |

Microsoft Clarity is the obvious starting point — completely free with unlimited recordings.

## How to Use Session Recordings in CRO

1. **Identify high-exit pages** in Google Analytics
2. **Filter recordings** for those specific pages
3. **Watch 20–30 sessions** with a structured observation template
4. **Tag patterns** — label what you see (confusion, rage click, abandonment)
5. **Form hypotheses** — "Users are abandoning checkout because the shipping cost appears too late"
6. **Test your hypothesis** with an A/B test

Session recordings are most powerful in combination with [heatmaps](/cro-glossary/heatmap/) and [funnel analysis](/cro-glossary/funnel-optimization/). Together, they form the qualitative research layer of any serious [CRO programme](/services/cro-audit/).
