---

name: frontend-accessibility-review

description: Use this skill when reviewing or improving accessibility in React or Next.js pages and components. This skill focuses on semantic HTML, heading structure, keyboard accessibility, button/link correctness, image alt text, forms, focus states, ARIA usage, and accessibility validation. Do not use this skill for cosmetic-only design changes.

---



\# Frontend Accessibility Review Skill



You are reviewing or improving accessibility for a React or Next.js website.



Use this skill for:

\- semantic HTML review

\- heading hierarchy review

\- keyboard accessibility

\- button and link correctness

\- image alt text

\- form labels and errors

\- focus states

\- ARIA usage

\- screen-reader clarity

\- accessibility validation



Do not use this skill for:

\- cosmetic-only UI changes

\- unsupported accessibility claims

\- unrelated rewrites

\- replacing semantic HTML with ARIA-heavy markup



\## Core rule



Prefer native semantic HTML before ARIA.



Use ARIA only when native HTML cannot express the behavior clearly.



\## Before changing code



Inspect:



1\. The page or component being reviewed

2\. Main landmarks

3\. H1 and heading structure

4\. Buttons and links

5\. Forms and labels

6\. Images and alt text

7\. Interactive elements

8\. Keyboard navigation risks

9\. Focus handling

10\. ARIA usage

11\. Error/loading/empty states

12\. Color contrast risk if colors are visible in CSS



Then summarize:

\- major accessibility risks

\- easy wins

\- changes that need design review

\- validation needed



\## Semantic HTML checklist



Check for:



\- meaningful `main`, `header`, `nav`, `footer`, `section`, and `article`

\- one clear page-level H1 unless there is a strong reason

\- logical H2/H3 hierarchy

\- headings not used only for styling

\- lists marked as lists when content is list-like

\- tables only for tabular data

\- buttons for actions

\- links for navigation



\## Keyboard checklist



Check:



\- all interactive elements are reachable by keyboard

\- visible focus states exist

\- keyboard order follows visual order

\- modals, menus, sliders, accordions, and dropdowns are keyboard usable

\- Escape closes overlays when appropriate

\- Enter/Space behavior is correct for custom controls



Do not create custom interactive controls if native controls work.



\## Image alt text checklist



Check:



\- meaningful images have useful alt text

\- decorative images use empty alt text

\- icons have accessible labels when they convey meaning

\- repeated decorative icons are hidden from assistive tech

\- alt text does not repeat nearby text unnecessarily



\## Forms checklist



Check:



\- each input has a visible or programmatic label

\- errors are associated with fields

\- required fields are indicated clearly

\- success/error states are understandable

\- form buttons describe the action

\- validation is not color-only



\## ARIA checklist



Check:



\- ARIA is not used when semantic HTML is enough

\- `aria-label` is meaningful and not vague

\- `aria-hidden` does not hide important content

\- roles match behavior

\- expanded/collapsed states use `aria-expanded` when needed

\- controls reference controlled content when appropriate



\## React and Next.js notes



For React and Next.js:



\- avoid clickable `div` or `span`

\- avoid `onClick` without keyboard support

\- use `next/link` for navigation in Next.js

\- keep client components only where interaction requires them

\- ensure route changes preserve understandable page structure

\- ensure metadata and visible headings align



\## Output format



Use this format:



\# Accessibility Review



\## Page or component analyzed



State what was reviewed.



\## Current accessibility picture



Summarize the main findings.



\## High-priority issues



List issues that affect navigation, understanding, forms, or screen readers.



\## Medium-priority issues



List improvements that matter but are less urgent.



\## Low-priority polish



List minor improvements.



\## Recommended fixes



Give practical code-level recommendations.



\## Validation



Recommend or run:

\- keyboard-only check

\- screen reader smoke test

\- eslint accessibility rules if available

\- Lighthouse accessibility audit

\- axe DevTools if available



\## Risks



List anything that could affect design, layout, or existing behavior.

