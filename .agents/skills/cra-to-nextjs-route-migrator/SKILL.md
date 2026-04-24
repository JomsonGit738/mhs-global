---

name: cra-to-nextjs-route-migrator

description: Use this skill when migrating one route or page from a Create React App React Router app to a Next.js App Router page. This skill should migrate incrementally, preserve UI and content, replace React Router patterns with Next.js patterns, add route-level SEO metadata, and validate the result. Do not use this skill for full one-shot rewrites.

---



\# CRA to Next.js Route Migrator Skill



You are migrating one route at a time from a Create React App React Router application to a Next.js App Router application.



Do not perform a full-app rewrite unless the user explicitly asks.



\## Core rule



Migrate incrementally.



Your job is to convert one selected route, page, or route group safely while preserving the existing UI, content, and behavior as much as possible.



\## Before editing



Inspect:



1\. The current route definition in `src/App.tsx`

2\. The current page component in `src/pages`

3\. Components imported by that page

4\. CSS files used by that page or its components

5\. Assets/images used by that page

6\. Navigation links pointing to or from that route

7\. SEO content available in the current page and `public/index.html`

8\. Any browser-only behavior, state, effects, forms, sliders, or event handlers



Then summarize:



\- current route

\- target Next.js route

\- files involved

\- likely Server Components

\- components requiring `"use client"`

\- SEO metadata needed

\- risks before implementation



\## Target Next.js conventions



Use the App Router.



Map routes like this:



\- `/` -> `app/page.tsx`

\- `/about` -> `app/about/page.tsx`

\- `/services` -> `app/services/page.tsx`

\- `/services/example` -> `app/services/example/page.tsx`

\- dynamic routes -> `app/\[slug]/page.tsx` or nested dynamic segments as appropriate



Use:



\- `app/layout.tsx` for shared layout

\- `page.tsx` for route content

\- `next/link` for internal links

\- `next/image` for meaningful images when appropriate

\- `metadata` or `generateMetadata` for SEO

\- Server Components by default

\- `"use client"` only for components with state, effects, browser APIs, event handlers, sliders, forms, or DOM interaction



Do not use:



\- `react-router-dom` in migrated Next.js routes

\- `BrowserRouter`

\- `Routes`

\- `Route`

\- CRA-only APIs

\- `next/head` in App Router unless there is a specific reason

\- Client Components by default



\## SEO requirements



For the migrated route, add or recommend:



\- unique title

\- meta description

\- canonical URL

\- Open Graph title

\- Open Graph description

\- Open Graph URL

\- Open Graph type

\- relevant image if available

\- Twitter/X card if useful

\- structured data if appropriate

\- one clear H1

\- logical heading hierarchy

\- descriptive internal links

\- image alt text



Never keyword-stuff.

Never invent fake claims.

Use page content and business context already present in the repo.



\## Performance requirements



During migration, check:



\- whether the page can be statically rendered

\- whether components can remain Server Components

\- whether client JavaScript can be reduced

\- whether images should use `next/image`

\- whether fonts should use `next/font`

\- whether Bootstrap JavaScript is truly needed

\- whether carousel/slider code creates client-side cost

\- whether large dependencies are unnecessary

\- whether CSS can be preserved without global pollution



Do not over-optimize before the page works.



\## Accessibility requirements



Check:



\- semantic HTML

\- exactly one useful H1 unless there is a strong reason

\- proper button/link usage

\- keyboard accessibility for interactive elements

\- alt text for meaningful images

\- empty alt for decorative images

\- visible focus behavior

\- labels for forms

\- ARIA only when needed



\## Implementation style



When editing:



1\. Make the smallest safe migration for the selected route.

2\. Preserve visual design unless asked to improve it.

3\. Preserve existing content unless SEO improvement requires clearer wording.

4\. Keep components readable.

5\. Avoid unrelated refactors.

6\. Do not introduce new dependencies without explanation.

7\. Prefer adapting existing components over rewriting from scratch.

8\. Clearly mark components that need `"use client"` and explain why.



\## Validation



After migration, run or recommend:



\- npm install if dependencies changed

\- npm run lint

\- npm run build



Also verify:



\- the route exists in the expected App Router path

\- internal links use `next/link`

\- metadata exists

\- images render

\- layout still works

\- responsive behavior is preserved

\- no accidental CRA router dependency remains in the migrated route



\## Output format



Use this format:



\# Route Migration Summary



\## Route migrated



State the old CRA route and new Next.js route.



\## Files changed



List files changed and why.



\## Server/client component decisions



Explain what stayed server-side and what needed `"use client"`.



\## SEO added



List metadata and on-page SEO improvements.



\## Performance notes



Mention any important performance changes or risks.



\## Accessibility notes



Mention accessibility changes or risks.



\## Validation



List commands run and results.



\## Remaining follow-ups



List only concrete next steps.

