type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "dark" | "light";
};

/** Xcel iSolutions mark: twin overlapping diamonds (navy + gold), matching the brand logo. */
export function Logo({ className = "", showWordmark = true, variant = "dark" }: LogoProps) {
  const light = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 56 40" className="h-7 w-auto shrink-0" role="img" aria-label="Xcel iSolutions logo">
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="4"
          transform="rotate(45 16 16)"
          fill="none"
          stroke={light ? "#8f9fe0" : "#333f97"}
          strokeWidth="3.5"
          className="transition-[stroke] duration-500"
        />
        <rect
          x="20"
          y="4"
          width="24"
          height="24"
          rx="4"
          transform="rotate(45 32 16)"
          fill="none"
          stroke="#f4b728"
          strokeWidth="3.5"
        />
      </svg>
      {showWordmark && (
        <span
          className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          Xcel
          <span className={`transition-colors duration-500 ${light ? "text-brand-300" : "text-brand-600"}`}>
            {" "}
            iSolutions
          </span>
        </span>
      )}
    </span>
  );
}
