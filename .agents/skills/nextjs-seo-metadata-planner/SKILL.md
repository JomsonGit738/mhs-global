---
name: nextjs-seo-metadata-planner
description: Use this skill when planning or writing SEO metadata for Next.js App Router pages. This skill creates page titles, meta descriptions, canonical URLs, Open Graph metadata, Twitter/X cards, structured data recommendations, heading checks, and sitemap/robots recommendations. Do not use this skill for keyword stuffing or fake SEO content.
---

# Next.js SEO Metadata Planner Skill

You are planning SEO metadata and on-page SEO improvements for a Next.js App Router website.

Use this skill for:
- Next.js App Router metadata
- route-level page titles
- meta descriptions
- canonical URLs
- Open Graph metadata
- Twitter/X card metadata
- structured data recommendations
- heading hierarchy checks
- internal linking suggestions
- sitemap and robots recommendations

Do not use this skill for:
- keyword stuffing
- fake SEO claims
- generic marketing fluff
- unsupported business claims
- unrelated UI rewrites

## Core rule

SEO must improve both search clarity and human clarity.

Never invent facts about the business.

Use only:
- content already in the repo
- user-provided business context
- clearly marked assumptions

## Before writing metadata

Inspect:

1. The route path
2. The page content
3. The visible H1
4. Main sections and headings
5. Existing metadata
6. Target audience implied by the page
7. Main service, product, or topic
8. Internal links
9. Images that may be useful for Open Graph
10. Canonical URL base if known

If canonical domain is unknown, ask for it or use this placeholder clearly:

https://example.com

## Metadata requirements

For each important public page, prepare:

- title
- description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph URL
- Open Graph type
- Open Graph image when available
- Twitter/X card when useful
- structured data recommendation if appropriate

## Next.js App Router implementation

Prefer this pattern for static pages:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Useful human-readable description.",
  alternates: {
    canonical: "/page-path",
  },
  openGraph: {
    title: "Page Title",
    description: "Useful human-readable description.",
    url: "/page-path",
    type: "website",
  },
};
```

For dynamic pages, recommend `generateMetadata`.

Do not use `next/head` for App Router unless there is a specific reason.

## Title guidance

Good titles should:

- be specific
- describe the page clearly
- include brand name when useful
- avoid repetition
- avoid keyword stuffing
- usually stay under about 60 characters when possible

Format examples:

- `Service Name | Brand Name`
- `About Brand Name`
- `Contact Brand Name`
- `Industry Solution | Brand Name`

## Description guidance

Good descriptions should:

- summarize the page honestly
- be useful to humans
- include a clear value proposition when supported
- avoid fake claims
- avoid keyword stuffing
- usually stay around 150 to 160 characters when possible

## Heading checks

For each page, check:

- exactly one clear H1 unless there is a strong reason
- H2 sections are logical
- headings are not used only for styling
- page topic is understandable from headings alone

## Structured data

Recommend structured data only when appropriate.

Possible types:
- Organization
- LocalBusiness
- WebSite
- BreadcrumbList
- Service
- FAQPage
- Article
- Product

Do not add structured data if page content does not support it.

## Sitemap and robots

For public pages, recommend sitemap inclusion.

Check:
- route should be indexable or not
- robots policy
- sitemap path
- canonical path consistency

## Output format

Use this format:

# SEO Metadata Plan

## Page analyzed

State route and page/component.

## Current SEO state

Summarize what exists.

## Recommended metadata

Provide title, description, canonical, Open Graph, and Twitter/X recommendation.

## Next.js metadata code

Provide App Router-compatible metadata code if enough information is known.

## Heading and content notes

Mention H1/H2/internal link issues.

## Structured data recommendation

Say whether structured data is useful and why.

## Sitemap/robots recommendation

Say whether route should be indexed and included in sitemap.

## Missing information

Only list information truly needed for accurate SEO.