import type { ReactNode } from "react";
import type { PhotoKey } from "@/lib/images";
import { DiamondMark } from "./DiamondMark";
import { Eyebrow } from "./Button";
import { RevealPhoto } from "./RevealPhoto";
import { SplitHeadline } from "./SplitHeadline";

type Part = string | { em: string };

type PageHeaderProps = {
  eyebrow: string;
  title: Part[];
  lead?: string;
  children?: ReactNode;
};

/** Dark navy opening band shared by all inner pages, so the nav reads consistently. */
export function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-lines opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 70% at 85% 10%, rgba(68,83,184,0.35) 0%, transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(244,183,40,0.10) 0%, transparent 60%)",
        }}
      />
      <DiamondMark className="pointer-events-none absolute -right-40 top-10 -z-10 w-[30rem] opacity-20 sm:-right-24 sm:w-[44rem] sm:opacity-40" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-24 sm:pt-44 lg:px-8">
        <div className="animate-fade-up">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </div>
        <SplitHeadline
          as="h1"
          onMount
          delay={0.1}
          parts={title}
          className="mt-6 max-w-4xl font-serif text-display-lg text-white"
          emClassName="italic text-gold-300"
        />
        {lead && (
          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-navy-200 text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/** Wide photograph that straddles the dark header and the light body below it. */
export function HeaderPhoto({ photo }: { photo: PhotoKey }) {
  return (
    <div className="bg-[linear-gradient(to_bottom,#0b0f26_50%,transparent_50%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealPhoto
          photo={photo}
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="aspect-[4/3] shadow-float sm:aspect-[21/9]"
        />
      </div>
    </div>
  );
}
