import { useLanguage } from "../../lib/LanguageContext";

export function TriTier() {
  const { t } = useLanguage();
  const a = t.architecture;
  return (
    <div className="grid gap-8 rounded-md border border-rule bg-card p-7 md:grid-cols-2 md:gap-12 md:p-10">
      <div>
        <span className="mb-4 inline-block rounded-full bg-[rgba(26,86,219,0.08)] px-2.5 py-[3px] text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">
          {a.leftBadge}
        </span>
        <h3 className="mb-7 font-syne text-[1.35rem] font-bold leading-[1.2] tracking-[-0.01em]">
          {a.leftTitle}
        </h3>
        <div className="space-y-6">
          {a.tiers.map((tier) => (
            <div key={tier.title}>
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${tier.dot}`} />
                <span className="font-syne text-[0.95rem] font-bold">{tier.title}</span>
              </div>
              <p className="mb-2 pl-[18px] text-[0.8rem] leading-[1.5] text-mid">{tier.desc}</p>
              <div className="ml-[18px] h-[6px] overflow-hidden rounded-full bg-rule/60">
                <div className={`h-full ${tier.dot} rounded-full`} style={{ width: `${tier.bar}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:border-l md:border-rule md:pl-12">
        <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">{a.rightLabel}</div>
        <h3 className="mb-1.5 font-syne text-[1.35rem] font-bold leading-[1.2] tracking-[-0.01em]">
          {a.rightTitle}
        </h3>
        <p className="mb-4 text-[0.8rem] uppercase tracking-[0.06em] text-mid">{a.rightSubtitle}</p>
        <p className="mb-7 text-[0.9rem] leading-[1.65] text-mid">{a.rightBody}</p>
        <ol className="space-y-3">
          {a.steps.map((s, i) => (
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
