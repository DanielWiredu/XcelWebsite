"use client";

import { AnimatePresence, m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { chapters, type Chapter } from "@/lib/content";
import { AuditMockup } from "../mockups/AuditMockup";
import { ClaimsMockup } from "../mockups/ClaimsMockup";
import { DashboardMockup } from "../mockups/DashboardMockup";
import { PhoneMockup } from "../mockups/PhoneMockup";
import { Eyebrow } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { EASE_OUT, Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

/** The visual "stage" for each chapter: a navy set with the product in front. */
function Stage({ id, className = "" }: { id: Chapter["id"]; className?: string }) {
  return (
    <div className={`relative isolate flex items-center justify-center overflow-hidden rounded-[2rem] bg-navy-950 p-5 sm:p-10 ${className}`}>
      {id === "capture" ? (
        <>
          <div className="absolute inset-0 -z-10 opacity-45">
            <Photo photo="mobileUser" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/30" />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-lines opacity-50" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(68,83,184,0.45) 0%, transparent 70%)" }}
          />
        </>
      )}
      <div className="w-full max-w-lg">
        {id === "capture" && <PhoneMockup />}
        {id === "automate" && <ClaimsMockup />}
        {id === "decide" && <DashboardMockup />}
        {id === "protect" && <AuditMockup />}
      </div>
    </div>
  );
}

function ChapterBlock({ chapter, index, onActive }: { chapter: Chapter; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  // "Active" when the block crosses the middle band of the viewport
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="py-10 lg:flex lg:min-h-[78svh] lg:items-center lg:py-0">
      <div>
        <Reveal>
          <p className="flex items-center gap-3 text-sm font-semibold text-gold-700">
            <span className="font-mono">0{index + 1}</span>
            <span aria-hidden="true" className="h-px w-8 bg-gold-500/60" />
            <span className="uppercase tracking-[0.2em]">{chapter.label}</span>
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-5 max-w-md font-serif text-4xl leading-[1.05] text-navy-950 sm:text-5xl">{chapter.title}</h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-soft">{chapter.body}</p>
        </Reveal>
        {/* Mobile/tablet: the stage sits inline under its chapter */}
        <Reveal delay={0.1} className="mt-10 lg:hidden">
          <Stage id={chapter.id} className="min-h-[26rem]" />
        </Reveal>
      </div>
    </div>
  );
}

export function Chapters() {
  const [active, setActive] = useState(0);

  return (
    <section aria-label="What we build" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>What we build</Eyebrow>
          </Reveal>
          <SplitHeadline
            parts={["From paper ", { em: "to platform." }]}
            className="mt-6 font-serif text-display-lg text-navy-950"
            emClassName="italic text-gold-600"
          />
        </div>

        <div className="mt-8 grid lg:mt-0 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative lg:pl-12">
            {/* Progress rail (desktop) */}
            <div aria-hidden="true" className="absolute bottom-[20svh] left-0 top-[20svh] hidden w-px bg-navy-900/10 lg:block">
              <m.div
                className="absolute inset-x-0 top-0 origin-top bg-gold-500"
                animate={{ scaleY: (active + 1) / chapters.length }}
                transition={{ duration: 0.8, ease: EASE_OUT }}
                style={{ height: "100%" }}
              />
            </div>
            {chapters.map((c, i) => (
              <ChapterBlock key={c.id} chapter={c} index={i} onActive={setActive} />
            ))}
          </div>

          {/* Desktop: one sticky stage that crossfades between chapters */}
          <div className="hidden lg:block">
            <div className="sticky top-[12svh] flex h-[76svh] items-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <m.div
                  key={chapters[active].id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.35 } }}
                  transition={{ duration: 0.7, ease: EASE_OUT }}
                  className="w-full"
                >
                  <Stage id={chapters[active].id} className="h-[68svh] max-h-[40rem] min-h-[30rem]" />
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
