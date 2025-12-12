# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This repo is a Next.js App Router project built on top of the **Magic Portfolio** template from Once UI. It has been transformed into a **digital marketing agency website** with modern gradient styling, service showcases, and comprehensive service detail pages.

Key technologies:
- Next.js (`src/app` with App Router)
- React + TypeScript
- Once UI design system (`@once-ui-system/core`)
- MDX content loading via `gray-matter` and custom utilities
- SCSS modules for custom styling and animations

**Agency transformation features:**
- Modern purple/blue gradient theme with dark mode
- Service cards with hover effects and gradient borders
- Testimonials section with client results
- Comprehensive service pages for Meta Ads, Social Media, Content Creation, and SEO
- Performance-focused branding ("We Create Brands That Grow Fast")

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

## Digital Agency Features & Components

### Agency-Specific Components

The site includes custom components designed for digital marketing agency presentation:

- `src/components/services/Services.tsx`:
  - Displays the 4 core service offerings (Meta Ads, Social Media, Content Creation, SEO)
  - Gradient card design with hover effects (lift + glow)
  - Features checkmark list for each service
  - Responsive grid layout with RevealFx animations
  - Uses `Services.module.scss` for hover animations and gradient effects

- `src/components/services/Testimonials.tsx`:
  - Client testimonial showcase with result badges
  - Gradient border effects on hover
  - Three featured testimonials with specific metrics (972.7% Growth, 620% Engagement, 300% More Leads)
  - Uses `Testimonials.module.scss` for styling

### Service Detail Pages

Four comprehensive service pages are available as MDX case studies under `src/app/work/projects`:

1. **Meta Advertising** (`meta-advertising-services.mdx`):
   - Full-funnel campaign services
   - Audience research and targeting
   - Creative development and A/B testing
   - Conversion tracking and reporting
   - Pricing packages ($999-$2999+/month)
   - Case study: 972.7% growth in 3 months

2. **Social Media Management** (`social-media-management.mdx`):
   - Multi-platform management (Instagram, Facebook, TikTok, LinkedIn, etc.)
   - Content planning and posting
   - Community engagement
   - Influencer collaboration
   - Pricing packages ($699-$2999+/month)
   - Case study: 8% engagement boost + 15K followers

3. **Content Creation** (`content-creation-services.mdx`):
   - Social media content (posts, reels, stories)
   - Ad creatives for campaigns
   - Photography and video production
   - Brand assets and templates
   - Pricing packages ($899-$3499+/month)
   - Case study: 1.5M+ impressions through UGC content

4. **SEO Services** (`seo-services.mdx`):
   - Complete SEO audits (technical, on-page, off-page)
   - Keyword research and strategy
   - Local SEO optimization
   - Link building and content strategy
   - Pricing packages ($799-$2999+/month)
   - Case study: 300% organic traffic growth

### Visual Theme Configuration

The agency theme uses a modern gradient style configured in `src/resources/once-ui.config.ts`:

- **Theme**: Dark mode for premium feel
- **Brand color**: Violet (purple)
- **Accent color**: Cyan (blue)
- **Border style**: Playful (rounded corners)
- **Surface**: Translucent (glass effect)
- **Solid style**: Plastic (for modern gradient feel)
- **Gradient effect**: Enabled with purple-to-blue gradient (80% opacity)
- **Background effects**: Cursor-following mask, gradient overlay, dot pattern

These settings create the signature purple/blue gradient look throughout the site.

### Content Configuration for Agency

Key content updates in `src/resources/content.tsx`:

- **Person/Agency name**: "Digital Growth Agency"
- **Role**: "Performance Marketing & Growth"
- **Hero headline**: "We Create Brands That Grow Fast"
- **Subline**: Emphasizes end-to-end services from Meta Ads to SEO
- **Featured badge**: Shows real results ("972.7% Growth · 620% Engagement")
- **Newsletter**: Positioned as marketing insights for businesses

### Home Page Structure

The home page (`src/app/page.tsx`) now follows this structure:

1. Hero section with agency headline and subline (via `HomeSections`)
2. **Services section** - showcases 4 core services with gradient cards
3. Featured project/case study
4. **Testimonials section** - client results and social proof
5. More projects (if available)
6. Blog posts (if enabled in routes)
7. Newsletter signup

This structure prioritizes service showcase and social proof for conversion optimization.

### Styling Approach

Service components use SCSS modules for advanced styling:

- **Gradient borders**: Created with `::after` pseudo-elements
- **Hover effects**: Transform (translateY), box-shadow, and gradient opacity transitions
- **Icon animations**: Scale and glow effects on hover
- **Z-index layering**: Proper stacking for gradient overlays
- **CSS custom properties**: Leverages Once UI design tokens (e.g., `var(--brand-background-strong)`)

When modifying styles, maintain consistency with the gradient theme and ensure hover states are smooth (0.3s cubic-bezier transitions).
