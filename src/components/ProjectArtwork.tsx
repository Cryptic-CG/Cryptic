import Image from "next/image";
import type { Project } from "@/config/projects";
import { projectAccents } from "@/components/accents";

export function ProjectArtwork({
  project,
  className = "",
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const accent = projectAccents[project.accent];
  const initial = project.name.charAt(0).toUpperCase();

  return (
    <div
      className={`relative min-h-[280px] flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${accent.glow}, transparent 70%)`,
        }}
      />
      {project.logo ? (
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            width={553}
            height={599}
            sizes="(min-width: 1024px) 420px, 85vw"
            priority={priority}
            className="h-auto max-h-full w-auto max-w-full select-none rounded-2xl ring-1 ring-white/10"
          />
        </div>
      ) : (
        <span
          aria-hidden="true"
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-none tracking-tighter select-none ${accent.ghost}`}
          style={{ fontSize: "min(30vw, 240px)" }}
        >
          {initial}
        </span>
      )}
    </div>
  );
}