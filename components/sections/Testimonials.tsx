"use client";

import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/content";
import { Eyebrow } from "../ui/Button";
import { EASE_OUT, Reveal } from "../ui/Reveal";

/** One large editorial quote at a time; user-controlled (no autoplay). */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <section aria-label="What clients say" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-center justify-between">
          <Eyebrow>In their words</Eyebrow>
          <p className="font-mono text-sm text-ink-muted" aria-hidden="true">
            0{index + 1} / 0{total}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 min-h-[19rem] sm:min-h-[17rem]">
            <span aria-hidden="true" className="absolute -left-2 -top-10 select-none font-serif text-[9rem] leading-none text-gold-400/40 sm:-left-10">
              &ldquo;
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <m.figure
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                aria-live="polite"
              >
                <blockquote className="relative font-serif text-3xl leading-[1.2] text-navy-950 text-pretty sm:text-[2.6rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
                  <span>
                    <span className="block font-semibold text-navy-950">{t.author}</span>
                    <span className="block text-sm text-ink-muted">{t.role}</span>
                  </span>
                </figcaption>
              </m.figure>
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy-900/15 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy-900/15 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className="ml-4 flex gap-2" aria-hidden="true">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-gold-500" : "w-3 bg-navy-900/15"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
