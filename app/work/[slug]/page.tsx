import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/lib/content";
import { HeaderPhoto, PageHeader } from "@/components/ui/PageHeader";
import { ProjectMockup } from "@/components/mockups";
import { Photo } from "@/components/ui/Photo";
import { Eyebrow } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.hook} ${project.outcome}`,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const story = [
    { label: "The challenge", text: project.challenge },
    { label: "What we built", text: project.solution },
    { label: "The result", text: project.outcome },
  ];

  return (
    <>
      <PageHeader eyebrow={project.category} title={[project.name]} lead={project.hook}>
        <dl className="mt-12 flex animate-fade-up flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8" style={{ animationDelay: "0.55s" }}>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-navy-400">At a glance</dt>
            <dd className="mt-2 font-serif text-2xl text-gold-300">{project.metric}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-navy-400">Scope</dt>
            <dd className="mt-2 text-[15px] text-white">{project.scope.join(" · ")}</dd>
          </div>
        </dl>
      </PageHeader>
      <HeaderPhoto photo={project.image} />

      {/* Narrative: three short beats */}
      <section aria-label="Project story" className="bg-paper pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {story.map((beat, i) => (
              <Reveal key={beat.label} delay={i * 0.1}>
                <p className="flex items-center gap-3 text-sm font-semibold text-gold-700">
                  <span className="font-mono">0{i + 1}</span>
                  <span aria-hidden="true" className="h-px w-8 bg-gold-500/60" />
                  <span className="uppercase tracking-[0.2em]">{beat.label}</span>
                </p>
                <p className="mt-5 font-serif text-2xl leading-snug text-navy-950 sm:text-[1.7rem]">{beat.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product + highlights */}
      <section aria-label="Highlights" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-950 p-5 sm:p-10">
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-lines opacity-50" />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(68,83,184,0.45) 0%, transparent 70%)" }}
              />
              <ProjectMockup kind={project.mockup} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Highlights</Eyebrow>
              <h2 className="mt-6 font-serif text-display-md text-navy-950">What makes it work.</h2>
            </Reveal>
            <Stagger as="ul" className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
              {project.highlights.map((h) => (
                <StaggerItem as="li" key={h} className="flex items-center gap-4 py-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                    <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-lg text-navy-950">{h}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Next case study */}
      <Link href={`/work/${next.slug}`} className="group relative isolate block overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-30 transition-opacity duration-700 group-hover:opacity-45">
          <Photo photo={next.image} sizes="100vw" className="transition-transform duration-[1.5s] ease-out-expo group-hover:scale-105" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/40" />
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Next case study</p>
            <p className="mt-4 max-w-3xl font-serif text-display-md">{next.name}</p>
          </div>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight aria-hidden="true" className="h-6 w-6" />
          </span>
        </div>
      </Link>
    </>
  );
}
