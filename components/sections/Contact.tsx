"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const services = ["Web application", "Mobile app", "Enterprise / financial system", "API & integration", "Something else"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    setError(null);

    const payload = Object.fromEntries(new FormData(form).entries());

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
      requestAnimationFrame(() => errorRef.current?.focus());
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex min-h-[28rem] flex-col items-start justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-950">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-serif text-5xl text-navy-950">Thank you.</h2>
        <p className="mt-3 max-w-sm text-lg text-ink-soft">
          Your message is on its way. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      {/* Honeypot: hidden from people, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website-hp">Do not fill this in</label>
        <input id="website-hp" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && error && (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error} You can also email us directly at info@xcelisolutions.com.</span>
        </div>
      )}

      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Company" name="company" autoComplete="organization" />
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-sm font-semibold text-navy-950">
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="min-h-12 rounded-none border-0 border-b border-navy-900/25 bg-transparent px-0 py-3 text-base text-navy-950 outline-none transition-colors focus:border-navy-950 focus:shadow-[0_1px_0_0_#0b0f26] focus:ring-0"
          >
            <option value="" disabled>
              Select an option
            </option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy-950">
          Tell us about the project <span className="text-gold-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-describedby="message-help"
          className="resize-none border-0 border-b border-navy-900/25 bg-transparent px-0 py-3 text-base text-navy-950 outline-none transition-colors placeholder:text-ink-muted focus:border-navy-950 focus:shadow-[0_1px_0_0_#0b0f26]"
        />
        <p id="message-help" className="text-sm text-ink-muted">
          Goals, timeline, and any systems we&apos;d connect to.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">We reply within one business day.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-950 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              Sending
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

type FieldProps = { label: string; name: string; type?: string; required?: boolean; autoComplete?: string };

function Field({ label, name, type = "text", required, autoComplete }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-navy-950">
        {label}
        {required && <span className="text-gold-700"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="min-h-12 border-0 border-b border-navy-900/25 bg-transparent px-0 py-3 text-base text-navy-950 outline-none transition-colors focus:border-navy-950 focus:shadow-[0_1px_0_0_#0b0f26]"
      />
    </div>
  );
}
