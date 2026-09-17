import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects being built by Cryptic.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-24 md:py-32">
      <SectionLabel>Projects</SectionLabel>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        Projects
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
        Software, AI systems, and experiments built by {site.name}. We add
        projects here as they are ready to be shown.
      </p>
      <ProjectsGrid className="mt-12" />
    </Container>
  );
}