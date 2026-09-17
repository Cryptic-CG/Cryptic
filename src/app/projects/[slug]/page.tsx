import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/config/projects";
import { site } from "@/config/site";
import { ProjectDetail } from "@/components/ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — ${project.category}`,
    description: project.summary,
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${project.name} — ${project.category}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}