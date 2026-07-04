import { processSteps } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Stagger, StaggerItem } from "../ui/Reveal";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A phased process with{" "}
              <span className="text-gradient">clear milestones</span>
            </>
          }
          description="Every engagement follows a disciplined, transparent path — with defined deliverables and acceptance criteria at each stage, from kickoff to hypercare."
        />

        <Stagger className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <article className="group relative h-full overflow-hidden rounded-4xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-navy-100 transition-colors group-hover:text-brand-100">
                    {step.step}
                  </span>
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-600">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {step.description}
                </p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-navy-50">
                  <div className="h-full w-0 rounded-full bg-gradient-to-r from-brand-500 to-navy-700 transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
