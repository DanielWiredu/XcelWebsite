import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="text-balance text-base leading-relaxed text-navy-500 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
