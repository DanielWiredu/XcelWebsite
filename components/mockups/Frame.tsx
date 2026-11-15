import type { ReactNode } from "react";

/** Browser-window chrome around an app mockup. */
export function AppWindow({
  title,
  children,
  className = "",
  label,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  /** Accessible description of what the illustration shows. */
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`overflow-hidden rounded-2xl border border-navy-900/10 bg-white text-navy-900 shadow-card ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-navy-900/[0.07] bg-paper/70 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-navy-900/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy-900/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold-400/70" />
        </div>
        <p className="truncate text-[11px] font-medium text-ink-muted">{title}</p>
        <span className="ml-auto shrink-0 rounded-full bg-navy-900/[0.05] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
          Demo data
        </span>
      </div>
      <div aria-hidden="true">{children}</div>
    </div>
  );
}

export function StatusChip({ tone, children }: { tone: "ok" | "wait" | "flag"; children: ReactNode }) {
  const map = {
    ok: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
    wait: "bg-gold-50 text-gold-800 ring-gold-600/20",
    flag: "bg-red-50 text-red-700 ring-red-600/15",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${map[tone]}`}>
      <span className="h-1 w-1 rounded-full bg-current" />
      {children}
    </span>
  );
}
