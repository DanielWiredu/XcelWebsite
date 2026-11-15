import type { Metadata } from "next";
import { services, techStack } from "@/lib/content";
import { HeaderPhoto, PageHeader } from "@/components/ui/PageHeader";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Eyebrow } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RevealPhoto } from "@/components/ui/RevealPhoto";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web applications, mobile apps, enterprise and financial systems, integrations, BI and security, built by Xcel iSolutions for regulated industries.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={["Everything it takes to ", { em: "go digital, properly." }]}
        lead="Six disciplines, one team, from first workshop to long-term support."
      />
      <HeaderPhoto photo="collaboration" />

      {/* Services as an editorial index */}
      <section aria-label="What we offer" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger as="ol" className="border-t border-navy-900/10">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <StaggerItem
                  as="li"
                  key={s.title}
                  className="group grid gap-4 border-b border-navy-900/10 py-10 sm:grid-cols-[4rem_1fr] lg:grid-cols-[5rem_1.1fr_1fr_auto] lg:items-center lg:gap-10"
                >
                  <span className="font-mono text-sm text-gold-700">0{i + 1}</span>
                  <h2 className="font-serif text-4xl text-navy-950 transition-transform duration-500 ease-out-expo group-hover:translate-x-2 sm:text-5xl">
                    {s.title}
                  </h2>
                  <div className="sm:col-start-2 lg:col-start-auto">
                    <p className="text-lg leading-relaxed text-ink-soft">{s.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <li key={f} className="rounded-full border border-navy-900/15 px-3 py-1 text-xs font-medium text-ink-soft">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="hidden h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-navy-950 lg:flex">
                    <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <Process showLink={false} />

      {/* Technology */}
      <section aria-label="Technology" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <Eyebrow>Technology</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md text-navy-950">
                Proven tools, <span className="italic text-gold-600">chosen for the long run.</span>
              </h2>
            </Reveal>
            <dl className="mt-12 space-y-8">
              {techStack.map((g, i) => (
                <Reveal key={g.category} delay={i * 0.06} className="grid gap-3 border-t border-navy-900/10 pt-6 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">{g.category}</dt>
                  <dd className="text-lg text-navy-950">{g.items.join(" · ")}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <RevealPhoto photo="laptopPortrait" className="aspect-[4/5] shadow-card lg:ml-auto lg:w-[85%]" />
        </div>
      </section>

      <Faq />
    </>
  );
}
