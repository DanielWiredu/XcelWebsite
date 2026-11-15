"use client";

import { m } from "framer-motion";

/**
 * Oversized, line-drawn version of the twin-diamond logo, used as a
 * decorative motif. Each diamond strokes itself in, then rests.
 */
export function DiamondMark({ className = "", delay = 0.2 }: { className?: string; delay?: number }) {
  const draw = (d: number) => ({
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.2, delay: d, ease: [0.65, 0, 0.35, 1] },
        opacity: { duration: 0.4, delay: d },
      },
    },
  });

  return (
    <svg viewBox="0 0 56 40" fill="none" aria-hidden="true" className={className}>
      <m.rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="4"
        transform="rotate(45 16 16)"
        stroke="#6577cf"
        strokeWidth="0.35"
        initial="hidden"
        animate="show"
        variants={draw(delay)}
      />
      <m.rect
        x="20"
        y="4"
        width="24"
        height="24"
        rx="4"
        transform="rotate(45 32 16)"
        stroke="#f4b728"
        strokeWidth="0.35"
        initial="hidden"
        animate="show"
        variants={draw(delay + 0.5)}
      />
    </svg>
  );
}
