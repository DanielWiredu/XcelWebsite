import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title={["This page ", { em: "has moved on." }]} lead="The link may be old, or the page no longer exists.">
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/contact" variant="ghost-light">
          Contact us
        </ButtonLink>
      </div>
    </PageHeader>
  );
}
