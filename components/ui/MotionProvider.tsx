"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the animation features we use (~15kb instead of the full bundle)
 * and globally honours the OS "reduce motion" setting: transforms are skipped,
 * opacity fades remain so content still appears gracefully.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
