import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsGrid({ className = "" }: { className?: string }) {
  const single = projects.length === 1;

  return (
    <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          className={single ? "sm:col-span-2 lg:col-span-3" : ""}
        />
      ))}
    </div>
  );
}