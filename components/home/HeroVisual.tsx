"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { Photo } from "../ui/Photo";

/**
 * Hero image of Accra with floating product moments layered on top.
 * The photo zooms out on load (CSS) and drifts slightly with scroll;
 * the floating cards move at a different rate for gentle depth.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, 60]);
  const cardY = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none" style={{ animationDelay: "0.3s" }}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy-900 shadow-float ring-1 ring-white/10 sm:aspect-[5/6]">
        <m.div className="absolute inset-0" style={reduce ? undefined : { y: photoY }}>
          <div className="absolute -inset-y-[6%] inset-x-0 animate-zoom-out">
            <Photo photo="accra" priority sizes="(max-width: 1024px) 90vw, 560px" />
          </div>
        </m.div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-navy-950/20" />
        <p className="absolute bottom-5 left-6 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          Accra · Built here, for here
        </p>
      </div>

      {/* Floating product moments (decorative) */}
      <m.div
        aria-hidden="true"
        style={reduce ? undefined : { y: cardY }}
        className="absolute left-3 top-[18%] sm:-left-10"
      >
        <div className="animate-fade-up" style={{ animationDelay: "1.1s" }}>
          <div className="animate-float-y rounded-2xl bg-white p-3.5 pr-5 text-navy-950 shadow-float">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <div>
                <p className="text-[11px] text-ink-muted">Claim #4821</p>
                <p className="text-sm font-semibold">Approved automatically</p>
              </div>
            </div>
          </div>
        </div>
      </m.div>

      <m.div
        aria-hidden="true"
        style={reduce ? undefined : { y: cardY }}
        className="absolute right-3 bottom-[22%] sm:-right-8"
      >
        <div className="animate-fade-up" style={{ animationDelay: "1.35s" }}>
          <div className="animate-float-y rounded-2xl border border-white/15 bg-navy-950/80 p-4 text-white shadow-float backdrop-blur-md [animation-delay:-3s]">
            <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-navy-300">
              <Lock className="h-3 w-3 text-gold-400" /> Audit trail
            </p>
            <p className="mt-1.5 font-serif text-2xl leading-none">
              Every action<span className="text-gold-300">.</span>
            </p>
            <p className="mt-1 text-[11px] text-navy-300">Logged and traceable</p>
          </div>
        </div>
      </m.div>
    </div>
  );
}
