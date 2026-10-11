"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

export interface DemoNavLink {
  label: string;
  href: string;
}

export interface DemoSiteNavProps {
  /** Wordmark / logo block, supplied by the demo so each brand differs. */
  brand: ReactNode;
  links: DemoNavLink[];
  cta: DemoNavLink;
  barClassName?: string;
  innerClassName?: string;
  listClassName?: string;
  linkClassName?: string;
  ctaClassName?: string;
  panelClassName?: string;
  panelLinkClassName?: string;
}

/**
 * Shared responsive navigation for every demo website.
 *
 * Only behaviour lives here — the bar, links, CTA and mobile panel are all
 * styled per demo so the five concepts never look like one template.
 */
export function DemoSiteNav({
  brand,
  links,
  cta,
  barClassName = "",
  innerClassName = "",
  listClassName = "",
  linkClassName = "",
  ctaClassName = "",
  panelClassName = "",
  panelLinkClassName = "",
}: DemoSiteNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-30 ${barClassName}`}>
      <div
        className={`mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8 ${innerClassName}`}
      >
        <Link
          href="#top"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {brand}
        </Link>

        <nav
          className={`hidden items-center gap-8 md:flex ${listClassName}`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={cta.href}
            className={`inline-flex h-11 items-center justify-center px-6 ${ctaClassName}`}
          >
            {cta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="demo-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 grid h-11 w-11 shrink-0 place-items-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="demo-mobile-nav" className={panelClassName}>
          <nav
            aria-label="Mobile"
            className="mx-auto w-full max-w-[1200px] px-5 pb-6 sm:px-8"
          >
            <ul className="border-t border-current/10">
              {links.map((link) => (
                <li key={link.href} className="border-b border-current/10">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-[52px] items-center text-base ${panelLinkClassName}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className={`mt-5 inline-flex h-12 w-full items-center justify-center px-6 text-sm font-medium ${ctaClassName}`}
            >
              {cta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}