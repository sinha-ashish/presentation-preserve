import type { ReactNode, ElementType } from "react";
import { useInView } from "../../hooks/useInView";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const Comp: ElementType = as ?? "div";
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} ${className}`}
    >
      {children}
    </Comp>
  );
}
