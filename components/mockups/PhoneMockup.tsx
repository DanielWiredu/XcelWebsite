"use client";

import { m } from "framer-motion";
import { Check, FileText, Hospital, Plus } from "lucide-react";
import { EASE_OUT } from "../ui/Reveal";

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

/** Member-facing mobile app: capture a claim, track status. */
export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Illustration of a mobile app where a member submits a medical claim and tracks its approval"
      className={`relative mx-auto w-[15.5rem] rounded-[2.6rem] bg-navy-950 p-2.5 shadow-float ring-1 ring-white/10 sm:w-[17rem] ${className}`}
    >
      <div aria-hidden="true" className="overflow-hidden rounded-[2.1rem] bg-paper">
        <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-navy-900">
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-navy-950" />
          <span>100%</span>
        </div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          className="space-y-3 px-4 pb-6 pt-4"
        >
          <m.div variants={item}>
            <p className="text-[10px] text-ink-muted">Good morning,</p>
            <p className="font-serif text-2xl leading-tight text-navy-900">Ama</p>
          </m.div>

          <m.div variants={item} className="rounded-2xl bg-navy-950 p-4 text-white">
            <p className="text-[10px] uppercase tracking-wider text-navy-300">Benefit balance</p>
            <p className="mt-1 text-xl font-semibold tabular-nums">GH₵ 8,450</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <m.div
                className="h-full origin-left rounded-full bg-gold-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0.68 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.6, ease: EASE_OUT }}
              />
            </div>
          </m.div>

          <m.div variants={item} className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2 rounded-2xl bg-gold-400 p-3 text-navy-950">
              <Plus className="h-4 w-4" />
              <span className="text-[11px] font-semibold">New claim</span>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-3 text-navy-900 ring-1 ring-navy-900/5">
              <Hospital className="h-4 w-4" />
              <span className="text-[11px] font-semibold">Find provider</span>
            </div>
          </m.div>

          <m.p variants={item} className="pt-1 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
            Recent claims
          </m.p>

          {[
            { name: "Ridge Clinic", amt: "GH₵ 420", done: true },
            { name: "City Pharmacy", amt: "GH₵ 96", done: true },
            { name: "Lab Services", amt: "GH₵ 210", done: false },
          ].map((c) => (
            <m.div key={c.name} variants={item} className="flex items-center gap-3 rounded-xl bg-white p-2.5 ring-1 ring-navy-900/5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
                <FileText className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold">{c.name}</p>
                <p className="text-[10px] text-ink-muted tabular-nums">{c.amt}</p>
              </div>
              {c.done ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
              ) : (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-gold-400 border-t-transparent [animation-duration:1.6s]" />
              )}
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  );
}
