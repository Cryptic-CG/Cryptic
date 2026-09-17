export type ProjectAccent = "cyan" | "amber";

export interface Project {
  /** URL-safe identifier. Also defines the internal route `/projects/<slug>`. */
  slug: string;
  /** Display name. */
  name: string;
  /** Short category label, e.g. "AI Software Engineer". */
  category: string;
  /** One-line description used on cards and as the primary blurb. */
  summary: string;
  /** Longer description, rendered paragraph-by-paragraph on the detail page. */
  description: string[];
  /**
   * Optional external URL. When set, the detail page links out to it.
   * When omitted, internal routes are used instead.
   */
  url?: string;
  /** Optional official logo asset in /public. When set, it replaces the letter artwork. */
  logo?: string;
  /** Marks the project highlighted on the homepage. */
  featured?: boolean;
  /** Visual accent defining the project identity. */
  accent: ProjectAccent;
}

export const projects: Project[] = [
  {
    slug: "zeus",
    name: "Zeus",
    category: "AI Software Engineer",
    summary:
      "An AI software engineer built to take on real software engineering work — from understanding existing code to writing and refining new code.",
    description: [
      "Zeus is Cryptic's first project and current flagship: an AI software engineer designed to take on real software engineering work.",
      "It is being built to understand existing codebases, write new code, and help refine what is already there — real work on real projects.",
    ],
    url: "https://zeusai.website",
    logo: "/zeus-logo.png",
    featured: true,
    accent: "cyan",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured) ?? projects[0];
}