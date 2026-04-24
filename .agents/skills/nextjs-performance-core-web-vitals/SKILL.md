---

name: nextjs-performance-core-web-vitals

description: Use this skill when auditing or improving frontend performance and Core Web Vitals for React or Next.js pages. This skill focuses on LCP, CLS, INP, bundle size, hydration cost, image optimization, font loading, rendering strategy, unnecessary client JavaScript, and validation. Do not use this skill for cosmetic-only UI changes.

---



\# Next.js Performance and Core Web Vitals Skill



You are auditing or improving frontend performance for a React or Next.js website.



Use this skill for:

\- Core Web Vitals review

\- LCP improvement

\- CLS reduction

\- INP improvement

\- bundle-size review

\- image optimization

\- font optimization

\- hydration-cost reduction

\- client/server component decisions

\- rendering strategy review

\- dependency impact review



Do not use this skill for:

\- cosmetic-only design changes

\- unrelated refactors

\- premature optimization

\- adding performance tools before inspecting the app

\- hiding broken behavior for the sake of better scores



\## Core rule



Make performance better by reducing unnecessary work first.



Prefer:

\- less JavaScript

\- better rendering strategy

\- optimized images

\- optimized fonts

\- fewer dependencies

\- fewer client components

\- simpler components

\- better caching



Avoid:

\- adding libraries to solve problems caused by too many libraries

\- converting everything to client components

\- optimizing code that is not on a critical route

\- making visual or content changes without permission



\## Before changing code



Inspect:



1\. The route or page being analyzed

2\. Whether the page is CRA, React SPA, or Next.js

3\. Components imported by the page

4\. Client-side state/effects

5\. Browser-only APIs

6\. Image usage

7\. Font usage

8\. CSS imports

9\. third-party scripts

10\. animation/slider/carousel usage

11\. large dependencies

12\. build scripts and validation commands



Then summarize:

\- likely LCP element

\- CLS risks

\- INP risks

\- hydration or client-JS risks

\- image/font risks

\- dependency risks

\- quick wins

\- risky changes to avoid



\## Next.js-specific guidance



For Next.js App Router:



\- Prefer Server Components by default.

\- Add `"use client"` only where state, effects, event handlers, browser APIs, refs, or DOM interaction are required.

\- Keep interactive islands small.

\- Use `next/image` for meaningful images when appropriate.

\- Use `next/font` for font loading when appropriate.

\- Prefer static rendering for mostly static marketing pages.

\- Avoid unnecessary dynamic rendering.

\- Avoid importing large client libraries into route-level components.

\- Keep layout components lightweight.

\- Avoid loading Bootstrap JavaScript globally unless it is truly needed.



\## CRA-specific guidance



For current CRA pages:



\- Identify what can be improved before migration.

\- Do not pretend CRA has Server Components or App Router behavior.

\- Identify what will improve naturally after moving to Next.js.

\- Avoid major CRA-only performance rewrites if migration is planned.

\- Prefer migration-aware recommendations.



\## LCP checklist



Check:



\- main hero image or hero text

\- image dimensions

\- image format

\- priority/loading strategy

\- render-blocking CSS

\- font loading

\- above-the-fold JavaScript

\- unnecessary client-side rendering

\- large hero sliders/carousels



Recommendations should be specific to the inspected page.



\## CLS checklist



Check:



\- images without dimensions

\- late-loading fonts

\- injected banners

\- carousels/sliders

\- layout shifts from dynamic content

\- missing width/height or aspect-ratio

\- Bootstrap layout behavior

\- loading states that change size



\## INP checklist



Check:



\- heavy event handlers

\- unnecessary re-renders

\- large client bundles

\- blocking JavaScript

\- sliders/carousels

\- form handlers

\- expensive filtering/sorting

\- layout thrashing

\- unnecessary effects



\## Bundle and dependency review



Check dependencies for:



\- large UI libraries

\- duplicate libraries

\- unused packages

\- packages replaceable by platform or Next.js features

\- packages that should remain server-only

\- packages imported into client components unnecessarily



Do not recommend removing a dependency unless there is evidence it is unused or replaceable.



\## Image optimization



Check:



\- meaningful images should have useful alt text

\- decorative images should use empty alt

\- large images should be compressed

\- responsive sizing should be correct

\- Next.js migration should consider `next/image`

\- above-the-fold important images may need priority handling

\- avoid lazy-loading the likely LCP image



\## Font optimization



Check:



\- Google Fonts loaded from HTML or CSS

\- font preconnect/preload behavior

\- layout shift from font swap

\- possible `next/font` migration

\- unnecessary font weights/styles



\## Output format



Use this format:



\# Performance and Core Web Vitals Review



\## Page or area analyzed



State the route/page/component.



\## Current performance picture



Summarize the important findings.



\## LCP findings



List likely issues and recommended fixes.



\## CLS findings



List likely issues and recommended fixes.



\## INP findings



List likely issues and recommended fixes.



\## Bundle and dependency notes



Mention dependency or client-JS concerns.



\## Image and font notes



Mention concrete image/font improvements.



\## Recommended fixes



Rank fixes:

1\. High impact / low risk

2\. High impact / medium risk

3\. Lower priority



\## Validation



Recommend or run:

\- npm run build

\- npm run lint

\- Lighthouse

\- PageSpeed Insights

\- WebPageTest if useful



\## Risks



List anything that could break layout, UX, SEO, or behavior.

