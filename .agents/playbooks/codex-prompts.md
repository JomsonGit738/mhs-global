# Codex Agent Command Playbook



Use these prompts inside Codex CLI.



---



# 1. Repo inspection



```text

Inspect this repo using the project AGENTS.md. Summarize the current app structure, routes, pages, components, styles, assets, SEO setup, dependencies, scripts, and migration risks. Do not edit files.

```



---



\# 2. CRA to Next.js migration audit



```text

Use $cra-to-nextjs-migration-audit. Audit this repo for migration from CRA to Next.js App Router. Do not edit files.

```



\---



\# 3. Route migration planning only



```text

Use $cra-to-nextjs-route-migrator. Plan migration for the route \[ROUTE\_PATH] from CRA React Router to Next.js App Router. Inspect relevant files and explain the migration plan, SEO metadata, server/client component decisions, performance risks, accessibility risks, and validation steps. Do not edit files.

```



Example:



```text

Use $cra-to-nextjs-route-migrator. Plan migration for the route /about from CRA React Router to Next.js App Router. Do not edit files.

```



\---



\# 4. Route migration implementation



```text

Use $cra-to-nextjs-route-migrator. Migrate the route \[ROUTE\_PATH] from CRA React Router to Next.js App Router. Make the smallest safe changes, preserve UI and content, add route-level metadata, replace React Router patterns, and run relevant validation.

```



Example:



```text

Use $cra-to-nextjs-route-migrator. Migrate the route /about from CRA React Router to Next.js App Router. Make the smallest safe changes and run validation.

```



\---



\# 5. SEO metadata planning



```text

Use $nextjs-seo-metadata-planner. Analyze the route \[ROUTE\_PATH]. Inspect the page content and recommend title, meta description, canonical URL, Open Graph metadata, Twitter/X card, structured data if appropriate, heading improvements, and sitemap/robots handling. Do not edit files.

```



Example:



```text

Use $nextjs-seo-metadata-planner. Analyze the route /services. Do not edit files.

```



\---



\# 6. SEO metadata implementation



```text

Use $nextjs-seo-metadata-planner. Implement SEO metadata for the route \[ROUTE\_PATH] using Next.js App Router conventions. Use only supported page content and business facts from the repo. Avoid keyword stuffing. Run validation after changes.

```



\---



\# 7. Performance review



```text

Use $nextjs-performance-core-web-vitals. Review the route \[ROUTE\_PATH] for LCP, CLS, INP, bundle size, hydration cost, images, fonts, dependencies, and rendering strategy. Do not edit files.

```



Example:



```text

Use $nextjs-performance-core-web-vitals. Review the homepage for Core Web Vitals risks. Do not edit files.

```



\---



\# 8. Performance implementation



```text

Use $nextjs-performance-core-web-vitals. Improve performance for the route \[ROUTE\_PATH]. Focus on high-impact low-risk changes first. Do not change visual design unless necessary. Run validation.

```



\---



\# 9. Accessibility review



```text

Use $frontend-accessibility-review. Review the route or component \[ROUTE\_OR\_COMPONENT] for semantic HTML, heading order, keyboard accessibility, button/link correctness, alt text, forms, focus states, and ARIA usage. Do not edit files.

```



Example:



```text

Use $frontend-accessibility-review. Review the homepage hero and navigation. Do not edit files.

```



\---



\# 10. Accessibility implementation



```text

Use $frontend-accessibility-review. Improve accessibility for \[ROUTE\_OR\_COMPONENT]. Make safe, minimal changes only. Preserve visual design. Run validation.

```



\---



\# 11. Rendered page inspection



```text

Use Playwright MCP to open \[URL]. Inspect visible headings, navigation links, main content, buttons, images, forms, and obvious accessibility/layout issues. Do not edit files.

```



Example:



```text

Use Playwright MCP to open http://localhost:3000. Inspect the homepage headings, navigation links, visible layout, and obvious accessibility issues. Do not edit files.

```



\---



\# 12. Compare old CRA and new Next.js page



```text

Use Playwright MCP to compare \[OLD\_URL] and \[NEW\_URL]. Check visible content, headings, navigation, layout, images, buttons, links, and obvious behavior differences. Do not edit files.

```



Example:



```text

Use Playwright MCP to compare http://localhost:3000/about and http://localhost:3001/about. Check visible content, layout, headings, navigation, and obvious behavior differences. Do not edit files.

```



\---



\# 13. Final code review gate



```text

Use $frontend-code-review-gate. Review the latest changes before finalizing. Check correctness, React/Next.js quality, migration safety, SEO, performance, accessibility, dependencies, validation results, and remaining risks.

```



\---



\# 14. Context7 docs lookup



```text

Use Context7 MCP to look up the current official docs for \[TECH\_OR\_API]. Summarize the relevant guidance for this repo. Do not edit files.

```



Example:



```text

Use Context7 MCP to look up current Next.js App Router metadata docs. Summarize what matters for route-level SEO metadata. Do not edit files.

```



\---



\# 15. Safe first migration request



```text

Use $cra-to-nextjs-migration-audit first, then recommend the safest first route to migrate from CRA to Next.js App Router. Do not edit files.

```



\---



\# 16. After any implementation



```text

Use $frontend-code-review-gate. Review the changes. If validation was not run, tell me exactly which commands I should run next.

```

