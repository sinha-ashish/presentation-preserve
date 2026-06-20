## Goal

Rebuild the uploaded `index.html` as a multi-route TanStack Start site. Preserve the visual system (colors, Syne/Inter typography, layout, components, motion) exactly. Pull narrative copy from the "Signal Clarity Portfolio" project where it adds depth.

## Design system (from index.html — kept verbatim)

Tokens in `src/styles.css` under `@theme`:
- `--color-ink #0B0C10`, `--color-paper #F7F6F2`, `--color-mid #6B6B6B`, `--color-rule #DDDBD4`, `--color-accent #1A56DB`, `--color-accent2 #00C2A8`, `--color-card #FFFFFF`
- `--font-syne "Syne"`, `--font-inter "Inter"`, radius `6px`
- Body uses Inter on paper background; all headings use Syne 700/800 with tight `-0.02/-0.03em` tracking
- Pill buttons (100px radius), card hover lift, pulse keyframe, gradient text on hero `em`

Fonts loaded via `<link>` to Google Fonts in `src/routes/__root.tsx` `head()` (Syne 400/600/700/800 + Inter 300/400/500). No URL `@import` in CSS.

## Routes

```text
src/routes/
  __root.tsx        sticky nav (Ashish Sinha · links · "Let's talk" CTA), <Outlet/>, footer
  index.tsx         / — hero + stat strip + Selected Impact (6 cards) + final CTA
  expertise.tsx     /expertise — 6-tile expertise grid
  experience.tsx    /experience — career timeline
  skills.tsx        /skills — 3 skill groups + cert badges
  contact.tsx       /contact — dark contact block (email / phone / LinkedIn)
```

Nav links use `<Link to="/...">` with `activeProps` for the current route. Each route gets its own `head()` (title, description, og:title, og:description). The CTA pill links to `/contact`.

## Components

Shared, plain-Tailwind-on-tokens, no shadcn variants needed:
- `SiteNav`, `SiteFooter` (in `__root.tsx`)
- `SectionLabel` (uppercase accent label with trailing rule)
- `Container` (max-w-[1080px], px-6)
- `StatCard`, `ImpactCard`, `ExpertiseTile`, `TimelineItem`, `SkillGroup`, `CertBadge`, `ContactBlock`

Custom utilities defined in `src/styles.css` via `@utility` for the pulse animation and the gradient-text treatment on the hero `em`.

## Content sourcing

- Hero, stats, impact cards, expertise tiles, timeline, skills, certs, contact: lifted verbatim from the uploaded `index.html`.
- Augmented with three narrative beats from Signal Clarity's `OperatorsInstinct` (Ambiguity / Growth Mechanics / Builder's Instinct) folded into the `/experience` page as a short "How I operate" block under the timeline — static text only, no GSAP/pin-scroll (keeps the calm editorial tone of the base design).

## Out of scope

- No GSAP, no framer-motion (base design is restrained — only the CSS pulse + card hover stay).
- No backend, forms, or auth.
- No shadcn theme overhaul; tokens above drive everything.

## Verification

After build: load `/`, `/expertise`, `/experience`, `/skills`, `/contact` via Playwright at 1280×1800, screenshot each, confirm Syne/Inter render, nav sticky+blur works, cards render in 3-col grid on desktop and stack on mobile.
