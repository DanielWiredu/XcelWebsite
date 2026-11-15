"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./ui/Logo";
import { EASE_OUT } from "./ui/Reveal";
import { company, navLinks } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const menuButton = useRef<HTMLButtonElement>(null);

  // Solid bar after leaving the dark header; tuck away while scrolling down.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        setHidden(y > 320 && y > lastY.current + 4);
        if (y < lastY.current - 4 || y < 320) setHidden(false);
        lastY.current = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll + Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onDark = !scrolled || open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out-expo ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`transition-colors duration-500 ${
            onDark ? "bg-transparent" : "border-b border-navy-900/[0.06] bg-paper/85 backdrop-blur-md"
          }`}
        >
          <nav aria-label="Primary" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
            <Link href="/" className="relative z-[60] rounded-md" aria-label="Xcel iSolutions home">
              <Logo variant={onDark ? "light" : "dark"} />
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                        onDark ? "text-white/75 hover:text-white" : "text-ink-soft hover:text-navy-950"
                      } ${active ? (onDark ? "!text-white" : "!text-navy-950") : ""}`}
                    >
                      {link.label}
                      {active && (
                        <span aria-hidden="true" className="absolute inset-x-4 -bottom-0.5 h-px bg-gold-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className={`group hidden min-h-11 items-center gap-1.5 rounded-full px-5 text-sm font-semibold transition-colors duration-300 sm:inline-flex ${
                  onDark ? "bg-gold-400 text-navy-950 hover:bg-gold-300" : "bg-navy-950 text-white hover:bg-navy-800"
                }`}
              >
                Start a project
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <button
                ref={menuButton}
                type="button"
                onClick={() => setOpen((v) => !v)}
                className={`relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors md:hidden ${
                  onDark ? "border-white/20 text-white" : "border-navy-900/15 text-navy-950"
                }`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Sibling of <header>: its transform would otherwise trap this fixed overlay */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-navy-950 px-6 pb-10 pt-28 md:hidden"
          >
            <m.ul
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.06, delayChildren: 0.08 }}
              className="flex flex-col"
            >
              {[{ label: "Home", href: "/" }, ...navLinks].map((link) => (
                <m.li
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } } }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="flex items-center justify-between py-4 font-serif text-4xl text-white"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="h-6 w-6 text-gold-400" />
                  </Link>
                </m.li>
              ))}
            </m.ul>
            <div className="mt-auto space-y-1 text-sm text-navy-300">
              <a href={`mailto:${company.email}`} className="block py-1 text-white">
                {company.email}
              </a>
              <a href={`tel:${company.phones[0].replace(/[\s()]/g, "")}`} className="block py-1">
                {company.phones[0]}
              </a>
              <p className="pt-3 font-serif text-lg italic text-gold-300">{company.tagline}</p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
