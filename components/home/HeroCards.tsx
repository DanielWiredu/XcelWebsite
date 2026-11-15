"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Check, ShieldCheck } from "lucide-react";

/**
 * Floating "product moments" that orbit the hero's diamond animation.
 *
 * Three layers per card, so the transforms never fight:
 *   1. outer: pointer parallax (desktop only), driven by CSS variables
 *   2. middle: springy pop-in entrance, staggered
 *   3. inner: a slow, looping drift, each card on its own path and tempo
 * Everything is CSS transforms, so it is cheap on phones, plays before
 * hydration, and stops under the global reduced-motion rule.
 */
export function HeroCards({ className = "" }: { className?: string }) {
  const stage = useRef<HTMLDivElement>(null);

  // Pointer parallax: only for fine pointers with motion allowed
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={stage} aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
      {/* Phone notification */}
      <Floating depth={-18} delay={1.0} drift="animate-drift-a" className="left-0 top-0 sm:left-[4%] lg:left-[2%] lg:top-0">
        <div className="w-[15.5rem] rounded-2xl bg-white/95 p-3.5 text-navy-950 shadow-float ring-1 ring-white/40 backdrop-blur">
          <div className="flex items-center gap-2 text-[10px] text-ink-muted">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-navy-950">
              <MiniMark />
            </span>
            <span className="font-semibold uppercase tracking-wider">Xcel Health</span>
            <span className="ml-auto">now</span>
          </div>
          <p className="mt-2 text-sm font-semibold">Claim approved</p>
          <p className="text-xs leading-snug text-ink-soft">Your claim of GH₵ 420 at Ridge Clinic has been approved.</p>
        </div>
      </Floating>

      {/* Board report mini chart */}
      <Floating depth={26} delay={1.2} drift="animate-drift-b" className="right-0 top-[30%] lg:right-0 lg:top-[26%]">
        <div className="w-[12.5rem] rounded-2xl border border-white/15 bg-navy-900/70 p-4 text-white shadow-float backdrop-blur-md">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-navy-300">Board report</p>
          <div className="mt-3 flex h-14 items-end gap-1.5">
            {[38, 52, 46, 64, 58, 80, 92].map((h, i, arr) => (
              <span
                key={i}
                className={`flex-1 rounded-t-[3px] ${i === arr.length - 1 ? "bg-gold-400" : "bg-navy-400/80"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-navy-200">
            <Check className="h-3.5 w-3.5 text-gold-400" strokeWidth={3} /> Ready to share
          </p>
        </div>
      </Floating>

      {/* 2FA sign-in pill */}
      <Floating depth={-30} delay={1.4} drift="animate-drift-c" className="bottom-0 left-[4%] lg:bottom-[16%] lg:left-[6%]">
        <div className="flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 text-navy-950 shadow-float ring-1 ring-white/40">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">Signed in securely</span>
            <span className="block text-[11px] text-ink-muted">2FA verified · session logged</span>
          </span>
        </div>
      </Floating>

      {/* IFRS 17 run */}
      <Floating
        depth={14}
        delay={1.6}
        drift="animate-drift-d"
        className="hidden sm:block sm:left-[40%] sm:top-[44%] lg:left-auto lg:top-auto lg:bottom-0 lg:right-[10%]"
      >
        <div className="w-[11.5rem] rounded-2xl border border-gold-400/30 bg-navy-950/80 p-4 text-white shadow-float backdrop-blur-md">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-navy-300">
            <span>IFRS 17 · Q3</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-navy-950">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
          </div>
          <p className="mt-2 font-serif text-3xl leading-none text-gold-300">Balanced</p>
          <p className="mt-1.5 font-mono text-[10px] text-navy-300">variance 0.00</p>
        </div>
      </Floating>
    </div>
  );
}

function Floating({
  children,
  depth,
  delay,
  drift,
  className,
}: {
  children: ReactNode;
  /** Pixels of parallax travel at the screen edge; sign sets direction. */
  depth: number;
  delay: number;
  drift: string;
  className: string;
}) {
  const parallax = {
    transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
  } as CSSProperties;

  return (
    <div className={`absolute transition-transform duration-700 ease-out ${className}`} style={parallax}>
      <div className="animate-pop-in" style={{ animationDelay: `${delay}s` }}>
        {/* Negative delay starts each loop mid-path so they never move in sync */}
        <div className={drift} style={{ animationDelay: `${-delay * 3}s` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Tiny twin-diamond glyph for the notification's app icon. */
function MiniMark() {
  return (
    <svg viewBox="0 0 56 40" className="h-2.5 w-auto">
      <rect x="4" y="4" width="24" height="24" rx="4" transform="rotate(45 16 16)" fill="none" stroke="#8f9fe0" strokeWidth="5" />
      <rect x="20" y="4" width="24" height="24" rx="4" transform="rotate(45 32 16)" fill="none" stroke="#f4b728" strokeWidth="5" />
    </svg>
  );
}
