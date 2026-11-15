"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, Linkedin, X } from "lucide-react";
import { team, type TeamMember } from "@/lib/content";
import { EASE_OUT, Stagger, StaggerItem } from "../ui/Reveal";

export function Team() {
  const [active, setActive] = useState<TeamMember | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [active]);

  const open = (member: TeamMember, el: HTMLElement) => {
    triggerRef.current = el;
    setActive(member);
  };

  return (
    <>
      <Stagger className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <StaggerItem key={member.name}>
            <button
              type="button"
              onClick={(e) => open(member, e.currentTarget)}
              aria-haspopup="dialog"
              className="group block w-full text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-navy-100">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover object-top grayscale-[35%] transition-all duration-[1.2s] ease-out-expo group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-5 left-5 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-950 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  Read profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-5 font-serif text-3xl text-navy-950">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold-700">{member.role}</p>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">{member.bio}</p>
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {active && (
          <m.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-end justify-center bg-navy-950/75 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <m.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-modal-name"
              className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] bg-paper shadow-float sm:rounded-[2rem]"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-soft backdrop-blur transition-colors hover:bg-navy-950 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid overflow-y-auto sm:grid-cols-[15rem_1fr]">
                <div className="relative h-64 shrink-0 bg-navy-100 sm:h-auto">
                  <Image
                    src={active.image}
                    alt={`Portrait of ${active.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{active.role}</p>
                  <h3 id="team-modal-name" className="mt-2 pr-10 font-serif text-4xl leading-tight text-navy-950">
                    {active.name}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {active.credentials.map((c) => (
                      <li key={c} className="rounded-full border border-navy-900/15 px-3 py-1 text-xs font-medium text-ink-soft">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                    {active.fullBio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <a
                    href={active.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-navy-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                  >
                    <Linkedin aria-hidden="true" className="h-4 w-4" />
                    LinkedIn profile
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
