import type { Metadata } from "next";
import { aboutStory, company, values } from "@/lib/content";
import { HeaderPhoto, PageHeader } from "@/components/ui/PageHeader";
import { Team } from "@/components/sections/Team";
import { Eyebrow } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SplitHeadline } from "@/components/ui/SplitHeadline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Xcel iSolutions is a Ghanaian-owned technology company led by people who spent decades inside the industries we build for. Meet the team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={["Driven by care. ", { em: "Powered by innovation." }]}
        lead="A Ghanaian-owned technology company, built by people who know your industry from the inside."
      />
      <HeaderPhoto photo="accraStreet" />

      {/* Story */}
      <section aria-label="Our story" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
            </Reveal>
            <SplitHeadline
              parts={["Built here, ", { em: "for here." }]}
              className="mt-6 font-serif text-display-lg text-navy-950"
              emClassName="italic text-gold-600"
            />
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {aboutStory.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-xl leading-relaxed text-ink-soft text-pretty">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="grid gap-6 border-t border-navy-900/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">Mission</p>
                <p className="mt-3 font-serif text-2xl leading-snug text-navy-950">{company.mission}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">Vision</p>
                <p className="mt-3 font-serif text-2xl leading-snug text-navy-950">{company.vision}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-label="Our values" className="relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-lines opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow tone="light">What we stand for</Eyebrow>
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <StaggerItem key={v.title} className="bg-navy-950 p-8 sm:p-10">
                <span className="font-mono text-xs text-gold-300">0{i + 1}</span>
                <h2 className="mt-8 font-serif text-4xl">{v.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-300">{v.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section id="team" aria-label="Our team" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Reveal>
                <Eyebrow>The team</Eyebrow>
              </Reveal>
              <SplitHeadline
                parts={["The people ", { em: "behind the platforms." }]}
                className="mt-6 max-w-3xl font-serif text-display-lg text-navy-950"
                emClassName="italic text-gold-600"
              />
            </div>
            <Reveal>
              <p className="max-w-sm text-lg leading-relaxed text-ink-soft">
                Finance, operations, technology and people leadership in one team.
              </p>
            </Reveal>
          </div>
          <Team />
        </div>
      </section>
    </>
  );
}
