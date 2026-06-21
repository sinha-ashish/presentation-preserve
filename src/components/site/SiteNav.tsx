const sections: { hash: string; label: string }[] = [
  { hash: "#expertise", label: "Expertise" },
  { hash: "#experience", label: "Experience" },
  { hash: "#skills", label: "Skills" },
  { hash: "#writing", label: "Writing" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-[100] border-b border-rule bg-[rgba(247,246,242,0.88)] backdrop-blur-md py-4">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6">
        <a href="/#home" className="font-syne text-base font-extrabold tracking-[-0.02em]">
          Ashish Sinha
        </a>
        <div className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.hash}
              href={`/${s.hash}`}
              className="text-[0.82rem] font-medium uppercase tracking-[0.04em] text-mid transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-accent px-[18px] py-2 text-[0.82rem] font-semibold text-white transition-opacity hover:opacity-85"
          >
            Let's talk
          </a>
        </div>
      </div>
    </nav>
  );
}
