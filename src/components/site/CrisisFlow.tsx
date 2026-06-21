const steps = [
  "Step 1: Ruthless Triage",
  "Step 2: Map Stakeholder Impact",
  "Step 3: Enforce Hackathon Mode",
  "Step 4: Deploy Bare Minimum Necessity",
];

export function CrisisFlow() {
  return (
    <div className="rounded-md border border-rule bg-paper/60 p-5">
      <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">
        Crisis Resolution Flowchart
      </div>
      <div className="mb-4 text-[0.78rem] text-mid">Emotionally Disassociated Triage Framework</div>
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-md border border-rule bg-card px-3 py-2.5 text-center font-syne text-[0.78rem] font-semibold leading-[1.25]">
              {s}
            </div>
            {i < steps.length - 1 && (
              <span className="hidden text-mid md:inline">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
