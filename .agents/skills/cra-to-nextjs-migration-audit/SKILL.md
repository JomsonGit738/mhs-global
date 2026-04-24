---

name: cra-to-nextjs-migration-audit

description: Use this skill when auditing a Create React App project before migrating it to Next.js App Router. This skill should inspect routes, pages, components, assets, styles, SEO setup, dependencies, and migration risks. Do not use this skill for implementing the migration directly.

---



\# CRA to Next.js Migration Audit Skill



You are auditing a Create React App codebase before migration to Next.js App Router.



Your job is to produce a clear migration audit and route-by-route migration plan.



Do not edit files while using this skill unless the user explicitly asks.



\## Audit goals



Inspect the current app and identify:



1\. Current framework and package manager

2\. React version

3\. TypeScript usage

4\. Routing setup

5\. Current routes

6\. Current pages

7\. Shared layout components

8\. Navigation components

9\. Reusable UI components

10\. Asset usage

11\. Styling approach

12\. SEO setup

13\. Performance risks

14\. Accessibility risks

15\. Dependencies that may need replacement or removal

16\. Migration risks

17\. Suggested migration order



\## Required files to inspect



Start with:



\- package.json

\- package-lock.json if present

\- src/index.tsx

\- src/App.tsx

\- public/index.html

\- public/robots.txt



Then inspect:



\- src/pages

\- src/components

\- src/styles

\- src/assets

\- src/data

\- src/types



If a folder does not exist, note that briefly and continue.



\## Route audit



For every current route, identify:



\- current path

\- current component/page

\- likely Next.js App Router path

\- whether it is mostly static or interactive

\- SEO priority: high, medium, or low

\- migration complexity: low, medium, or high

\- notes and risks



Use this table format:



| Current route | Current component | Next.js route | Page type | SEO priority | Complexity | Notes |

|---|---|---|---|---|---|---|



\## Component audit



Identify:



\- layout components

\- navigation components

\- page sections

\- reusable UI components

\- components likely to stay Server Components

\- components likely to need `"use client"`



Use this table format:



| Component | Current location | Role | Next.js recommendation | Client component needed? | Notes |

|---|---|---|---|---|---|



\## SEO audit



Inspect existing SEO in `public/index.html`.



Check for:



\- title

\- meta description

\- canonical

\- Open Graph tags

\- Twitter/X tags

\- favicon

\- manifest

\- robots

\- sitemap

\- structured data

\- headings in page components

\- image alt text patterns



Separate findings into:



1\. Existing SEO assets

2\. Missing SEO assets

3\. Route-level SEO opportunities

4\. Next.js metadata plan



\## Performance audit



Check for:



\- large dependencies

\- unused dependencies

\- image handling

\- font loading

\- Bootstrap JavaScript usage

\- client-only rendering risks

\- large components

\- unnecessary state/effects

\- carousel/slider performance risk

\- animation risk

\- bundle-size concerns



Give practical recommendations, not generic advice.



\## Accessibility audit



Check for:



\- semantic HTML

\- heading structure

\- button/link correctness

\- keyboard navigation risk

\- alt text

\- forms and labels

\- ARIA misuse

\- focus handling

\- color contrast risk



Do not claim accessibility is good unless inspected.



\## Migration plan



Produce an incremental plan.



Recommended order:



1\. prepare Next.js project structure

2\. migrate global styles and assets

3\. migrate shared layout

4\. migrate header/navigation/footer

5\. migrate highest-value static SEO pages

6\. migrate remaining static pages

7\. migrate interactive components

8\. replace React Router patterns

9\. add metadata per route

10\. add sitemap and robots

11\. optimize images/fonts

12\. validate build, lint, routes, SEO, performance, and accessibility



\## Output format



Use this structure:



\# CRA to Next.js Migration Audit



\## Executive summary



Briefly explain current state and target state.



\## Current stack



List confirmed technologies.



\## Route migration map



Table required.



\## Component migration map



Table required.



\## SEO findings



Include existing, missing, and recommended Next.js metadata plan.



\## Performance findings



Rank the most important risks.



\## Accessibility findings



Rank the most important risks.



\## Dependency review



Mention dependencies that may need replacement, removal, or special handling during migration.



\## Migration risks



List concrete risks specific to this repo.



\## Recommended migration order



Give a numbered, practical sequence.



\## Questions before implementation



Ask only questions that truly block implementation.

Do not ask generic questions.

