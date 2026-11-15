import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { RevealPhoto } from "@/components/ui/RevealPhoto";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project. Xcel iSolutions replies within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={["Let's build something ", { em: "that lasts." }]}
        lead="Tell us what's slowing your team down. We'll come back with a tailored approach, not a generic pitch."
      />

      <section aria-label="Contact form" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <aside className="lg:col-span-4 lg:col-start-9">
            <RevealPhoto photo="phoneDesk" sizes="(max-width: 1024px) 100vw, 400px" className="aspect-[4/3] shadow-card" radius="1.5rem" />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-6">
                <li>
                  <a href={`mailto:${company.email}`} className="group flex items-start gap-4">
                    <Mail aria-hidden="true" className="mt-1 h-5 w-5 text-gold-600" strokeWidth={1.5} />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">Email</span>
                      <span className="mt-1 block text-lg text-navy-950 group-hover:underline">{company.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Phone aria-hidden="true" className="mt-1 h-5 w-5 text-gold-600" strokeWidth={1.5} />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">Phone</span>
                    {company.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/[\s()]/g, "")}`} className="mt-1 block text-lg text-navy-950 hover:underline">
                        {p}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin aria-hidden="true" className="mt-1 h-5 w-5 text-gold-600" strokeWidth={1.5} />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">Office</span>
                    <span className="mt-1 block text-lg text-navy-950">{company.location}</span>
                  </span>
                </li>
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
