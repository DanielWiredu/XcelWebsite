"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PhotoKey } from "@/lib/images";
import { Photo } from "./Photo";
import { EASE_OUT } from "./Reveal";

type RevealPhotoProps = {
  photo: PhotoKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Subtle scroll-linked drift of the image inside its frame. */
  parallax?: boolean;
  radius?: string;
  /** Optional overlay (e.g. gradient) rendered above the image. */
  overlay?: React.ReactNode;
};

/**
 * Framed photograph that "opens" with a clip-path reveal when scrolled into
 * view, then drifts gently with scroll. Only transform/clip-path animate, so
 * it stays smooth on low-end phones; reduced motion disables the drift.
 */
export function RevealPhoto({
  photo,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority,
  parallax = true,
  radius = "1.75rem",
  overlay,
}: RevealPhotoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const drift = parallax && !reduce;

  return (
    <m.div
      ref={ref}
      className={`relative overflow-hidden bg-navy-100 ${className}`}
      style={{ borderRadius: radius }}
      initial={{ clipPath: `inset(10% 8% 10% 8% round ${radius})` }}
      whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius})` }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, ease: EASE_OUT }}
    >
      <m.div className="absolute inset-x-0 -inset-y-[8%]" style={drift ? { y } : undefined}>
        <Photo photo={photo} sizes={sizes} priority={priority} />
      </m.div>
      {overlay}
    </m.div>
  );
}
