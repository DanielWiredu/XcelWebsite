/**
 * Soft cross-page entrance. Pure CSS, so it plays before hydration and never
 * delays first paint; the global reduced-motion rule neutralises it.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-fade-in">{children}</div>;
}
