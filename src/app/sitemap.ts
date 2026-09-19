import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { projects } from "@/config/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects.map(
      (project): MetadataRoute.Sitemap[number] => ({
        url: `${site.url}/projects/${project.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    ),
    {
      url: `${site.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}