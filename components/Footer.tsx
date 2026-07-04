import { company, navLinks, services } from "@/lib/content";
import { Logo } from "./ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-500">
              {company.vision}
            </p>
            <p className="mt-4 font-display text-sm font-semibold text-brand-600">
              {company.tagline}
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-navy-500">
              <p>{company.location}</p>
              <p>
                {company.phones.map((phone, i) => (
                  <span key={phone}>
                    <a
                      href={`tel:${phone.replace(/[\s()]/g, "")}`}
                      className="transition-colors hover:text-brand-600"
                    >
                      {phone}
                    </a>
                    {i < company.phones.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </address>
            <p className="mt-3 text-xs font-medium uppercase tracking-wider text-navy-400">
              {company.hashtag}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-400">
              Company
            </h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-600 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-400">
              Services
            </h2>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-navy-600 transition-colors hover:text-brand-600"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-100 pt-8 sm:flex-row">
          <p className="text-sm text-navy-500">
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-navy-500 transition-colors hover:text-brand-600">
              Privacy
            </a>
            <a href="#" className="text-sm text-navy-500 transition-colors hover:text-brand-600">
              Terms
            </a>
            <a
              href={`mailto:${company.email}`}
              className="text-sm text-navy-500 transition-colors hover:text-brand-600"
            >
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
