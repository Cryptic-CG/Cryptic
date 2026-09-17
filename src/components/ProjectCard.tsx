import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/config/projects";
import { projectAccents } from "@/components/accents";

export function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const accent = projectAccents[project.accent];
  const initial = project.name.charAt(0).toUpperCase();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex min-h-[240px] flex-col justify-between gap-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200 sm:p-10 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        {project.logo ? (
          <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={553}
              height={599}
              className="h-full w-full object-cover select-none"
            />
          </span>
        ) : (
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border font-mono text-lg font-semibold ${accent.tile}`}
            aria-hidden="true"
          >
            {initial}
          </span>
        )}
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
          {project.category}
        </span>
      </div>

      <div>
        <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
          {project.name}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-400">
          {project.summary}
        </p>
        <span
          className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${accent.text}`}
        >
          View project
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}