"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/content";
import { Eyebrow } from "../ui/Button";
import { EASE_OUT, Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

/** Dark band: six steps along a gold line that draws itself across. */
export function Process({ showLink = true }: { showLink?: boolean }) {
  return (
    <section aria-label="How we work" className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-lines opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="light">How we work</Eyebrow>
            </Reveal>
            <SplitHeadline
              parts={["A clear path from first workshop ", { em: "to go-live." }]}
              className="mt-6 font-serif text-display-md text-white"
              emClassName="italic text-gold-300"
            />
          </div>
          {showLink && (
            <Reveal>
              <Link
                href="/services"
                className="group inline-flex min-h-11 items-center gap-2 border-b border-white/30 pb-1 text-[15px] font-semibold transition-colors hover:border-gold-400"
              >
                Our services
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}
        </div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ staggerChildren: 0.1 }}
          className="relative mt-16 lg:mt-20"
        >
          {/* Drawn timeline (desktop) */}
          <m.span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[0.3rem] hidden h-px origin-left bg-gradient-to-r from-gold-400 via-gold-400/60 to-white/10 lg:block"
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.8, ease: EASE_OUT } } }}
          />
          <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-6">
          {processSteps.map((s) => (
            <m.li
              key={s.step}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } } }}
              className="relative border-l border-white/10 pl-5 lg:border-l-0 lg:pl-0"
            >
              <span aria-hidden="true" className="absolute -left-[5px] top-1 block h-2.5 w-2.5 rotate-45 bg-gold-400 lg:static lg:mb-8" />
              <p className="font-mono text-xs text-gold-300">
                {s.step} · {s.duration}
              </p>
              <h3 className="mt-3 font-serif text-3xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{s.description}</p>
            </m.li>
          ))}
          </ol>
        </m.div>
      </div>
    </section>
  );
}
