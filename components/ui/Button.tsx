import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "gold" | "dark" | "ghost-light" | "ghost-dark";

const styles: Record<Variant, string> = {
  gold: "bg-gold-400 text-navy-950 hover:bg-gold-300",
  dark: "bg-navy-950 text-white hover:bg-navy-800",
  "ghost-light": "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
  "ghost-dark": "border border-navy-900/20 text-navy-900 hover:border-navy-900/50 hover:bg-navy-900/[0.03]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
};

export function ButtonLink({ href, children, variant = "gold", className = "", icon = true }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-300 ease-out-expo active:scale-[0.98] ${styles[variant]} ${className}`}
    >
      {children}
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}

/** Small uppercase label with a gold diamond, used above headings. */
export function Eyebrow({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-gold-300" : "text-gold-700"
      } ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-current" />
      {children}
    </p>
  );
}
