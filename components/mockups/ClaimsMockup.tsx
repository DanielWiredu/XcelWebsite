"use client";

import { AnimatePresence, m, useInView, useReducedMotion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AppWindow, StatusChip } from "./Frame";

const rows = [
  { id: "#4821", member: "K. Mensah", provider: "Ridge Clinic", amt: "1,240.00" },
  { id: "#4822", member: "A. Owusu", provider: "City Pharmacy", amt: "96.50" },
  { id: "#4823", member: "E. Asante", provider: "Korle Lab", amt: "410.00" },
  { id: "#4824", member: "N. Boateng", provider: "Ridge Clinic", amt: "2,980.00", flag: true },
  { id: "#4825", member: "Y. Darko", provider: "Medcare Plus", amt: "355.00" },
];

const rules = ["Member eligible", "Provider verified", "Within benefit limit", "No duplicate found"];

/** Claims engine: statuses resolve one by one as rules are applied. */
export function ClaimsMockup({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [resolved, setResolved] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setResolved(rows.length);
      return;
    }
    const t = setInterval(() => {
      setResolved((n) => {
        if (n >= rows.length) {
          clearInterval(t);
          return n;
        }
        return n + 1;
      });
    }, 650);
    return () => clearInterval(t);
  }, [inView, reduce]);

  return (
    <div ref={ref} className={className}>
      <AppWindow
        title="claims.xcel / adjudication queue"
        label="Illustration of a claims adjudication screen where each claim is checked against rules and approved automatically, with one flagged for review"
      >
        <div className="p-4">
          <div className="mb-3 flex items-baseline justify-between">
            <p className="text-sm font-semibold">Today&apos;s queue</p>
            <p className="text-[11px] text-ink-muted tabular-nums">
              {resolved}/{rows.length} processed
            </p>
          </div>
          <ul className="divide-y divide-navy-900/[0.06]">
            {rows.map((r, i) => {
              const done = i < resolved;
              return (
                <li key={r.id} className="flex items-center gap-3 py-2.5 text-[11px]">
                  <span className="w-10 shrink-0 font-mono text-ink-muted">{r.id}</span>
                  <span className="min-w-0 flex-1 truncate font-medium">
                    {r.member}
                    <span className="hidden text-ink-muted sm:inline"> · {r.provider}</span>
                  </span>
                  <span className="hidden w-16 shrink-0 text-right tabular-nums text-ink-soft sm:block">{r.amt}</span>
                  <span className="flex w-[4.75rem] shrink-0 justify-end">
                    <AnimatePresence mode="wait" initial={false}>
                      <m.span
                        key={done ? "done" : "wait"}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.25 }}
                      >
                        {!done ? (
                          <StatusChip tone="wait">Checking</StatusChip>
                        ) : r.flag ? (
                          <StatusChip tone="flag">Review</StatusChip>
                        ) : (
                          <StatusChip tone="ok">Approved</StatusChip>
                        )}
                      </m.span>
                    </AnimatePresence>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Rules engine sits below the queue so the mockup works at any width */}
        <div className="border-t border-navy-900/[0.06] bg-paper/60 px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold">
              <ShieldCheck className="h-3.5 w-3.5 text-navy-500" /> Rules engine
            </p>
            <p className="text-[10px] text-ink-muted">
              Red flags today: <span className="font-semibold text-red-700 tabular-nums">{resolved >= 4 ? 1 : 0}</span>
            </p>
          </div>
          <ul className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {rules.map((rule, i) => (
              <li key={rule} className="flex items-center gap-2 text-[11px] text-ink-soft">
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                    resolved > i ? "bg-emerald-500 text-white" : "bg-navy-900/10 text-transparent"
                  }`}
                >
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="truncate">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </AppWindow>
    </div>
  );
}
