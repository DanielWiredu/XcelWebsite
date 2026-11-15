"use client";

import { m } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { EASE_OUT } from "../ui/Reveal";
import { AppWindow } from "./Frame";

const bars = [42, 58, 50, 66, 61, 74, 70, 86, 80, 92, 88, 97];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

/** Executive BI dashboard: KPI tiles, growing bars, and a drawn trend line. */
export function DashboardMockup({ className = "" }: { className?: string }) {
  const points = bars.map((b, i) => `${(i / (bars.length - 1)) * 100},${100 - b * 0.9}`).join(" ");

  return (
    <AppWindow
      className={className}
      title="insights.xcel / executive overview"
      label="Illustration of an executive dashboard with key figures and a monthly chart trending upward"
    >
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ staggerChildren: 0.05 }}
        className="p-4"
      >
        <div className="grid grid-cols-3 gap-2">
          {[
            { k: "Claims processed", v: "12,480" },
            { k: "Avg. turnaround", v: "1.8 days" },
            { k: "Premiums (GH₵)", v: "4.2M" },
          ].map((t) => (
            <m.div
              key={t.k}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } } }}
              className="rounded-xl bg-paper/80 p-2.5 ring-1 ring-navy-900/5"
            >
              <p className="truncate text-[9px] uppercase tracking-wider text-ink-muted">{t.k}</p>
              <p className="mt-1 font-serif text-lg leading-none tabular-nums sm:text-xl">{t.v}</p>
            </m.div>
          ))}
        </div>

        <div className="mt-3 rounded-xl p-3 ring-1 ring-navy-900/5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold">Monthly volume</p>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
              <TrendingUp className="h-3 w-3" /> +18%
            </span>
          </div>
          <div className="relative mt-3 h-28 sm:h-32">
            <div className="absolute inset-0 flex items-end gap-1.5">
              {bars.map((b, i) => (
                <m.div
                  key={i}
                  className={`flex-1 origin-bottom rounded-t-[3px] ${i === bars.length - 1 ? "bg-gold-400" : "bg-navy-600/80"}`}
                  style={{ height: `${b}%` }}
                  variants={{
                    hidden: { scaleY: 0 },
                    show: { scaleY: 1, transition: { duration: 0.9, ease: EASE_OUT } },
                  }}
                />
              ))}
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
              <m.polyline
                points={points}
                fill="none"
                stroke="#f4b728"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                strokeLinejoin="round"
                variants={{
                  hidden: { pathLength: 0 },
                  show: { pathLength: 1, transition: { duration: 1.6, delay: 0.5, ease: [0.65, 0, 0.35, 1] } },
                }}
              />
            </svg>
          </div>
          <div className="mt-1.5 flex gap-1.5">
            {months.map((mo, i) => (
              <span key={i} className="flex-1 text-center text-[9px] text-ink-muted">
                {mo}
              </span>
            ))}
          </div>
        </div>
      </m.div>
    </AppWindow>
  );
}
