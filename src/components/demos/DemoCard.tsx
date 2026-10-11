import Link from "next/link";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import type { Demo } from "@/config/demos";

function CategoryChip({ demo }: { demo: Demo }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em]"
      style={{
        borderColor: `${demo.theme.accent}33`,
        backgroundColor: demo.theme.glow,
        color: demo.theme.accent,
      }}
    >
      {demo.category}
    </span>
  );
}

function ViewDemoLabel() {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100">
      View Demo
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );
}

function Preview({
  demo,
  className = "",
}: {
  demo: Demo;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-zinc-950 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `radial-gradient(70% 70% at 50% 45%, ${demo.theme.glow}, transparent 72%)`,
        }}
      />
      <DemoArtwork
        motif={demo.preview.motif}
        variant={demo.preview.variant}
        theme={demo.theme}
        alt={`Artwork preview of the ${demo.name} ${demo.category.toLowerCase()} demo website`}
        className="h-full w-full scale-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
      />
    </div>
  );
}

export function DemoCard({
  demo,
  featured = false,
  className = "",
}: {
  demo: Demo;
  featured?: boolean;
  className?: string;
}) {
  if (featured) {
    return (
      <Link
        href={demo.route}
        className={`group grid overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200 lg:grid-cols-[1.15fr_1fr] ${className}`}
      >
        <Preview demo={demo} className="aspect-[16/11] lg:aspect-auto lg:min-h-[420px]" />
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryChip demo={demo} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Featured demo
            </span>
          </div>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {demo.name}
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            {demo.styleLabel}
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
            {demo.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {demo.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-zinc-800 px-3 py-1.5 text-[13px] text-zinc-400"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ViewDemoLabel />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={demo.route}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200 ${className}`}
    >
      <Preview demo={demo} className="aspect-[16/10] border-b border-zinc-800/80" />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <CategoryChip demo={demo} />
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">
          {demo.name}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
          {demo.styleLabel}
        </p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-400">
          {demo.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {demo.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-zinc-800 px-3 py-1.5 text-[13px] text-zinc-500"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <ViewDemoLabel />
        </div>
      </div>
    </Link>
  );
}