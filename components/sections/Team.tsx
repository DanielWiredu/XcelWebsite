import Image from "next/image";
import { Linkedin } from "lucide-react";
import { team } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Stagger, StaggerItem } from "../ui/Reveal";

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-50/60 via-white to-white"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The people behind{" "}
              <span className="text-gradient">the platforms</span>
            </>
          }
          description="A leadership team combining deep finance, operations, and engineering expertise — with a proven track record across Ghana's health and financial sectors."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-100">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role} at Xcel iSolutions`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-brand-600"
                  >
                    <Linkedin className="h-4 w-4" />
                  </span>
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
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
