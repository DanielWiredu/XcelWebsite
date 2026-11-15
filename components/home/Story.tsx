import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { story } from "@/lib/content";
import { Eyebrow } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { RevealPhoto } from "../ui/RevealPhoto";
import { SplitHeadline } from "../ui/SplitHeadline";

export function Story() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{story.eyebrow}</Eyebrow>
          </Reveal>
          <SplitHeadline
            parts={["We started on ", { em: "the inside." }]}
            className="mt-6 font-serif text-display-lg text-navy-950"
            emClassName="italic text-gold-600"
          />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">{story.body}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              href="/about"
              className="group mt-9 inline-flex min-h-11 items-center gap-2 border-b border-navy-950/30 pb-1 text-[15px] font-semibold text-navy-950 transition-colors hover:border-gold-500"
            >
              Meet the people behind it
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <RevealPhoto photo="teamMeeting" className="aspect-[4/3] w-full shadow-card lg:ml-auto lg:w-[88%]" />
          <div className="absolute -bottom-10 left-0 w-[42%] sm:-bottom-14 lg:-left-6">
            <RevealPhoto
              photo="smilingLaptop"
              sizes="(max-width: 1024px) 40vw, 280px"
              className="aspect-[3/4] shadow-float ring-[6px] ring-paper"
              radius="1.25rem"
            />
          </div>
          <Reveal
            delay={0.4}
            className="absolute -top-8 right-4 rounded-2xl bg-navy-950 p-5 text-white shadow-float sm:right-8 sm:p-6"
          >
            <p className="font-serif text-4xl leading-none text-gold-300 sm:text-5xl">18+</p>
            <p className="mt-2 max-w-[11rem] text-xs leading-snug text-navy-200 sm:text-sm">
              years of leadership in Ghana&apos;s health insurance &amp; finance
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
