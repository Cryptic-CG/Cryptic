import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { site } from "@/config/site";
import { getFeaturedProject } from "@/config/projects";

function Hero() {
  const featuredHref = `/projects/${getFeaturedProject()?.slug ?? ""}`;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.07),transparent_55%)]"
      />
      <Container className="relative flex flex-col items-center pb-24 pt-24 text-center sm:pb-32 sm:pt-32">
        <SectionLabel className="animate-fade-up">
          Independent software studio
        </SectionLabel>
        <h1
          className="mt-6 max-w-4xl animate-fade-up text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-50 sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Building software for the future.
        </h1>
        <p
          className="mt-6 max-w-2xl animate-fade-up text-pretty text-lg leading-relaxed text-zinc-400"
          style={{ animationDelay: "160ms" }}
        >
          {site.description}
        </p>
        <div
          className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Button href="/projects" size="lg">
            Explore Projects
          </Button>
          <Button href={featuredHref} variant="secondary" size="lg">
            Meet Zeus
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <Container className="py-24 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Projects</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              What we&apos;re building
            </h2>
          </div>
          <Button href="/projects" variant="ghost">
            View all projects
            <span aria-hidden="true">→</span>
          </Button>
        </div>
        <ProjectsGrid className="mt-12" />
      </Container>
    </section>
  );
}

function AboutSection() {
  const featured = getFeaturedProject();

  return (
    <section id="about" className="scroll-mt-24 border-t border-zinc-900">
      <Container className="grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <SectionLabel>About Cryptic</SectionLabel>
        </div>
        <div className="md:col-span-8">
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            An independent software studio focused on the long game.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Cryptic is an independent software studio focused on building useful
            software, AI systems, and experimental technology.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
            Our current focus is{" "}
            <Link
              href={`/projects/${featured?.slug ?? ""}`}
              className="font-medium text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
            >
              Zeus, an AI software engineer
            </Link>
            , Cryptic&apos;s first project.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
          >
            More about {site.name}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <ProjectsSection />
      <AboutSection />
    </>
  );
}