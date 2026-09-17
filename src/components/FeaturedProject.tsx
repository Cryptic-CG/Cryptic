import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import { projectAccents } from "@/components/accents";
import { site } from "@/config/site";
import { getFeaturedProject } from "@/config/projects";

export function FeaturedProject() {
  const project = getFeaturedProject();

  if (!project) return null;

  const accent = projectAccents[project.accent];

  return (
    <section id="featured" className="scroll-mt-24">
      <Container className="pb-24 pt-4 md:pb-32">
        <SectionLabel className="mb-8">Featured project</SectionLabel>

        <article className="grid overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/30 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-7 p-8 sm:p-10 lg:p-14">
            <p
              className={`font-mono text-[11px] font-medium uppercase tracking-[0.3em] ${accent.text}`}
            >
              {project.name} by {site.name}
            </p>
            <div>
              <h2 className="text-balance text-6xl font-semibold leading-none tracking-tighter text-zinc-50 sm:text-7xl">
                {project.name}
              </h2>
              <p className="mt-4 text-lg text-zinc-300">{project.category}</p>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-zinc-400">
              {project.summary}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-5">
              {project.url ? (
                <Button href={project.url} size="lg">
                  Visit {project.name}
                  <span aria-hidden="true">→</span>
                </Button>
              ) : (
                <Button href={`/projects/${project.slug}`} size="lg">
                  Explore {project.name}
                  <span aria-hidden="true">→</span>
                </Button>
              )}
              <Button href="/projects" variant="ghost">
                View all projects
              </Button>
            </div>
          </div>

          <div className="flex p-4 sm:p-6 lg:p-8">
            <ProjectArtwork project={project} priority />
          </div>
        </article>
      </Container>
    </section>
  );
}