import type { Metadata } from "next";
import { industries, projects } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { Eyebrow } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from Xcel iSolutions: healthcare claims platforms, health fund digitization and IFRS 17 financial systems for Ghana's regulated industries.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={["Systems that run ", { em: "real institutions." }]}
        lead="A few of the platforms we've designed, built and continue to support."
      />

      <section aria-label="Case studies" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} className={i === 0 ? "lg:col-span-2" : ""} delay={i === 0 ? 0 : (i - 1) * 0.1}>
              <ProjectCard project={p} index={i} feature={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-label="Industries we serve" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-serif text-display-md text-navy-950">
              Built for industries where <span className="italic text-gold-600">getting it right</span> is not optional.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name} className="group bg-white p-8 transition-colors duration-500 hover:bg-paper">
                  <Icon aria-hidden="true" className="h-6 w-6 text-gold-600" strokeWidth={1.5} />
                  <h3 className="mt-6 font-serif text-2xl text-navy-950">{ind.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{ind.blurb}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <ClientMarquee title="Organizations we've worked with" />
      <Testimonials />
    </>
  );
}
