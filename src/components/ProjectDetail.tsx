import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import { projectAccents } from "@/components/accents";
import { site } from "@/config/site";
import Link from "next/link";
import type { Project } from "@/config/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const accent = projectAccents[project.accent];

  return (
    <Container className="py-20 md:py-28">
      <nav aria-label="Breadcrumb" className="mb-12">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <li>
            <Link
              href="/projects"
              className="transition-colors hover:text-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
            >
              Projects
            </Link>
          </li>
          <li aria-hidden="true" className="text-zinc-700">
            /
          </li>
          <li aria-current="page" className="text-zinc-300">
            {project.name}
          </li>
        </ol>
      </nav>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p
            className={`font-mono text-[11px] font-medium uppercase tracking-[0.3em] ${accent.text}`}
          >
            {project.name} by {site.name}
          </p>
          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 text-xl text-zinc-300">{project.category}</p>

          <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-zinc-400">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {project.url && (
              <Button href={project.url} size="lg">
                Visit {project.name}
                <span aria-hidden="true">→</span>
              </Button>
            )}
            <Button href="/projects" variant="secondary" size="lg">
              All projects
            </Button>
          </div>
        </div>

        <ProjectArtwork project={project} />
      </div>
    </Container>
  );
}