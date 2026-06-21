import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { SectionLabel } from "../components/site/SectionLabel";
import { Reveal } from "../components/site/Reveal";
import { OperatingAccordion } from "../components/site/OperatingAccordion";
import { TriTier } from "../components/site/TriTier";
import { articles } from "../lib/articles";

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

/* ------------------------- DATA ------------------------- */

const expertise = [
  { icon: "🧠", title: "Agentic AI & GenAI Delivery", body: "Agent orchestration, RAG pipelines, vector databases, MCP, and AI observability — applied in enterprise production, not just prototypes." },
  { icon: "⚖️", title: "EU AI Act Governance", body: "Hands-on framework design for compliant AI deployment — risk classification, guardrail systems, and model lifecycle governance aligned to EU regulation." },
  { icon: "📦", title: "Portfolio & Roadmap Ownership", body: "Managing multi-million-euro cross-functional portfolios using SAFe® 6, Lean Portfolio Management, and data-driven CAPEX/OPEX optimisation." },
  { icon: "☁️", title: "Cloud-Native Architecture", body: "Google Cloud (Cloud Digital Leader certified), Vertex AI, AWS Bedrock, Azure DevOps — choosing and integrating the right stack for enterprise AI at scale." },
  { icon: "🔁", title: "Token Economics & AI Ops", body: "Modelling token consumption, optimising inference costs, and building the observability infrastructure that keeps AI systems accountable in production." },
  { icon: "🌍", title: "Cross-Cultural Team Leadership", body: "Building and aligning high-performing squads across 5 countries and 6 teams. Bilingual (English / French), multicultural by design." },
];

const timeline = [
  { dateStrong: "Jan 2026", date: "Present", role: "Program Manager", company: "Capgemini · Paris", body: "Orchestrating a €14M cross-functional transformation portfolio across 5 countries and 6 teams. Applying SAFe® 6 and GenAI delivery frameworks to compress time-to-market and accelerate cloud-native adoption at enterprise scale.", chips: ["SAFe® 6", "GenAI", "€14M Portfolio", "5 Countries"] },
  { dateStrong: "Mar 2024", date: "Dec 2025", role: "Senior Product Lead", company: "Capgemini · Paris", body: "Led cross-functional AI squads integrating 15+ GenAI use cases into production pipelines. Built the EU AI Act guardrailing framework, architected the 5-module enterprise finance product, and instituted the agile PM capability-building framework securing €200k+ in annual savings.", chips: ["EU AI Act", "€30M Portfolio", "RAG", "Vertex AI", "AWS Bedrock"] },
  { dateStrong: "Sep 2021", date: "Aug 2023", role: "Digital Product Owner", company: "EIT Manufacturing · Paris", body: "Built an EU-funded deep tech learning platform from zero to 150+ institutional partners. Full product lifecycle ownership: roadmap, API expansion, release governance, post-launch analytics. Achieved 87% CSAT and +55% active adoption in 6 months.", chips: ["0-to-1", "API Expansion", "87% CSAT", "150+ Partners"] },
  { dateStrong: "Aug 2019", date: "Jul 2021", role: "Digital Product Analyst", company: "FizzyHomes · Paris", body: "Drove full digital infrastructure overhaul in partnership with Commercial and IT leadership. UX redesign based on user journey mapping generated a 27% uplift in conversion rates and established a self-serve analytics infrastructure for Sales & Marketing.", chips: ["UX Research", "+27% Conversion", "Analytics"] },
  { dateStrong: "Apr 2017", date: "Aug 2018", role: "Senior Associate & Data Analyst", company: "Airbnb & Zomato · Gurugram", body: "Translated global product frameworks into market-specific execution roadmaps for 1,000+ partner clients. Engineered behavioural data insights defining 70+ product enhancements across 5 countries.", chips: ["Data Analytics", "Product Execution", "70+ Enhancements"] },
];

const skillGroups = [
  { title: "Strategy & Execution", items: ["Product Vision & Roadmap Ownership", "Backlog Prioritisation", "Go-to-Market (GTM)", "Value Stream Mapping", "Use Case Prioritisation"] },
  { title: "AI & Data", items: ["Agent Orchestration & MCP", "RAG & Vector Databases", "Model Versioning & Lifecycle", "AI Observability", "Token Cost Economics"] },
  { title: "Frameworks & Governance", items: ["SAFe® 6.0 & Scrum", "EU AI Act Compliance", "Lean Portfolio Management", "CAPEX/OPEX Optimisation", "P&L Ownership"] },
];

const certs = [
  { icon: "🏆", title: "PMP", sub: "PMI · 2023" },
  { icon: "📐", title: "SAFe® Agilist", sub: "Scaled Agile · Mar 2026" },
  { icon: "⚙️", title: "SAFe® DevOps Practitioner", sub: "Scaled Agile · Sep 2025" },
  { icon: "☁️", title: "Cloud Digital Leader", sub: "Google · Oct 2025" },
  { icon: "🔷", title: "AZ-900 Azure Essentials", sub: "Microsoft · Jul 2025" },
];

/* ------------------------- PAGE ------------------------- */

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="border-b border-rule pt-24 pb-[72px]">
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
            <a href="#contact" className="rounded-full bg-ink px-7 py-[14px] text-[0.92rem] font-semibold text-white transition-colors hover:bg-accent">
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/sinha-ashish" target="_blank" rel="noreferrer" className="rounded-full border-[1.5px] border-rule px-7 py-[13px] text-[0.92rem] font-medium transition-colors hover:border-ink">
              View LinkedIn →
            </a>
          </div>
        </Container>
      </section>

      {/* EXECUTION DASHBOARD */}
      <section id="dashboard" className="border-b border-rule py-20 scroll-mt-20">
        <Container>
          <SectionLabel>Execution Dashboard</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Results that show up<br />on the P&amp;L, not just the roadmap.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal delay={0}>
              <DashCard
                tag="Performance Metric"
                title="AI Production Pipeline"
                callout="15+ GenAI Use Cases | 100+ Hrs/Wk Automated"
                body="Orchestrating cross-functional engineering squads to rapidly deploy advanced AI capabilities directly into enterprise delivery pipelines."
              />
            </Reveal>
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

      {/* EXPERTISE */}
      <section id="expertise" className="border-b border-rule py-20 scroll-mt-20">
        <Container>
          <SectionLabel>Core Expertise</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            The intersection of AI delivery,<br />governance, and product strategy.
          </h2>
          <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-md border border-rule md:grid-cols-2">
            {expertise.map((it, i) => {
              const isRight = i % 2 === 1;
              const isBottomTwo = i >= expertise.length - 2;
              return (
                <div key={it.title} className={`bg-card p-9 ${!isRight ? "md:border-r border-rule" : ""} ${!isBottomTwo ? "border-b border-rule" : ""}`}>
                  <div className="mb-3.5 text-[1.4rem]">{it.icon}</div>
                  <h3 className="mb-2 font-syne text-[0.98rem] font-bold">{it.title}</h3>
                  <p className="text-[0.82rem] leading-[1.6] text-mid">{it.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <TriTier />
          </div>
        </Container>
      </section>

      {/* OPERATOR'S INSTINCT */}
      <section id="instinct" className="border-b border-rule py-20 scroll-mt-20">
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
      <section id="manual" className="border-b border-rule py-20 scroll-mt-20">
        <Container>
          <SectionLabel>The Leadership Vault — Operating Principles</SectionLabel>
          <h2 className="mb-10 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            How decisions actually<br />get made in the squad.
          </h2>
          <OperatingAccordion />
        </Container>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b border-rule py-20 scroll-mt-20">
        <Container>
          <SectionLabel>Career Timeline</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Nine years of building.<br />Always closer to the outcome than the process.
          </h2>
          <div className="mt-12">
            {timeline.map((t, i) => (
              <div key={t.role + t.dateStrong} className={`grid grid-cols-1 gap-1 py-8 md:grid-cols-[140px_1fr] md:gap-8 ${i < timeline.length - 1 ? "border-b border-rule" : ""}`}>
                <div className="pt-[3px] text-[0.78rem] font-medium text-mid md:text-right">
                  <strong className="mb-0.5 block font-syne text-[0.88rem] font-bold text-ink">{t.dateStrong}</strong>
                  {t.date}
                </div>
                <div>
                  <h3 className="mb-1 font-syne text-[1.05rem] font-bold">{t.role}</h3>
                  <div className="mb-2.5 text-[0.8rem] font-medium text-accent">{t.company}</div>
                  <p className="text-[0.875rem] leading-[1.65] text-mid">{t.body}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.chips.map((c) => (
                      <span key={c} className="rounded-full border border-rule bg-paper px-2.5 py-[3px] text-[0.7rem] font-medium text-mid">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b border-rule py-20 scroll-mt-20">
        <Container>
          <SectionLabel>Skills &amp; Certifications</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            The toolkit.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="mb-3.5 border-b border-rule pb-2.5 font-syne text-[0.9rem] font-bold">{g.title}</h3>
                <div className="flex flex-col gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="flex items-center gap-2.5 text-[0.82rem] text-mid">
                      <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-accent2" />
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {certs.map((c) => (
              <div key={c.title} className="flex items-center gap-2.5 rounded-md border border-rule bg-card px-[18px] py-3 text-[0.8rem] font-medium transition-colors hover:border-accent">
                <span className="text-[1.1rem]">{c.icon}</span>
                <div>
                  {c.title}
                  <small className="block text-[0.7rem] font-normal text-mid">{c.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WRITING */}
      <section id="writing" className="border-b border-rule py-20 scroll-mt-20">
        <Container>
          <SectionLabel>Writing</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Notes from inside<br />enterprise AI delivery.
          </h2>
          <p className="mb-12 max-w-[640px] text-[1.05rem] leading-[1.7] text-mid">
            Articles published roughly every week — on AI delivery, enterprise product,
            and execution frameworks.
          </p>
          <ul className="divide-y divide-rule border-t border-rule">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/writing/$slug"
                  params={{ slug: a.slug }}
                  className="group block py-7 transition-colors hover:bg-card"
                >
                  <div className="mb-2 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-mid">
                    <span>{a.dateLabel}</span>
                    <span aria-hidden>·</span>
                    <span>{a.readingTime}</span>
                  </div>
                  <h3 className="font-syne text-[1.15rem] font-bold leading-[1.3] tracking-[-0.01em] transition-colors group-hover:text-accent md:text-[1.35rem]">
                    {a.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* MOTIVATION & FIT */}
      <section id="fit" className="border-b border-rule py-20 scroll-mt-20">
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

      {/* CONTACT / CTA */}
      <section id="contact" className="py-20 scroll-mt-20">
        <Container>
          <div className="grid items-center gap-12 rounded-xl bg-ink p-9 md:grid-cols-[1fr_auto] md:p-16">
            <div>
              <h2 className="mb-2.5 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                Open to the right<br />opportunity.
              </h2>
              <p className="text-[0.95rem] text-white/55">
                Senior AI Product roles in Paris. Enterprise delivery, governance,<br className="hidden md:inline" />
                and GenAI at scale. Let's have a conversation.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-3 md:flex-col">
              <a href="mailto:ashish.sinha2408@gmail.com" className="flex items-center gap-2.5 whitespace-nowrap rounded-md border border-white/10 bg-white/[0.07] px-[22px] py-3.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-white/[0.12]">
                ✉️ &nbsp;ashish.sinha2408@gmail.com
              </a>
              <a href="tel:+33618973960" className="flex items-center gap-2.5 whitespace-nowrap rounded-md border border-white/10 bg-white/[0.07] px-[22px] py-3.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-white/[0.12]">
                📞 &nbsp;+33 6 18 97 39 60
              </a>
              <a href="https://www.linkedin.com/in/sinha-ashish" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 whitespace-nowrap rounded-md border border-white/10 bg-white/[0.07] px-[22px] py-3.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-white/[0.12]">
                💼 &nbsp;LinkedIn Profile →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ------------------------- COMPONENTS ------------------------- */

function DashCard({ tag, title, callout, body, children }: { tag: string; title: string; callout: string; body: string; children?: React.ReactNode }) {
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

function InstinctCard({ tag, headline, body, closing }: { tag: string; headline: string; body: string; closing: string }) {
  return (
    <article className="rounded-md border border-rule bg-card p-7 md:p-9">
      <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent">{tag}</div>
      <h3 className="mb-4 font-syne text-[1.3rem] font-bold leading-[1.25] tracking-[-0.01em] md:text-[1.5rem]">{headline}</h3>
      <p className="text-[0.95rem] leading-[1.7] text-mid">{body}</p>
      <p className="mt-5 border-t border-rule pt-5 font-syne text-[0.95rem] font-semibold leading-[1.5] text-ink">{closing}</p>
    </article>
  );
}
