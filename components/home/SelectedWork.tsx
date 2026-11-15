import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";
import { ProjectCard } from "../sections/ProjectCard";
import { Eyebrow } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function SelectedWork() {
  return (
    <section aria-label="Selected work" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Selected work</Eyebrow>
            </Reveal>
            <SplitHeadline
              parts={["Proof, ", { em: "not promises." }]}
              className="mt-6 font-serif text-display-lg text-navy-950"
              emClassName="italic text-gold-600"
            />
          </div>
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex min-h-11 items-center gap-2 border-b border-navy-950/30 pb-1 text-[15px] font-semibold text-navy-950 transition-colors hover:border-gold-500"
            >
              All case studies
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i === 0 ? 0 : (i - 1) * 0.1} className={i === 0 ? "lg:col-span-2" : ""}>
              <ProjectCard project={p} index={i} feature={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
