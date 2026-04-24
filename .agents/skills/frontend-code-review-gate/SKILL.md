---

name: frontend-code-review-gate

description: Use this skill before finalizing frontend code changes in React or Next.js projects. This skill reviews correctness, SEO, performance, accessibility, maintainability, migration safety, dependency changes, and validation results. Use it as a review gate after implementation and before considering work complete.

---



\# Frontend Code Review Gate Skill



You are reviewing frontend code changes before considering the task complete.



Use this skill after implementation work involving:

\- React components

\- Next.js routes

\- CRA to Next.js migration

\- SEO metadata

\- performance changes

\- accessibility changes

\- styling changes

\- dependencies

\- routing

\- shared layout

\- navigation



Do not use this skill as a replacement for implementation.

Use it as a final quality gate.



\## Core rule



Be honest and critical.



Do not approve changes just because they compile.

Do not hide risks.

Do not claim validation passed unless commands were actually run and passed.



\## Review areas



Check:



1\. Correctness

2\. TypeScript quality

3\. React patterns

4\. Next.js App Router patterns

5\. Migration safety

6\. SEO

7\. Performance

8\. Accessibility

9\. Styling and responsiveness

10\. Dependencies

11\. Security basics

12\. Validation results

13\. Remaining risks



\## Correctness review



Check:



\- Does the code solve the requested task?

\- Are existing behaviors preserved?

\- Are route paths correct?

\- Are imports correct?

\- Are assets referenced correctly?

\- Are edge cases handled?

\- Are loading, error, and empty states handled where needed?

\- Are there accidental unrelated changes?



\## React review



Check:



\- Components are focused and readable.

\- Props are typed clearly.

\- State is not used unnecessarily.

\- Effects are not used unnecessarily.

\- Derived values are not stored as state without reason.

\- Components are not overly large.

\- Duplicated logic is avoided.

\- Event handlers are clear.

\- Cleanup is handled for effects when needed.



\## Next.js App Router review



For Next.js code, check:



\- App Router file structure is correct.

\- `page.tsx` and `layout.tsx` are used appropriately.

\- Server Components are used by default.

\- `"use client"` is only used where required.

\- `next/link` is used for internal navigation.

\- `next/image` is used where appropriate.

\- Metadata is implemented with `metadata` or `generateMetadata`.

\- No React Router patterns remain in migrated routes.

\- Static pages are not made dynamic unnecessarily.



\## CRA to Next.js migration review



When reviewing migrated code, check:



\- Old CRA route maps correctly to the new Next.js route.

\- UI and content are preserved unless changes were requested.

\- React Router imports are removed from migrated code.

\- Browser-only behavior is isolated in Client Components.

\- Shared layout is not duplicated unnecessarily.

\- Assets and styles still work.

\- The migration is incremental and reviewable.



\## SEO review



Check:



\- Unique page title

\- Useful meta description

\- Canonical URL

\- Open Graph metadata

\- Twitter/X card when useful

\- One clear H1

\- Logical H2/H3 structure

\- Semantic HTML

\- Descriptive internal links

\- Image alt text

\- Structured data only when supported

\- Sitemap and robots impact when relevant



Reject:

\- keyword stuffing

\- fake business claims

\- generic metadata repeated on every page

\- metadata that does not match visible page content



\## Performance review



Check:



\- Unnecessary Client Components

\- Excessive hydration cost

\- Heavy client-side dependencies

\- Large images

\- Missing image dimensions or sizing

\- Font loading issues

\- Bootstrap JavaScript loaded unnecessarily

\- Slider/carousel performance risk

\- Avoidable re-renders

\- Static rendering opportunities

\- Bundle-size concerns



Prefer reducing work over adding optimization tools.



\## Accessibility review



Check:



\- Semantic HTML

\- Button vs link correctness

\- Keyboard accessibility

\- Visible focus states

\- Form labels

\- Helpful error states

\- Alt text

\- Heading order

\- ARIA only when needed

\- No clickable divs unless fully accessible



\## Dependency review



If dependencies changed, check:



\- Was the dependency necessary?

\- Is there an existing project alternative?

\- Is it compatible with React/Next.js?

\- Does it increase client bundle size?

\- Is it used only where needed?

\- Was package-lock updated consistently?



Do not approve unnecessary dependencies.



\## Validation review



Check whether relevant commands were run:



\- npm run lint

\- npm test when relevant

\- npm run build



For Next.js migration, also check:



\- route loads

\- navigation works

\- metadata exists

\- images render

\- responsive layout works

\- accessibility basics pass

\- no old router dependency remains in migrated route



If validation was not run, say so clearly.



\## Output format



Use this format:



\# Frontend Code Review



\## Verdict



Use one of:

\- Approved

\- Approved with notes

\- Needs changes

\- Blocked



\## Summary



Briefly summarize what was changed and whether it meets the task.



\## Correctness



Mention issues or confirm no obvious issues found.



\## React / Next.js quality



Mention component, routing, server/client, and migration concerns.



\## SEO review



Mention metadata, headings, semantic HTML, and crawlability concerns.



\## Performance review



Mention LCP, CLS, INP, bundle, hydration, image, and font concerns.



\## Accessibility review



Mention keyboard, semantics, forms, alt text, and ARIA concerns.



\## Dependency review



Mention dependency concerns or confirm none changed.



\## Validation



List commands run and results.

If not run, say not run.



\## Required fixes



List blocking fixes only.



\## Recommended follow-ups



List non-blocking improvements only.

