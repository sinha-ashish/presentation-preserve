import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { CrisisFlow } from "./CrisisFlow";
import { TriTier } from "./TriTier";

type Principle = {
  n: string;
  title: string;
  body: string;
  visual?: "crisis" | "tritier";
};

const principles: Principle[] = [
  {
    n: "01",
    title: "Problem Obsession Over Feature Attachment",
    body: "Our objective is not to release meticulously built features; it is to solve the business problem. When a blocker hits — like an unavailable model — we do not panic. We pivot, explore, and often end up interfacing a more powerful or cost-effective alternative. Let's get to it.",
    visual: "crisis",
  },
  {
    n: "02",
    title: "High-Trust, Ego-Free Execution",
    body: "I intentionally build self-aware, transparent engineering squads. We prioritize the right outcome over being the loudest voice in the room. Feedback loops are instant, and we move faster because we do not waste time protecting egos.",
  },
  {
    n: "03",
    title: "Long-Range Strategic Instinct",
    body: "I look past immediate roadmaps to anchor product decisions in long-term enterprise scale. I don't just solve the visible ticket; I architect structural solutions that prevent the next ten friction points.",
  },
  {
    n: "04",
    title: "Model & Token Fluency",
    body: "I model user session token metrics, context window spend, and routing optimization to scale AI capability without sacrificing performance or cost discipline. This goes beyond budgeting — it means real fluency across model tiers and multi-model routing, knowing when a lightweight model is the right call versus when a task genuinely needs frontier-level reasoning. Hard limits on usage exist, but they're reserved for the rare, extravagant use case — not the default constraint most teams over-apply. In practice, that means I've built strong instincts for recommending the right setup for the business problem in front of me, grounded in product thinking first rather than chasing the newest model for its own sake. That instinct comes from comprehensive use-case prototyping over time — testing real scenarios against real model capabilities until the trade-offs become intuitive, not theoretical.",
    visual: "tritier",
  },
];

export function OperatingAccordion() {
  return (
    <Accordion type="single" collapsible className="border-t border-rule">
      {principles.map((p) => (
        <AccordionItem key={p.n} value={p.n} className="border-b border-rule">
          <AccordionTrigger className="py-6 hover:no-underline">
            <span className="flex items-baseline gap-5 text-left">
              <span className="font-syne text-[0.85rem] font-bold tracking-[0.04em] text-accent">{p.n}</span>
              <span className="font-syne text-[1.05rem] font-bold leading-[1.3] tracking-[-0.01em] text-ink md:text-[1.15rem]">
                {p.title}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-7 pt-0">
            <div className="max-w-[820px] pl-0 md:pl-[3.5rem]">
              <p className="text-[0.95rem] leading-[1.7] text-mid">{p.body}</p>
              {p.visual === "crisis" && (
                <div className="mt-6">
                  <CrisisFlow />
                </div>
              )}
              {p.visual === "tritier" && (
                <div className="mt-6">
                  <TriTier />
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
