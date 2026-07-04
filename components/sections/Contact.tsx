"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { company } from "@/lib/content";
import { Reveal } from "../ui/Reveal";

const details = [
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: company.phones.join(" · "),
    href: `tel:${company.phones[0].replace(/[\s()]/g, "")}`,
  },
  { icon: MapPin, label: "Office", value: company.location },
  {
    icon: ArrowUpRight,
    label: "Website",
    value: company.website,
    href: `https://${company.website}`,
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-5xl border border-navy-100 bg-navy-950 shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* Left: pitch + details */}
            <div className="relative overflow-hidden p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(60% 60% at 10% 0%, rgba(37,99,235,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 100% 100%, rgba(68,83,184,0.30) 0%, transparent 55%)",
                }}
              />
              <div className="relative">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                    Let&apos;s talk
                  </span>
                  <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
                    Ready to build something{" "}
                    <span className="bg-gradient-to-r from-brand-300 to-gold-300 bg-clip-text text-transparent">
                      that lasts?
                    </span>
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-navy-200">
                    Tell us about your project and challenges. We&apos;ll get back to you with a
                    tailored approach — no generic pitches.
                  </p>
                </Reveal>

                <dl className="mt-10 grid gap-5 sm:grid-cols-2">
                  {details.map((d) => {
                    const Icon = d.icon;
                    const content = (
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-200">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-navy-300">
                            {d.label}
                          </dt>
                          <dd className="mt-0.5 text-sm font-medium text-white">{d.value}</dd>
                        </div>
                      </div>
                    );
                    return d.href ? (
                      <a key={d.label} href={d.href} className="rounded-2xl transition-opacity hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      <div key={d.label}>{content}</div>
                    );
                  })}
                </dl>

                <p className="mt-10 font-display text-sm font-semibold text-gold-300">
                  {company.tagline}
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="border-t border-white/10 bg-white p-8 sm:p-12 lg:border-l lg:border-t-0">
              {status === "success" ? (
                <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-navy-500">
                    Your message is on its way. Our team will be in touch shortly to discuss
                    your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Honeypot field — hidden from users, catches bots */}
                  <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="website-hp">Do not fill this in</label>
                    <input id="website-hp" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  {status === "error" && error && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" autoComplete="name" required />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company" name="company" autoComplete="organization" />
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="service"
                        className="text-sm font-semibold text-navy-800"
                      >
                        What do you need?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option>Web application</option>
                        <option>Mobile app</option>
                        <option>Enterprise / financial system</option>
                        <option>API & integration</option>
                        <option>Something else</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-navy-800"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your goals, timeline, and any systems we'd integrate with…"
                      className="resize-none rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        Sending
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-navy-400">
                    We typically respond within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, type = "text", required, autoComplete }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-navy-800">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
