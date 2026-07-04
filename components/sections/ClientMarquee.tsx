import { clients } from "@/lib/content";

export function ClientMarquee() {
  const row = [...clients, ...clients];

  return (
    <section aria-label="Clients we serve" className="border-y border-navy-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
          Trusted across Ghana&apos;s healthcare, insurance &amp; finance sectors
        </p>
        <div className="mask-fade-x mt-6 overflow-hidden">
          <ul className="flex w-max animate-marquee items-center gap-4">
            {row.map((client, i) => (
              <li
                key={`${client}-${i}`}
                className="flex shrink-0 items-center rounded-full border border-navy-100 bg-navy-50/50 px-5 py-2.5 text-sm font-semibold text-navy-600"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
