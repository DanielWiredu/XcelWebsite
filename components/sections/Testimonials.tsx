import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Stagger, StaggerItem } from "../ui/Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Client voices"
          title={
            <>
              Trusted by teams who can&apos;t{" "}
              <span className="text-gradient">compromise on quality</span>
            </>
          }
          description="We back our technology with responsive, SLA-driven support — and our clients feel the difference."
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <figure className="flex h-full flex-col rounded-4xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-brand-200" fill="currentColor" />
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-navy-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-brand-700 font-display text-sm font-bold text-white">
                    {t.author
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">{t.author}</p>
                    <p className="text-sm text-navy-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
