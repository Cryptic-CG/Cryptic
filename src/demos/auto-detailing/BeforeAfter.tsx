"use client";

import { useState } from "react";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import type { DemoTheme } from "@/config/demos";

const DULL: DemoTheme = {
  from: "#33383d",
  via: "#1d2125",
  to: "#0e1013",
  accent: "#9aa3ad",
  glow: "rgba(180, 190, 200, 0.14)",
};

/**
 * Draggable before/after comparison. The range input is the whole hit area, so
 * it works with a mouse, a finger and a keyboard without extra event wiring.
 */
export function BeforeAfter({
  theme,
  beforeVariant,
  afterVariant,
  caption,
}: {
  theme: DemoTheme;
  beforeVariant: number;
  afterVariant: number;
  caption: string;
}) {
  const [position, setPosition] = useState(52);

  return (
    <figure>
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#0b0d10]">
        <DemoArtwork
          motif="body"
          variant={afterVariant}
          theme={theme}
          alt={`After detailing: ${caption}`}
          className="absolute inset-0 h-full w-full"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <DemoArtwork
            motif="body"
            variant={beforeVariant}
            theme={DULL}
            alt={`Before detailing: ${caption}`}
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/70 backdrop-blur">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 7l-4 5 4 5M15 7l4 5-4 5" />
            </svg>
          </span>
        </div>

        <span className="pointer-events-none absolute top-4 left-4 z-10 bg-black/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 z-10 bg-black/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare before and after: ${caption}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white/70 [&::-moz-range-thumb]:h-12 [&::-moz-range-thumb]:w-12 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-webkit-slider-runnable-track]:h-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:h-12 [&::-webkit-slider-thumb]:w-12 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent"
        />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        <span>{caption}</span>
        <span>Drag to compare</span>
      </figcaption>
    </figure>
  );
}