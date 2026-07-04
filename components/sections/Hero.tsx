"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { company, stats } from "@/lib/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const shouldReduce = useReducedMotion();
  // When the user prefers reduced motion, skip the enter animation entirely
  const initial = shouldReduce ? false : "hidden";

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white pt-28 sm:pt-32"
    >
      {/* Ambient gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-brand-300/25 blur-[120px]" />
        <div className="absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-navy-400/20 blur-[130px]" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <motion.div
          variants={container}
          initial={initial}
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.a
            variants={item}
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-sm font-medium text-navy-700 shadow-soft backdrop-blur"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 px-2 py-0.5 text-xs font-semibold text-gold-700">
              <Sparkles className="h-3 w-3" /> Ghanaian-owned
            </span>
            Trusted by 12+ regulated institutions
            <ArrowUpRight className="h-4 w-4 text-navy-400 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            variants={item}
            className="mt-6 max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl md:text-7xl"
          >
            Custom software that{" "}
            <span className="text-gradient">moves your business</span> forward.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-navy-500 sm:text-xl"
          >
            We design and build secure, bespoke web applications, mobile apps, and enterprise
            systems for healthcare, insurance, finance, and the public sector.{" "}
            <span className="font-semibold text-navy-700">{company.tagline}</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-glow"
            >
              Start a project
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-7 py-4 text-base font-semibold text-navy-800 transition-all hover:border-navy-300 hover:bg-navy-50"
            >
              See our work
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-600" />
              Security & compliance first
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              24/7 SLA-backed support
            </span>
          </motion.div>
        </motion.div>

        {/* Stats band */}
        <motion.dl
          variants={item}
          initial={initial}
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-navy-100 bg-white/80 p-5 text-left shadow-soft backdrop-blur sm:p-6"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {s.value}
              </dd>
              <p className="mt-1 text-sm leading-snug text-navy-500">{s.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
