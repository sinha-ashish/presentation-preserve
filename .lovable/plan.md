## Scope

Full content migration on `/` (Home), plus a new `/writing` route and nav link. LinkedIn URL corrected to `sinha-ashish` everywhere. No changes to Hero, Experience, Skills, Footer, or the design system (light theme, Syne/Inter, blue/teal accent, existing card/pill style).

## 1. Home (`src/routes/index.tsx`) — replace IMPACT block

Remove the current stat strip (€30M / 15+ / 100+ / 5) and the entire "Selected Impact" 6-card section. Replace with one new section: **"Execution Dashboard"** — a 2×2 grid (1-col mobile) of four white cards using the existing border/padding treatment.

Each card structure:
- Header row: small status dot (emerald `bg-accent2`) + uppercase tag label (reuses existing pill-tag style)
- Card title (Syne bold)
- Large callout line (Syne bold, larger)
- Body paragraph (mid color)
- Optional visual block per card spec

Card-specific extras:
- **Card 2 (Risk Mitigation)** — 2×2 mini checklist of pills with ✓: EU AI Act — Tier II / Data Lineage / Model Cards / Audit Trail
- **Card 3 (Growth & Adoption)** — two-column stat row (150+ · 0 → 150 Partners | 87% · CSAT) + thin horizontal progress bar filled 55% with caption "55% adoption growth · 6mo"
- **Card 4 (Agile Velocity)** — labeled progress bar "SPRINT SIGNAL — 80%" filled 80%, caption "80% complete · 40% of standard time"

Animation: shared `useInView` hook triggers fade-up with 100ms stagger; runs once; `prefers-reduced-motion` short-circuits to instant.

## 2. New "Operating Manual" section (Home, after Dashboard, before "Open to the right opportunity" CTA)

Section label: **THE LEADERSHIP VAULT — OPERATING PRINCIPLES.** Accordion (built with existing shadcn `accordion.tsx`, restyled with thin top/bottom dividers, plus/minus icon, light theme).

Items 01–04 with full body copy as specified. Item 01 expanded view renders a **Crisis Resolution Flowchart**: four small bordered boxes left-to-right with arrows between, title "CRISIS RESOLUTION FLOWCHART" + subtitle "Emotionally Disassociated Triage Framework". Item 04 expanded view renders the Tri-Tier diagram (the same component used in §4) inline.

## 3. "The Operator's Instinct" narrative (Home, inserted between the new Dashboard and Operating Manual — placed where "Expertise → Experience" sits on this single-page home flow; since Expertise/Experience are separate routes, the brief's "between Expertise and Experience" is interpreted as immediately after the Dashboard area)

Label: **OPERATING INSTINCT.** Headline: "Three moments that explain how I actually work." Three bordered cards in a vertical stack (1-col), each with eyebrow tag (AMBIGUITY / GROWTH MECHANICS / BUILDER'S INSTINCT), headline, body, and a separated closing line. Fade-up entrance only.

## 4. Tri-Tier Diagram + Cross-Functional Panel

Built as a reusable component `src/components/site/TriTier.tsx` so it can render both on `/expertise` (within/beside the EU AI Act card) and inside Operating Manual item 04.

Two-column layout (stacks on mobile):
- **Left:** pill tag "TRI-TIER AI EXECUTION FRAMEWORK", headline "Right-sized infrastructure for right-sized risk", three rows (Amber/Emerald/Purple dot + title + muted line + thin horizontal bar at 35% / 100% / 65% widths).
- **Right:** "Clearing the Path to Production" + subtitle + body + four numbered circle nodes connected by arrows (steps 1–4 as specified).

Inserted on `/expertise` as a new section beneath/beside the existing EU AI Act card. No other Expertise content modified.

## 5. "Motivation & Fit" (Home, inserted before the final CTA / footer)

Label: **MOTIVATION & FIT.** Headline: "What I'm actually looking for." Four stacked blocks, each with a thin left border in `--color-accent`, eyebrow label (Environment / Ownership / Culture / Compensation) + body paragraph. Fade-in only.

## 6. `/writing` route (new)

- New nav link "WRITING" in `SiteNav.tsx`, inserted between Skills and the "Let's talk" CTA (the brief's "between SKILLS and SIGNAL CLARITY" — there's no Signal Clarity link in the current nav, so it sits as the last nav item before the CTA).
- New file `src/routes/writing.tsx` with own `head()` (title, description, og:title, og:description, og:url). Static, pre-rendered, crawlable.
- New file `src/routes/writing.$slug.tsx` for the article detail page (also static; loader returns the article from a local in-file array — no fetch). First slug: `80-40-rule`.
- Listing page: WRITING label, headline "Notes from inside enterprise AI delivery.", subtext, then a static list with one entry (title, date = 3 weeks before today rendered as a fixed date string at build time, "4 min read"). Each entry links to its detail route.
- Detail page: full article body as specified, with proper semantic `<article>`, `<h1>`, paragraph spacing, Syne headline, Inter body.

## 7. LinkedIn fix

Replace every `linkedin.com/in/ashish-sinha` with `linkedin.com/in/sinha-ashish`. Audit: `src/routes/index.tsx` (hero CTA), `src/routes/contact.tsx`, `SiteFooter.tsx` if present. Single search-replace pass.

## Shared utilities (new)

- `src/hooks/useInView.ts` — IntersectionObserver hook, `{ once: true }`, returns `[ref, inView]`. Respects `prefers-reduced-motion` by returning `inView=true` immediately.
- `src/components/site/RevealOnScroll.tsx` — wrapper that applies `opacity-0 translate-y-2` → `opacity-100 translate-y-0` with a `delay` prop for staggering.
- `src/components/site/TriTier.tsx` — the diagram component (see §4).
- `src/components/site/OperatingAccordion.tsx` — the Operating Manual accordion built on shadcn `accordion.tsx`.

## Design system discipline

- No new colors, no new fonts, no dark cards. Only `bg-card` / `bg-paper` / `bg-ink` (existing CTA only).
- Dots: emerald = `bg-accent2`; amber and purple needed only for the Tri-Tier diagram — added as two single-purpose CSS custom properties in `styles.css` (`--color-amber`, `--color-purple`) used **only** inside the Tri-Tier component, kept neutral muted tones so they don't read as new brand accents. (If you'd prefer to reuse existing palette only, the diagram can use accent / accent2 / mid instead — flag in feedback and I'll switch.)
- Pill tags reuse the existing `rounded-full bg-[rgba(26,86,219,0.08)] … text-accent` pattern.
- Card borders reuse `rounded-md border border-rule bg-card p-7`.

## Out of scope

- No edits to Hero, Stats removal aside, Expertise content (except adding TriTier section), Experience timeline, Skills grid, footer copy.
- No backend, forms, CMS, or dynamic article fetching.
- No new animation library — plain CSS transitions + IntersectionObserver.

## Verification

After build: Playwright screenshot of `/` at 1280×1800 to confirm new dashboard, accordion, operator's instinct cards, tri-tier section, and motivation block render in order with no dark backgrounds or font regressions; screenshot of `/writing` and `/writing/80-40-rule`; curl HTML of `/writing` to confirm SSR includes article content (crawlable).
