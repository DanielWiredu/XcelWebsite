import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const gradients = [
  "from-navy-900 via-brand-800 to-brand-600",
  "from-brand-700 via-navy-700 to-navy-900",
  "from-navy-800 via-brand-700 to-navy-950",
];

export function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Systems we&apos;ve shipped for{" "}
              <span className="text-gradient">real institutions</span>
            </>
          }
          description="Every system is built around how our clients actually operate — not sold off the shelf. Here's a selection of platforms in production today."
        />

        <div className="mt-14 flex flex-col gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <article className="group grid overflow-hidden rounded-4xl border border-navy-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card lg:grid-cols-2">
                {/* Visual */}
                <div
                  className={`relative flex min-h-[15rem] items-center justify-center bg-gradient-to-br p-8 ${gradients[i % gradients.length]} ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
                  />
                  {/* Stylised app window */}
                  <div className="relative w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                    <div className="flex gap-1.5 pb-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                    </div>
                    <div className="space-y-2.5">
                      <div className="h-2.5 w-2/3 rounded-full bg-white/50" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-lg bg-white/20" />
                        <div className="h-12 rounded-lg bg-white/30" />
                        <div className="h-12 rounded-lg bg-gold-400/70" />
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/25" />
                      <div className="h-2 w-4/5 rounded-full bg-white/25" />
                      <div className="h-2 w-3/5 rounded-full bg-white/25" />
                    </div>
                  </div>
                  <span className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {project.metric}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500 sm:text-base">
                    {project.summary}
                  </p>
                  <ul className="mt-6 grid gap-2.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-sm font-medium text-navy-700"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-7 py-4 text-base font-semibold text-navy-800 transition-all hover:border-navy-300 hover:bg-navy-50"
          >
            Discuss a project like these
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
