"use client";

import { m } from "framer-motion";
import { Check } from "lucide-react";
import { EASE_OUT } from "../ui/Reveal";
import { AppWindow } from "./Frame";

const entries = [
  { acct: "Insurance contract liabilities", grp: "LRC", dr: "", cr: "1,284,500" },
  { acct: "Contractual service margin", grp: "CSM", dr: "", cr: "312,900" },
  { acct: "Risk adjustment", grp: "RA", dr: "", cr: "96,400" },
  { acct: "Claims incurred", grp: "LIC", dr: "842,150", cr: "" },
  { acct: "Insurance revenue", grp: "P&L", dr: "851,650", cr: "" },
];

/** IFRS 17 measurement view with reconciled general-ledger postings. */
export function LedgerMockup({ className = "" }: { className?: string }) {
  return (
    <AppWindow
      className={className}
      title="finance.xcel / IFRS 17 measurement"
      label="Illustration of an IFRS 17 finance screen showing reconciled general ledger postings"
    >
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-sm font-semibold">Q3 measurement run</p>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
            <Check className="h-3 w-3" strokeWidth={3} /> Balanced
          </span>
        </div>
        <table className="mt-3 w-full text-[11px]">
          <thead>
            <tr className="text-left text-[9px] uppercase tracking-wider text-ink-muted">
              <th className="pb-2 font-semibold">Account</th>
              <th className="hidden pb-2 font-semibold sm:table-cell">Group</th>
              <th className="pb-2 text-right font-semibold">Dr</th>
              <th className="pb-2 text-right font-semibold">Cr</th>
            </tr>
          </thead>
          <m.tbody
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          >
            {entries.map((e) => (
              <m.tr
                key={e.acct}
                variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } } }}
                className="border-t border-navy-900/[0.06]"
              >
                <td className="max-w-[9rem] truncate py-2 pr-2 font-medium sm:max-w-none">{e.acct}</td>
                <td className="hidden py-2 sm:table-cell">
                  <span className="rounded bg-navy-50 px-1.5 py-0.5 font-mono text-[10px] text-navy-600">{e.grp}</span>
                </td>
                <td className="py-2 text-right tabular-nums text-ink-soft">{e.dr}</td>
                <td className="py-2 text-right tabular-nums text-ink-soft">{e.cr}</td>
              </m.tr>
            ))}
          </m.tbody>
        </table>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-navy-950 px-3 py-2.5 text-white">
          <span className="text-[10px] uppercase tracking-wider text-navy-300">Variance</span>
          <span className="font-serif text-lg tabular-nums text-gold-300">0.00</span>
        </div>
      </div>
    </AppWindow>
  );
}
