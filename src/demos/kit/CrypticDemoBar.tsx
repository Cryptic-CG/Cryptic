import Link from "next/link";
import { site } from "@/config/site";
import type { Demo } from "@/config/demos";

/**
 * Slim, always-visible portfolio marker shown above every demo website.
 * Deliberately neutral so it never competes with the demo's own branding.
 */
export function CrypticDemoBar({ demo }: { demo: Demo }) {
  return (
    <div className="relative z-40 border-b border-white/10 bg-neutral-950">
      <div className="mx-auto flex h-12 w-full max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/demos"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-sm text-[13px] font-medium text-neutral-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
            All demos
          </Link>
          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden="true" />
          <p className="hidden truncate font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 sm:block">
            Cryptic Demo
            <span className="mx-2 text-neutral-700" aria-hidden="true">
              /
            </span>
            {demo.category}
          </p>
        </div>

        <Link
          href={site.contact.path}
          className="shrink-0 rounded-sm text-[13px] font-medium text-neutral-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-300"
        >
          <span className="hidden md:inline">Want a website like this?&nbsp;</span>
          Let&rsquo;s build yours
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </div>
  );
}