import { CheckCircle2 } from "lucide-react";
import { stats } from "@/lib/content";
import { ButtonLink, Eyebrow } from "../ui/Button";
import { Counter } from "../ui/Counter";
import { DiamondMark } from "../ui/DiamondMark";
import { SplitHeadline } from "../ui/SplitHeadline";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Atmosphere: column lines, soft brand light, the diamond motif */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-lines opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 60% at 80% 20%, rgba(68,83,184,0.40) 0%, transparent 60%), radial-gradient(45% 45% at 5% 95%, rgba(244,183,40,0.12) 0%, transparent 60%)",
        }}
      />
      {/* The line-drawn diamonds are the hero's visual: keep the right side clear for them */}
      <DiamondMark
        className="pointer-events-none absolute -right-48 top-16 -z-10 w-[40rem] opacity-20 sm:-right-32 lg:-right-16 lg:top-24 lg:w-[50rem] lg:opacity-60"
        delay={0.6}
      />

      <div className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pt-48">
        <div className="max-w-3xl lg:max-w-[46rem]">
          <div>
            <div className="animate-fade-up">
              <Eyebrow tone="light">Custom software · Accra, Ghana</Eyebrow>
            </div>
            <SplitHeadline
              as="h1"
              onMount
              delay={0.15}
              parts={["Software built around ", { em: "the way you work." }]}
              className="mt-7 font-serif text-display-xl text-white"
              emClassName="italic text-gold-300"
            />
            <p
              className="mt-7 max-w-lg animate-fade-up text-lg leading-relaxed text-navy-200 text-pretty sm:text-xl"
              style={{ animationDelay: "0.55s" }}
            >
              Secure web, mobile and enterprise systems for Ghana&apos;s insurers, banks and healthcare providers.
            </p>
            <div className="mt-10 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: "0.7s" }}>
              <ButtonLink href="/contact" variant="gold">
                Start a project
              </ButtonLink>
              <ButtonLink href="/work" variant="ghost-light">
                See our work
              </ButtonLink>
            </div>
            <ul
              className="mt-10 flex animate-fade-up flex-wrap gap-x-6 gap-y-2 text-sm text-navy-300"
              style={{ animationDelay: "0.85s" }}
            >
              {["Data Protection Act aligned", "IFRS 17 ready", "HL7 / FHIR"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-gold-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* gap-px over a tinted background draws the hairline grid */}
        <dl className="-mx-4 mt-20 grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:-mx-6 sm:mt-24 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-navy-950 px-4 py-8 sm:px-6 sm:py-10">
              <dt className="mt-2 max-w-[14rem] text-sm leading-snug text-navy-300">{s.label}</dt>
              <dd>
                <Counter value={s.value} suffix={s.suffix} className="font-serif text-5xl text-white sm:text-6xl" />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
