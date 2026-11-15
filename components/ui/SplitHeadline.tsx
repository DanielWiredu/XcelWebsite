"use client";

import { m } from "framer-motion";
import { Fragment } from "react";
import { EASE_OUT } from "./Reveal";

type Part = string | { em: string };

type SplitHeadlineProps = {
  /** Plain strings render upright; `{ em }` parts render in gold serif italic. */
  parts: Part[];
  as?: "h1" | "h2";
  className?: string;
  emClassName?: string;
  /**
   * Animate on first paint (heroes). Uses CSS keyframes so the headline
   * reveals before JS hydrates; otherwise reveals on scroll into view.
   */
  onMount?: boolean;
  delay?: number;
};

function toWords(parts: Part[]) {
  const words: { text: string; em: boolean }[] = [];
  parts.forEach((p) => {
    const em = typeof p !== "string";
    const text = typeof p === "string" ? p : p.em;
    text
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w) => words.push({ text: w, em }));
  });
  return words;
}

/**
 * Editorial headline that reveals word-by-word from behind a mask.
 * Screen readers get the full sentence once via aria-label.
 */
export function SplitHeadline({
  parts,
  as = "h2",
  className = "",
  emClassName = "italic text-gold-400",
  onMount = false,
  delay = 0,
}: SplitHeadlineProps) {
  const Tag = as;
  const label = parts.map((p) => (typeof p === "string" ? p : p.em)).join("");
  const words = toWords(parts);
  const mask = "inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top";

  if (onMount) {
    return (
      <Tag aria-label={label} className={className}>
        <span aria-hidden="true" className="block">
          {words.map((w, i) => (
            <Fragment key={i}>
              <span className={mask}>
                <span
                  className={`inline-block animate-word-in ${w.em ? emClassName : ""}`}
                  style={{ animationDelay: `${delay + i * 0.06}s` }}
                >
                  {w.text}
                </span>
              </span>
              {i < words.length - 1 ? " " : null}
            </Fragment>
          ))}
        </span>
      </Tag>
    );
  }

  return (
    <Tag aria-label={label} className={className}>
      <m.span
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ staggerChildren: 0.06, delayChildren: delay }}
        className="block"
      >
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className={mask}>
              <m.span
                className={`inline-block ${w.em ? emClassName : ""}`}
                variants={{
                  hidden: { y: "105%", opacity: 0 },
                  show: { y: "0%", opacity: 1, transition: { duration: 1, ease: EASE_OUT } },
                }}
              >
                {w.text}
              </m.span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </m.span>
    </Tag>
  );
}
