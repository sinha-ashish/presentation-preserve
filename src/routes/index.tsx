import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { SectionLabel } from "../components/site/SectionLabel";
import { Reveal } from "../components/site/Reveal";
import { OperatingAccordion } from "../components/site/OperatingAccordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Sinha — Enterprise AI Product Leader" },
      { name: "description", content: "Senior AI Product Leader. 9 years scaling enterprise AI from prototype to production. €30M portfolio governance, 15+ GenAI use cases shipped." },
      { property: "og:title", content: "Ashish Sinha — Enterprise AI Product Leader" },
      { property: "og:description", content: "9 years leading cross-functional AI squads across €30M+ portfolios. Paris." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-rule pt-24 pb-[72px]">
        <Container>
          <div className="mb-7 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-mid">
            <span className="pulse-dot" />
            Open to Senior AI Product roles · Paris
          </div>
          <h1 className="mb-7 max-w-[780px] font-syne text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
            Enterprise AI<br />from <em className="not-italic gradient-text">prototype<br />to production.</em>
          </h1>
          <p className="mb-11 max-w-[560px] text-[1.1rem] leading-[1.7] text-mid">
            9 years leading cross-functional AI squads across €30M+ portfolios.
            I build the governance, cadence, and delivery discipline that makes
            enterprise AI dependable — not just impressive in a demo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:ashish.sinha2408@gmail.com" className="rounded-full bg-ink px-7 py-[14px] text-[0.92rem] font-semibold text-white transition-colors hover:bg-accent">
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/sinha-ashish" target="_blank" rel="noreferrer" className="rounded-full border-[1.5px] border-rule px-7 py-[13px] text-[0.92rem] font-medium transition-colors hover:border-ink">
              View LinkedIn →
            </a>
          </div>
        </Container>
      </section>

      {/* EXECUTION DASHBOARD */}
      <section className="border-b border-rule py-20">
        <Container>
          <SectionLabel>Execution Dashboard</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Results that show up<br />on the P&amp;L, not just the roadmap.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Card 1 */}
            <Reveal delay={0}>
              <DashCard
                tag="Performance Metric"
                title="AI Production Pipeline"
                callout="15+ GenAI Use Cases | 100+ Hrs/Wk Automated"
                body="Orchestrating cross-functional engineering squads to rapidly deploy advanced AI capabilities directly into enterprise delivery pipelines."
              />
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={100}>
              <DashCard
                tag="Risk Mitigation"
                title="Enterprise Compliance Architecture"
                callout="€30M Portfolio Guardrailing"
                body="Architecting and deploying a unified AI governance infrastructure aligned with the EU AI Act to secure compliant live production deployments. This sits alongside a 5-module enterprise finance product built on the same standardised integration architecture — 10+ releases shipped with zero critical regression."
              >
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {["EU AI Act — Tier II", "Data Lineage", "Model Cards", "Audit Trail"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(26,86,219,0.08)] px-3 py-1 text-[0.72rem] font-semibold text-accent">
                      <span aria-hidden>✓</span> {t}
                    </span>
                  ))}
                </div>
              </DashCard>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={200}>
              <DashCard
                tag="Growth & Adoption"
                title="Platform Scale & Adoption"
                callout="150+ Institutional Partners | 87% CSAT"
                body="Architected the 0-to-1 product strategy and go-to-market for an EU-funded deep tech learning platform — scaling institutional adoption from zero to a 150+ partner network across Europe, and driving 55% growth in active adoption within 6 months."
              >
                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-rule pt-5">
                  <div>
                    <div className="font-syne text-[1.75rem] font-bold leading-none tracking-[-0.02em] text-accent">150+</div>
                    <div className="mt-1 text-[0.72rem] text-mid">0 → 150 Partners</div>
                  </div>
                  <div>
                    <div className="font-syne text-[1.75rem] font-bold leading-none tracking-[-0.02em] text-accent">87%</div>
                    <div className="mt-1 text-[0.72rem] text-mid">CSAT</div>
                  </div>
                </div>
                <ProgressBar value={55} caption="55% adoption growth · 6mo" />
              </DashCard>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={300}>
              <DashCard
                tag="Agile Velocity"
                title="Agile Delivery & Speed"
                callout="80/40 Delivery Rule"
                body="Architecting high-velocity deployment frameworks that push stable, high-signal iterations to staging environments rapidly — collapsing traditional 3-week enterprise roadmaps to under 2 weeks by moving feedback loops earlier, not by cutting corners."
              >
                <div className="mt-5">
                  <div className="mb-1.5 flex items-center justify-between text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-mid">
                    <span>Sprint Signal</span>
                    <span className="text-accent">80%</span>
                  </div>
                  <ProgressBar value={80} caption="80% complete · 40% of standard time" />
                </div>
              </DashCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* OPERATOR'S INSTINCT */}
      <section className="border-b border-rule py-20">
        <Container>
          <SectionLabel>Operating Instinct</SectionLabel>
          <h2 className="mb-12 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Three moments that explain<br />how I actually work.
          </h2>
          <div className="grid grid-cols-1 gap-5">
            <Reveal delay={0}>
              <InstinctCard
                tag="Ambiguity"
                headline="No brief. Two weeks. An unfamiliar stack."
                body="Brought a business-critical problem from an internal enterprise client at global scale, inside a Group IT model where business units operate with governance on par with external procurement. No clean brief, a two-week window, an unfamiliar tech stack. Proposed a working prototype targeting the core user journeys before being asked, validated it immediately, then ran a 3-day hackathon with tech leads and engineers — functional user journeys delivered in five days."
                closing="Sceptical stakeholders became advocates because they understood why, not just what."
              />
            </Reveal>
            <Reveal delay={100}>
              <InstinctCard
                tag="Growth Mechanics"
                headline="Distribution through trust, not spend."
                body="Scaled a 0-to-1 EU-funded platform from zero to a 150+ partner network by aligning with research institutions people already trusted, rather than competing for cold attention. Redesigned onboarding separately for creators and learners to remove first-use friction, and built a free certification mechanic that gave both sides a reason to return."
                closing="The platform was discovered through channels people already trusted — not sold to them cold."
              />
            </Reveal>
            <Reveal delay={200}>
              <InstinctCard
                tag="Builder's Instinct"
                headline="I build my own tools before I'm asked to."
                body="Outside the core role, vibe-coded an AI-powered personal system using Claude that manages interview prep, positioning, and application content as a structured, reusable, swappable database — the same instinct now directed at enterprise AI delivery: spot the process running on scripts and good intentions, and build the infrastructure that makes it repeatable."
                closing="I built a personal AI Studio before I knew the name for it."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* OPERATING MANUAL */}
      <section className="border-b border-rule py-20">
        <Container>
          <SectionLabel>The Leadership Vault — Operating Principles</SectionLabel>
          <h2 className="mb-10 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            How decisions actually<br />get made in the squad.
          </h2>
          <OperatingAccordion />
        </Container>
      </section>

      {/* MOTIVATION & FIT */}
      <section className="border-b border-rule py-20">
        <Container>
          <SectionLabel>Motivation &amp; Fit</SectionLabel>
          <h2 className="mb-12 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            What I'm actually looking for.
          </h2>
          <div className="space-y-5">
            {[
              { label: "Environment", body: "High autonomy, fast sign-off culture. I do my best work when squads are empowered to move without multi-layered bureaucracy — slower organizational velocity is fine; that's exactly the zone where I add the most value. What's non-negotiable is the freedom to act on that velocity once I'm in." },
              { label: "Ownership", body: "Genuine product ownership, not delivery-management-in-name-only. I want to shape the roadmap, not just orchestrate someone else's." },
              { label: "Culture", body: "Fiercely user-obsessed, growth-centered teams that default to giving each other the benefit of the doubt. Ego-free isn't a slogan here — it's an operating requirement." },
              { label: "Compensation", body: "Open to discussing a base salary in the €70k range (13-month structure), with performance-based variable and equity as optional components depending on stage and structure. Happy to align further based on scope and ownership." },
            ].map((b) => (
              <Reveal key={b.label}>
                <div className="border-l-[3px] border-accent bg-card pl-5 py-3 md:pl-7">
                  <div className="mb-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent">{b.label}</div>
                  <p className="text-[0.95rem] leading-[1.7] text-mid">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 rounded-xl bg-ink p-12 md:grid-cols-[1fr_auto] md:p-16">
            <div>
              <h2 className="mb-2.5 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                Open to the right<br />opportunity.
              </h2>
              <p className="text-[0.95rem] text-white/55">
                Senior AI Product roles in Paris. Enterprise delivery, governance, and GenAI at scale.
              </p>
            </div>
            <Link to="/contact" className="self-start rounded-full bg-white px-7 py-[14px] text-[0.92rem] font-semibold text-ink transition-opacity hover:opacity-90 md:self-auto">
              Start a conversation →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function DashCard({
  tag,
  title,
  callout,
  body,
  children,
}: {
  tag: string;
  title: string;
  callout: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="flex h-full flex-col rounded-md border border-rule bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-accent2" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-mid">{tag}</span>
      </div>
      <h3 className="mb-2.5 font-syne text-[1.05rem] font-bold leading-[1.3]">{title}</h3>
      <div className="mb-3 font-syne text-[1.35rem] font-bold leading-[1.2] tracking-[-0.01em] text-ink">{callout}</div>
      <p className="text-[0.875rem] leading-[1.65] text-mid">{body}</p>
      {children}
    </article>
  );
}

function ProgressBar({ value, caption }: { value: number; caption: string }) {
  return (
    <div className="mt-3">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-rule/60">
        <div className="h-full rounded-full bg-accent" style={{ width: `${value}%` }} />
      </div>
      <div className="mt-1.5 text-[0.72rem] text-mid">{caption}</div>
    </div>
  );
}

function InstinctCard({
  tag,
  headline,
  body,
  closing,
}: {
  tag: string;
  headline: string;
  body: string;
  closing: string;
}) {
  return (
    <article className="rounded-md border border-rule bg-card p-7 md:p-9">
      <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent">{tag}</div>
      <h3 className="mb-4 font-syne text-[1.3rem] font-bold leading-[1.25] tracking-[-0.01em] md:text-[1.5rem]">
        {headline}
      </h3>
      <p className="text-[0.95rem] leading-[1.7] text-mid">{body}</p>
      <p className="mt-5 border-t border-rule pt-5 font-syne text-[0.95rem] font-semibold leading-[1.5] text-ink">
        {closing}
      </p>
    </article>
  );
}
