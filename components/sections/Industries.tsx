import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Stagger, StaggerItem } from "../ui/Reveal";

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-50/60 via-white to-white"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Deep domain expertise in{" "}
              <span className="text-gradient">regulated industries</span>
            </>
          }
          description="We understand both the technical and regulatory sides — designing compliant, secure solutions aligned with your operational goals."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <StaggerItem key={industry.name}>
                <article className="group flex h-full items-start gap-4 rounded-4xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display text-lg font-bold tracking-tight text-navy-900">
                        {industry.name}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-navy-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600" />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                      {industry.blurb}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
