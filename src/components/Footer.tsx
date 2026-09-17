import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { site } from "@/config/site";
import { projects } from "@/config/projects";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              aria-label="Cryptic — Home"
              className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
            >
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              {site.description}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Projects
            </h2>
            <ul className="mt-4 space-y-2.5">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-zinc-900 pt-8">
          <p className="text-sm text-zinc-600">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}