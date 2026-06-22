import { useLanguage } from "../../lib/LanguageContext";

export function CrisisFlow() {
  const { t } = useLanguage();
  return (
    <div className="rounded-md border border-rule bg-paper/60 p-5">
      <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">
        {t.crisis.title}
      </div>
      <div className="mb-4 text-[0.78rem] text-mid">{t.crisis.subtitle}</div>
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {t.crisis.steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-md border border-rule bg-card px-3 py-2.5 text-center font-syne text-[0.78rem] font-semibold leading-[1.25]">
              {s}
            </div>
            {i < t.crisis.steps.length - 1 && (
              <span className="hidden text-mid md:inline">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
