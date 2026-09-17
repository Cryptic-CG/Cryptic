import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { getFeaturedProject } from "@/config/projects";

export const metadata: Metadata = {
  title: "404",
  description: "Page not found.",
};

export default function NotFound() {
  const featured = getFeaturedProject();

  return (
    <Container className="flex flex-col items-center py-36 text-center md:py-48">
      <SectionLabel>404</SectionLabel>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to Home</Button>
        {featured && (
          <Button href={`/projects/${featured.slug}`} variant="secondary">
            Meet {featured.name}
          </Button>
        )}
      </div>
    </Container>
  );
}