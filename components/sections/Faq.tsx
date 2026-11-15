"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Eyebrow } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section aria-label="Frequently asked questions" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 font-serif text-display-md text-navy-950">
              Good to <span className="italic text-gold-600">know.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal className="divide-y divide-navy-900/10 border-y border-navy-900/10 lg:col-span-8">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium text-navy-950 sm:text-xl">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-out-expo ${
                        isOpen ? "rotate-45 border-gold-400 bg-gold-400 text-navy-950" : "border-navy-900/20 text-navy-900"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                {/* grid-rows trick: smooth height without animating `height` in JS */}
                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pr-12 text-base leading-relaxed text-ink-soft">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
