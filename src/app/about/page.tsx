import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { getFeaturedProject } from "@/config/projects";

export const metadata: Metadata = {
  title: "About",
  description: "About Cryptic, an independent software studio.",
};

export default function AboutPage() {
  const featured = getFeaturedProject();

  return (
    <Container className="max-w-3xl py-24 md:py-32">
      <SectionLabel>About Cryptic</SectionLabel>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        A small studio with a long-term view.
      </h1>

      <div className="mt-10 space-y-5 text-lg leading-relaxed text-zinc-400">
        <p>
          Cryptic is an independent software studio focused on building useful
          software, AI systems, and experimental technology.
        </p>
        <p>
          We work on things we find interesting and genuinely useful. That
          means shipping real tools and taking the time to get the details
          right, rather than chasing every trend.
        </p>
        <p>
          Our current focus is{" "}
          <Link
            href={`/projects/${featured?.slug ?? ""}`}
            className="font-medium text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
          >
            Zeus, an AI software engineer
          </Link>
          , Cryptic&apos;s first project.
        </p>
      </div>

      <h2 className="mt-16 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
        Focus areas
      </h2>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {["Software", "AI systems", "Developer tools", "Experimental technology"].map(
          (area) => (
            <li
              key={area}
              className="rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium text-zinc-300"
            >
              {area}
            </li>
          ),
        )}
      </ul>
    </Container>
  );
}