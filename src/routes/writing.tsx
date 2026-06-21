import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { SectionLabel } from "../components/site/SectionLabel";
import { articles } from "../lib/articles";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Ashish Sinha" },
      { name: "description", content: "Notes from inside enterprise AI delivery. Articles on AI delivery, enterprise product, and execution frameworks." },
      { property: "og:title", content: "Writing — Ashish Sinha" },
      { property: "og:description", content: "Notes from inside enterprise AI delivery — AI delivery, enterprise product, and execution frameworks." },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: WritingIndex,
});

function WritingIndex() {
  return (
    <section className="border-b border-rule py-20">
      <Container>
        <SectionLabel>Writing</SectionLabel>
        <h1 className="mb-4 font-syne text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          Notes from inside enterprise AI delivery.
        </h1>
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
                <h2 className="font-syne text-[1.2rem] font-bold leading-[1.3] tracking-[-0.01em] transition-colors group-hover:text-accent md:text-[1.45rem]">
                  {a.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
