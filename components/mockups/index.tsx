import type { MockupKind } from "@/lib/content";
import { ClaimsMockup } from "./ClaimsMockup";
import { DashboardMockup } from "./DashboardMockup";
import { LedgerMockup } from "./LedgerMockup";

export function ProjectMockup({ kind, className }: { kind: MockupKind; className?: string }) {
  if (kind === "claims") return <ClaimsMockup className={className} />;
  if (kind === "dashboard") return <DashboardMockup className={className} />;
  return <LedgerMockup className={className} />;
}
