"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Linkedin, X } from "lucide-react";
import { team, type TeamMember } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Stagger, StaggerItem } from "../ui/Reveal";

export function Team() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  // Lock body scroll and allow Escape to dismiss while the profile popup is open
  useEffect(() => {
    if (!activeMember) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMember(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeMember]);

  return (
    <section id="team" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-50/60 via-white to-white"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our team"
          title={
            <>
              The people behind{" "}
              <span className="text-gradient">the platforms</span>
            </>
          }
          description="Leadership, engineering, and advisory expertise — combining deep finance, operations, technology, and people strategy, with a proven track record across Ghana's health and financial sectors."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <article
                role="button"
                tabIndex={0}
                onClick={() => setActiveMember(member)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveMember(member);
                  }
                }}
                aria-haspopup="dialog"
                aria-label={`View full profile of ${member.name}`}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-4xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:-translate-y-1 focus-visible:shadow-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-100">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role} at Xcel iSolutions`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${member.name}'s LinkedIn profile (opens in a new tab)`}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-brand-600 focus-visible:bg-brand-600"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-xl font-bold tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand-200">{member.role}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-navy-500">{member.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {member.credentials.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    View full profile
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {activeMember && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveMember(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              key="dialog"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-modal-name"
              className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-4xl bg-white shadow-card"
            >
              <button
                type="button"
                onClick={() => setActiveMember(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy-700 shadow-soft backdrop-blur transition-colors hover:bg-navy-900 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto">
                <div className="relative h-56 shrink-0 overflow-hidden bg-navy-100 sm:h-64">
                  <Image
                    src={activeMember.image}
                    alt={`Portrait of ${activeMember.name}, ${activeMember.role} at Xcel iSolutions`}
                    fill
                    sizes="(max-width: 640px) 100vw, 640px"
                    className="object-cover object-top"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3
                        id="team-modal-name"
                        className="font-display text-2xl font-bold tracking-tight text-white"
                      >
                        {activeMember.name}
                      </h3>
                      <p className="text-sm font-semibold text-brand-200">
                        {activeMember.role}
                      </p>
                    </div>
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${activeMember.name}'s LinkedIn profile (opens in a new tab)`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-brand-600"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 text-sm leading-relaxed text-navy-600 sm:text-base">
                    {activeMember.fullBio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {activeMember.credentials.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
