import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const style = { transitionDelay: `${delay}ms` };
  const Comp = Tag as any;
  return (
    <Comp
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} ${className}`}
    >
      {children}
    </Comp>
  );
}
