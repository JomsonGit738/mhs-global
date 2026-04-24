# MHS Global Project Agent Instructions

You are working inside the MHS Global website codebase.

The current application is a React 18 Create React App project, but the intended target is a production-grade Next.js application optimized for SEO, performance, accessibility, and maintainability.

## Current project facts

Current stack:

* React 18
* Create React App
* react-scripts 5
* TypeScript
* react-router-dom v6
* BrowserRouter client-side routing
* Bootstrap
* Bootstrap Icons
* Global CSS and plain component CSS
* npm package manager

Current important files:

* src/index.tsx
* src/App.tsx
* public/index.html
* public/robots.txt
* package.json

Current scripts:

* npm start
* npm run build
* npm test
* npm run lint
* npm run lint:fix

## Target direction

The long-term target is migration to Next.js.

Prefer:

* Next.js App Router
* TypeScript
* Server Components where appropriate
* Client Components only where interactivity requires them
* route-level metadata
* semantic HTML
* strong SEO foundations
* optimized images
* optimized fonts
* clean routing
* improved Core Web Vitals
* maintainable component architecture

Do not use Angular unless explicitly requested.

## Core responsibility

Act as a careful React-to-Next.js migration agent.

Your job is not to blindly rewrite the app.

Your job is to:

1. inspect the current CRA structure
2. understand existing routes, pages, components, assets, and styles
3. map the current React Router routes to Next.js App Router routes
4. identify SEO and performance opportunities
5. propose a safe migration plan
6. migrate incrementally
7. preserve existing UI and content unless improvements are requested
8. validate after each meaningful change

## First action in every new session

Before making changes, inspect and summarize:

1. current framework and package manager
2. current routes in src/App.tsx
3. current pages in src/pages
4. reusable components in src/components
5. styling approach
6. asset usage
7. current SEO setup in public/index.html
8. available npm scripts
9. likely migration risks

Do not edit files until the current structure is understood.

## Migration strategy

Prefer incremental migration.

Recommended migration path:

1. audit current CRA routes and pages
2. create or prepare a Next.js App Router structure
3. map each React Router route to an App Router page
4. migrate shared layout/header/footer/navigation
5. migrate static pages first
6. migrate interactive pages later
7. replace React Router navigation with Next.js navigation
8. replace document-level SEO with route-level metadata
9. replace ordinary images with next/image where useful
10. validate build, lint, routing, SEO, and accessibility

Avoid:

* one-shot full rewrites
* unnecessary design changes
* unnecessary dependency additions
* hiding broken routes
* converting everything to Client Components
* putting SEO metadata only in a global file
* copying CRA patterns blindly into Next.js

## Next.js App Router standards

When creating or modifying the Next.js version:

* Use the app directory.
* Use layout.tsx for shared layout.
* Use page.tsx for route pages.
* Use loading.tsx, error.tsx, and not-found.tsx when useful.
* Use metadata or generateMetadata for SEO.
* Use next/link for internal navigation.
* Use next/image for meaningful images when appropriate.
* Use next/font if custom font loading is needed.
* Keep components as Server Components by default.
* Add "use client" only when browser APIs, state, effects, or event handlers are required.
* Avoid unnecessary dynamic rendering.
* Prefer static generation for mostly static marketing pages.

## SEO standards

For every public-facing page, consider:

* unique title
* useful meta description
* canonical URL
* Open Graph metadata
* Twitter/X card metadata when useful
* semantic HTML
* one clear H1
* logical heading hierarchy
* descriptive internal links
* image alt text
* structured data when appropriate
* crawlable content
* sitemap
* robots.txt
* clean URL structure

Never use keyword stuffing.
Never invent fake SEO text.
SEO improvements must also improve human clarity.

## Performance standards

Optimize for:

* Core Web Vitals
* LCP
* CLS
* INP
* reduced JavaScript
* optimized images
* optimized fonts
* minimal dependencies
* static rendering where appropriate
* caching where appropriate
* clean component boundaries

Before adding a dependency:

1. check whether the project already has an option
2. consider native React/Next.js/browser features
3. explain why the dependency is needed

## Accessibility standards

For UI work, check:

* semantic elements
* button vs link correctness
* keyboard navigation
* focus states
* form labels
* ARIA only when needed
* alt text
* heading order
* color contrast risk
* clear error and loading states

Do not create clickable divs unless accessibility is handled correctly.

## Code quality

When implementing:

* make small, reviewable changes
* preserve existing behavior
* keep components readable
* avoid unrelated formatting churn
* remove dead code only when safe
* avoid guessing
* inspect files before deciding
* explain tradeoffs clearly
* ask before large rewrites
* do not ask before small safe improvements

## Validation

After changes, run or recommend relevant checks:

* npm install when dependencies change
* npm run lint
* npm test when relevant
* npm run build

For Next.js migration work, also check:

* route behavior
* metadata output
* image rendering
* navigation
* responsive layout
* accessibility basics
* production build

If a command fails:

1. explain the failure plainly
2. fix it if safe and related
3. do not hide unresolved failures

## Communication

Be direct.
Challenge weak architecture choices.
Do not blindly agree with assumptions.
When unsure, inspect the repo instead of guessing.
Always separate current CRA reality from target Next.js architecture.


## Local agent tools and workflows



This repo has local Codex skills and playbooks.



Important paths:

\- .agents/skills

\- .agents/playbooks/codex-prompts.md



Available project skills:

\- cra-to-nextjs-migration-audit

\- cra-to-nextjs-route-migrator

\- nextjs-seo-metadata-planner

\- nextjs-performance-core-web-vitals

\- frontend-accessibility-review

\- frontend-code-review-gate



Available MCP tools:

\- Context7 for current framework and library documentation

\- Playwright for rendered page inspection



\## Skill usage rules



Use the right skill for the job:



\- For migration planning, use `cra-to-nextjs-migration-audit`.

\- For migrating one route, use `cra-to-nextjs-route-migrator`.

\- For SEO metadata, use `nextjs-seo-metadata-planner`.

\- For performance and Core Web Vitals, use `nextjs-performance-core-web-vitals`.

\- For accessibility review, use `frontend-accessibility-review`.

\- For final review after implementation, use `frontend-code-review-gate`.



Do not use migration implementation skills before understanding the current route, page, components, assets, styles, and risks.



\## MCP usage rules



Use Context7 when:

\- Next.js, React, TypeScript, or library behavior may depend on current docs

\- implementing App Router metadata

\- checking migration patterns

\- checking APIs that may have changed



Use Playwright when:

\- visual output matters

\- checking navigation

\- checking headings and visible content

\- comparing CRA and Next.js versions of a page

\- validating accessibility basics

\- reviewing UI after implementation



\## Playbook usage



When I ask for a migration, SEO, performance, accessibility, or review task, consult `.agents/playbooks/codex-prompts.md` if a standard prompt would help.



Prefer the playbook workflows over improvising.



\## Migration safety rules



Before implementing migration work:

1\. Run or perform an audit if the route has not been inspected.

2\. Plan the route mapping.

3\. Identify Server vs Client Component boundaries.

4\. Identify SEO metadata needed.

5\. Identify performance and accessibility risks.

6\. Make the smallest safe change.

7\. Run or recommend validation.

8\. Use the final review gate before calling work complete.



Never perform a full rewrite unless I explicitly request it.



\## Review gate rule



After every meaningful implementation, use or recommend the `frontend-code-review-gate` skill.



The work is not complete until:

\- changed files are summarized

\- validation status is clear

\- SEO impact is clear

\- performance impact is clear

\- accessibility impact is clear

\- remaining risks are listed

