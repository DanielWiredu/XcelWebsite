"use client";

import { m } from "framer-motion";
import { KeyRound, Lock, ShieldCheck, UserCheck } from "lucide-react";
import { EASE_OUT } from "../ui/Reveal";
import { AppWindow } from "./Frame";

const log = [
  { t: "09:41", who: "K. Mensah", what: "approved claim #4821", icon: UserCheck },
  { t: "09:38", who: "System", what: "flagged #4824 · duplicate check", icon: ShieldCheck },
  { t: "09:30", who: "A. Owusu", what: "signed in · 2FA verified", icon: KeyRound },
  { t: "09:12", who: "Admin", what: "changed role: Finance → Read-only", icon: Lock },
];

/** Security: encrypted, role-based, with an append-only audit trail. */
export function AuditMockup({ className = "" }: { className?: string }) {
  return (
    <AppWindow
      className={className}
      title="admin.xcel / audit trail"
      label="Illustration of a security audit trail recording each sign-in, approval and permission change"
    >
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {["AES-256 at rest", "TLS in transit", "Role-based access", "2FA"].map((b) => (
            <span key={b} className="inline-flex items-center gap-1 rounded-full bg-navy-950 px-2.5 py-1 text-[10px] font-semibold text-white">
              <Lock className="h-2.5 w-2.5 text-gold-400" />
              {b}
            </span>
          ))}
        </div>
        <m.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="relative mt-4 space-y-3 before:absolute before:bottom-2 before:left-[0.9rem] before:top-2 before:w-px before:bg-navy-900/10"
        >
          {log.map((l) => {
            const Icon = l.icon;
            return (
              <m.li
                key={l.t}
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } } }}
                className="relative flex items-start gap-3"
              >
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-navy-600 ring-1 ring-navy-900/10">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 pt-1 text-[11px]">
                  <p className="truncate">
                    <span className="font-semibold">{l.who}</span> <span className="text-ink-soft">{l.what}</span>
                  </p>
                  <p className="font-mono text-[10px] text-ink-muted">{l.t} · logged &amp; immutable</p>
                </div>
              </m.li>
            );
          })}
        </m.ol>
      </div>
    </AppWindow>
  );
}
