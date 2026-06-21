const tiers = [
  {
    dot: "bg-[#D97706]",
    title: "Tier 1 — Internal Productivity",
    desc: "Lightweight models · ROI-tracked · API usage capped",
    bar: 35,
  },
  {
    dot: "bg-accent2",
    title: "Tier 2 — High-Risk / Confidential",
    desc: "Enterprise cloud only · AWS Bedrock / Vertex AI / Azure · Hard-encrypted",
    bar: 100,
  },
  {
    dot: "bg-[#7C3AED]",
    title: "Tier 3 — Lightweight Operations",
    desc: "Fast-track admin workflows · HR & Finance · Business compliance",
    bar: 65,
  },
];

const steps = [
  "Map stakeholder risk posture",
  "Build parallel legal + security path",
  "Embed compliance in Definition of Done",
  "Ship with governance built in, not bolted on",
];

export function TriTier() {
  return (
    <div className="grid gap-8 rounded-md border border-rule bg-card p-7 md:grid-cols-2 md:gap-12 md:p-10">
      <div>
        <span className="mb-4 inline-block rounded-full bg-[rgba(26,86,219,0.08)] px-2.5 py-[3px] text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">
          Tri-Tier AI Execution Framework
        </span>
        <h3 className="mb-7 font-syne text-[1.35rem] font-bold leading-[1.2] tracking-[-0.01em]">
          Right-sized infrastructure for right-sized risk
        </h3>
        <div className="space-y-6">
          {tiers.map((t) => (
            <div key={t.title}>
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                <span className="font-syne text-[0.95rem] font-bold">{t.title}</span>
              </div>
              <p className="mb-2 pl-[18px] text-[0.8rem] leading-[1.5] text-mid">{t.desc}</p>
              <div className="ml-[18px] h-[6px] overflow-hidden rounded-full bg-rule/60">
                <div className={`h-full ${t.dot} rounded-full`} style={{ width: `${t.bar}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:border-l md:border-rule md:pl-12">
        <h3 className="mb-1.5 font-syne text-[1.35rem] font-bold leading-[1.2] tracking-[-0.01em]">
          Clearing the Path to Production
        </h3>
        <p className="mb-4 text-[0.8rem] uppercase tracking-[0.06em] text-mid">
          How AI use cases actually get to live deployment
        </p>
        <p className="mb-7 text-[0.9rem] leading-[1.65] text-mid">
          The architecture is only half the problem. The other half is navigating the org —
          aligning security teams on encryption standards before they become blockers, working
          with legal on EU AI Act parameters in parallel with engineering rather than
          sequentially, and building shared language between compliance and product so
          governance doesn't feel like a gate. This is the work that makes the Tri-Tier
          framework operational rather than theoretical.
        </p>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li key={s} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule bg-paper font-syne text-[0.78rem] font-bold text-accent">
                {i + 1}
              </span>
              <span className="text-[0.88rem] leading-[1.5] text-ink">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
