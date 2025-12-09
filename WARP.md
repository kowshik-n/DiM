# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This repo is a Next.js App Router project built on top of the **Magic Portfolio** template from Once UI. It renders a marketing/portfolio site with MDX-driven content for case studies and blog posts, and a data/config-driven layout for the rest of the pages.

Key technologies:
- Next.js (`src/app` with App Router)
- React + TypeScript
- Once UI design system (`@once-ui-system/core`)
- MDX content loading via `gray-matter` and custom utilities

Authoritative documentation for the template lives at: https://docs.once-ui.com/docs/magic-portfolio/quick-start

## Commands & environment

Node version:
- Requires **Node.js v18.17+** (from `README.md`).

Package manager:
- The project uses plain `npm` scripts (see `package.json`).

Install dependencies:
- `npm install`

Run the dev server:
- `npm run dev`
  - Starts the Next.js dev server on the default port (usually http://localhost:3000).

Build, export & run production server:
- `npm run build` – Next.js production build
- `npm run start` – Start the Next.js production server (after `npm run build`)
- `npm run export` – Static export via `next export` (only if you need a fully static build)

Linting & formatting:
- `npm run lint` – Runs `next lint` (ESLint)
- `npm run biome-write` – Formats the codebase in-place with Biome (`npx @biomejs/biome format --write .`)

Tests:
- There is **no test script defined** in `package.json` and no test framework configured, so there is currently no built-in way to run a single test. If you add tests, expose them via npm scripts so future agents can invoke them directly (for example, `npm test` or `npm run test:unit`).

## High-level architecture

### App Router & layout

- The main app entry lives under `src/app` using the Next.js App Router.
- `src/app/layout.tsx` defines the **global shell**:
  - Imports Once UI global styles and tokens (`@once-ui-system/core/css/*.css`) and project-specific overrides from `src/resources/custom.css`.
  - Initializes visual theming via an inline `<script id="theme-init">`:
    - Reads design tokens from `src/resources/once-ui.config.ts` (`style`, `dataStyle`).
    - Sets `data-*` attributes on `<html>` (theme, brand, accent, neutral, surface, etc.).
    - Reads overrides from `localStorage` to preserve user theme/customization.
  - Wraps the page in Once UI layout primitives (`Flex`, `Column`, `Background`, `RevealFx`) to render the background effects configured in `once-ui.config.ts` (`effects` object).
  - Composes the shared chrome: `Header`, `RouteGuard`, and `Footer` from `src/components`, all rendered around `{children}`.

### Routing model & content gating

Route enablement and access control are **data-driven** via `src/resources/once-ui.config.ts` and enforced at runtime by `RouteGuard`:

- `routes: RoutesConfig` in `once-ui.config.ts` controls which top-level routes are enabled:
  - Example: `"/"`, `"/about"`, `"/work"` are `true` by default.
  - `"/blog"` and `"/gallery"` can be toggled on/off to fully hide those sections.
- `protectedRoutes: ProtectedRoutesConfig` maps **full pathnames** to `true` to require a password.
- `src/components/RouteGuard.tsx`:
  - Runs on the client and uses `usePathname()` to inspect the current route.
  - Checks `routes` for exact matches and dynamic route prefixes (`/blog`, `/work`). If a route is disabled, it renders the shared `not-found` component (`src/app/not-found.tsx`).
  - For paths listed in `protectedRoutes`, it enforces password-based access:
    - Calls `GET /api/check-auth` to see if the user already has a valid auth cookie.
    - Otherwise, renders a password form using Once UI components and posts to `POST /api/authenticate`.

API routes backing the guard and feeds:
- `src/app/api/authenticate/route.ts`:
  - Expects `{ password }` in the JSON body.
  - Compares against `process.env.PAGE_ACCESS_PASSWORD`.
  - On success, sets an `authToken=authenticated` cookie (httpOnly, secure in production, 1-hour lifetime).
- `src/app/api/check-auth/route.ts`:
  - Reads cookies from the request and returns 200 if `authToken === "authenticated"`, otherwise 401.
- `src/app/api/rss/route.ts`:
  - Uses `getPosts` (from `src/utils/utils.ts`) to read MDX blog posts under `src/app/blog/posts`.
  - Builds and returns an RSS 2.0 XML feed with metadata from `src/resources/content.tsx` (`blog`, `person`, `baseURL`).

When changing the site's structure or access model, prefer to adjust `routes` and `protectedRoutes` in `once-ui.config.ts` rather than inlining route logic in React components.

### Content & configuration model

The site is largely configured via **typed content objects** rather than hardcoded strings in components.

Core content/config files:
- `src/resources/content.tsx` – central content definition for the portfolio:
  - `person`: basic profile (name, role, email, `location` as IANA time zone, languages).
  - `home`, `about`, `blog`, `work`, `gallery`: structured objects defining page paths, labels, SEO titles/descriptions, and rich JSX snippets (e.g., hero headline, about copy, skills, studies, gallery images).
  - `newsletter`: toggles and labels for the Mailchimp signup section.
  - `social`: list of social links keyed by Once UI icon names.
- `src/resources/once-ui.config.ts` – visual and structural configuration:
  - `baseURL`: canonical site URL used in SEO metadata and schema.
  - `routes` and `protectedRoutes`: routing and access control as described above.
  - `fonts`: configured using `next/font` (`Geist` and `Geist_Mono`) and wired to CSS variables.
  - `style`: theming options (theme mode, brand/accent palettes, surface, border radius, transitions, scaling).
  - `dataStyle`: default style for data/visualization components (for Once UI charts and related elements).
  - `effects` and `mailchimp.effects`: parameters for background gradients, masks, dots, grids, and lines.
  - `schema` and `sameAs`: default structured data and social profiles for SEO schema.
  - `socialSharing`: which platforms to show for blog post share buttons.

Types for these configs live in `src/types`:
- `src/types/index.ts` re-exports from `config.types.ts` and `content.types.ts` to keep imports clean (`@/types`).

When updating copy or structure, change `content.tsx` and `once-ui.config.ts` first; components generally consume these objects rather than embedding literals.

### Page structure & feature components

High-level route composition (App Router):
- `src/app/page.tsx` (home page):
  - Uses Once UI components (`Heading`, `Text`, `Badge`, `Schema`, etc.) and `home`, `about`, `person`, `baseURL`, `routes` from `@/resources`.
  - Renders:
    - Hero section (headline/subline, optional featured badge linking to a primary case study).
    - About/profile content via `HomeSections` (`src/components/home/HomeSections.tsx`).
    - Featured projects via `Projects` (`src/components/work/Projects.tsx`).
    - Optional latest blog posts if `routes["/blog"]` is enabled.
    - Newsletter `Mailchimp` component at the bottom.
- `src/app/about/page.tsx`, `src/app/work/page.tsx`, `src/app/gallery/page.tsx`, `src/app/blog/page.tsx`:
  - Follow the same pattern: they import structured data from `@/resources` and render via feature-specific components under `src/components/{about,work,gallery,blog}`.
- Dynamic routes:
  - `src/app/blog/[slug]/page.tsx` and `src/app/work/[slug]/page.tsx` read the MDX files and display individual posts/projects.

Shared components live in `src/components`:
- Index barrel: `src/components/index.ts` re-exports the main building blocks used in `layout.tsx` and pages (header, footer, theming, MDX renderer, etc.).
- Feature directories:
  - `src/components/home/*` – home/profile sections.
  - `src/components/work/*` – project lists and cards.
  - `src/components/blog/*` – blog list and detail view helpers (including share section).
  - `src/components/gallery/*` – gallery rendering.
- Utility components:
  - `Providers.tsx` – wraps the app with any required React/Next providers (e.g., theme or context providers).
  - `ScrollToHash.tsx` – handles scroll-to-anchor behavior.
  - `ThemeToggle.tsx` – UI control for switching themes, aligned with the `theme-init` script and `style` config.

SCSS modules under `src/components` and `src/components/home` provide styling scoped to each component, with Once UI tokens layered on top.

### MDX content loading & utilities

MDX-based content is loaded via simple filesystem utilities in `src/utils`:

- `src/utils/utils.ts`:
  - `getMDXFiles(dir)` reads `.mdx` filenames from a directory or calls `notFound()` if it doesn’t exist.
  - `readMDXFile(filePath)` uses `gray-matter` to parse frontmatter into a `Metadata` object (title, subtitle, publishedAt, summary, image(s), tag, team, link) plus the MDX body.
  - `getMDXData(dir)` returns `{ metadata, slug, content }` for each `.mdx` file in the directory.
  - `getPosts(customPath)` is a convenience wrapper that anchors paths at `process.cwd()` and is used by the blog and RSS feed to read posts from `src/app/blog/posts`.

- `src/utils/formatDate.ts`:
  - Utility for rendering dates as full, human-readable strings, with optional relative suffixes (e.g., `"May 1, 2024 (2d ago)"`).

Content locations expected by the template:
- Blog posts: `src/app/blog/posts/*.mdx`.
- Projects/case studies: `src/app/work/projects/*.mdx`.

When adding new posts or projects, follow the frontmatter conventions used by the existing `.mdx` files so `getPosts` and the UI components can render them without extra wiring.
