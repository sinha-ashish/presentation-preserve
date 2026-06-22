import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { CrisisFlow } from "./CrisisFlow";
import { useLanguage } from "../../lib/LanguageContext";

export function OperatingAccordion() {
  const { t } = useLanguage();
  return (
    <Accordion type="single" collapsible className="border-t border-rule">
      {t.manual.principles.map((p) => (
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
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
