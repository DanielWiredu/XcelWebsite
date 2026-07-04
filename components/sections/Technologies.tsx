import { ShieldCheck, Cpu, Cloud, Database } from "lucide-react";
import { techStack, values } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

const groupIcons = [Cpu, Cpu, Database, Cloud];

export function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden py-24 sm:py-28">
      {/* Dark premium band */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 20% 0%, rgba(37,99,235,0.28) 0%, transparent 60%), radial-gradient(50% 50% at 90% 100%, rgba(68,83,184,0.28) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
            Technology
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            A modern, battle-tested{" "}
            <span className="bg-gradient-to-r from-brand-300 to-gold-300 bg-clip-text text-transparent">
              engineering stack
            </span>
          </h2>
          <p className="text-balance text-base leading-relaxed text-navy-200 sm:text-lg">
            We build on proven technologies and cloud platforms — chosen for scalability,
            security, and long-term maintainability.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, i) => {
            const Icon = groupIcons[i % groupIcons.length];
            return (
              <StaggerItem key={group.category}>
                <div className="h-full rounded-4xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.07]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-navy-600 text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white">
                    {group.category}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-navy-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Values strip */}
        <Reveal className="mt-14 rounded-4xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
          <div className="flex flex-col items-center gap-2 text-center">
            <ShieldCheck className="h-6 w-6 text-gold-300" />
            <p className="font-display text-lg font-semibold text-white">
              What we stand for
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center sm:text-left">
                <p className="font-display text-base font-bold text-brand-200">{v.title}</p>
                <p className="mt-1 text-sm text-navy-200">{v.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
