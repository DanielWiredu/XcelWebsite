import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { Photo } from "../ui/Photo";

/** Image-led case study card. The whole card is one link. */
export function ProjectCard({ project, feature = false, index }: { project: Project; feature?: boolean; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-[1.75rem] bg-navy-950 text-white shadow-card"
    >
      <div className={`relative ${feature ? "aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]" : "aspect-[4/5] sm:aspect-[4/3]"}`}>
        <Photo
          photo={project.image}
          sizes={feature ? "(max-width: 1280px) 100vw, 1280px" : "(max-width: 1024px) 100vw, 620px"}
          className="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/5" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-8">
          <span className="rounded-full border border-white/20 bg-navy-950/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            {project.category}
          </span>
          <span className="font-mono text-sm text-white/60">0{index + 1}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <h3 className={`max-w-2xl font-serif leading-[1.05] ${feature ? "text-3xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
            {project.name}
          </h3>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-navy-200">{project.hook}</p>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/15 pt-5">
            <span className="text-sm font-semibold text-gold-300">{project.metric}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
              Read the story
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
