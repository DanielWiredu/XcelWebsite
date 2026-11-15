import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company, navLinks, projects } from "@/lib/content";
import { Logo } from "./ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div aria-hidden="true" className="absolute inset-0 bg-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Closing statement */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl font-serif text-display-md text-white">
            Have a process that&apos;s holding you back?{" "}
            <span className="italic text-gold-300">Let&apos;s fix it.</span>
          </p>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center gap-2 self-start rounded-full bg-gold-400 px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-gold-300 lg:self-auto"
          >
            Start a conversation
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-300">{company.vision}</p>
            <p className="mt-5 font-serif text-lg italic text-gold-300">{company.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-300">Company</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-300">Work</h2>
            <ul className="mt-5 space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className="text-sm text-navy-200 transition-colors hover:text-white">
                    {p.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-300">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <a href={`mailto:${company.email}`} className="block text-white transition-colors hover:text-gold-300">
                {company.email}
              </a>
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/[\s()]/g, "")}`} className="block transition-colors hover:text-white">
                  {phone}
                </a>
              ))}
              <p className="text-navy-300">{company.location}</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}
          </p>
          <span className="text-xs font-medium uppercase tracking-[0.2em]">{company.hashtag}</span>
        </div>
      </div>
    </footer>
  );
}
