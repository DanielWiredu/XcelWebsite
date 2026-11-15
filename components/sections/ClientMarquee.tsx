"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { clients } from "@/lib/content";

/** Slow-scrolling client names. Pauses on hover/focus, with an explicit pause control. */
export function ClientMarquee({ title = "Trusted by insurers, clinics and institutions across Ghana" }: { title?: string }) {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="clients-title" className="border-b border-navy-900/[0.07] bg-paper py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <h2 id="clients-title" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          {title}
        </h2>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Play client list animation" : "Pause client list animation"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-900/15 text-ink-soft transition-colors hover:border-navy-900/40 hover:text-navy-950"
        >
          {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
        </button>
      </div>

      <div className="mask-fade-x mt-8 overflow-hidden">
        <ul
          className="pause-on-hover flex w-max animate-marquee items-center"
          style={{ animationPlayState: paused ? "paused" : undefined }}
        >
          {[...clients, ...clients].map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length ? true : undefined}
              className="flex items-center whitespace-nowrap px-6 font-serif text-2xl text-navy-900/80 sm:px-10 sm:text-3xl"
            >
              {name}
              <span aria-hidden="true" className="ml-12 inline-block h-2 w-2 rotate-45 bg-gold-400 sm:ml-20" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
