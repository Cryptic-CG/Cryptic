"use client";

import { useState } from "react";

const PACKAGES = [
  {
    id: "valet",
    name: "Valet",
    duration: "2 hours",
    price: "£95",
    summary: "The weekly reset. Wash, wheels, glass and a tidy interior.",
    items: [
      "pH-neutral snow foam and two-bucket wash",
      "Wheel faces, arches and tyre dressing",
      "Interior vacuum and hard-surface wipe-down",
      "Streak-free glass inside and out",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    duration: "Full day",
    price: "£285",
    summary: "Our most-booked service. A full paint correction and protection.",
    items: [
      "Everything in Valet, taken further",
      "Single-stage paint correction",
      "Six-month sealant on all exterior surfaces",
      "Leather and plastics conditioned",
      "Engine bay cleaned and dressed",
    ],
    highlight: true,
  },
  {
    id: "concours",
    name: "Concours",
    duration: "2 days",
    price: "£640",
    summary: "For cars that get shown. Multi-stage correction and ceramic.",
    items: [
      "Everything in Studio",
      "Three-stage paint correction",
      "Two-year ceramic coating, 9H rated",
      "Wheels rebuilt and sealed",
      "Engine bay and underbody steam clean",
    ],
  },
];

export function Packages() {
  const [active, setActive] = useState(1);

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {PACKAGES.map((pack, index) => {
        const selected = active === index;
        return (
          <div
            key={pack.id}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            className={`flex flex-col border p-7 transition-colors duration-200 sm:p-8 ${
              selected
                ? "border-[#5b8cff]/60 bg-[#101725]"
                : "border-white/10 bg-[#0b0d10] hover:border-white/20"
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                {pack.name}
              </h3>
              {pack.highlight && (
                <span className="bg-[#5b8cff] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Most booked
                </span>
              )}
            </div>

            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              {pack.duration}
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-white/60">
              {pack.summary}
            </p>

            <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
              {pack.items.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-white/70">
                  <span aria-hidden="true" className="mt-0.5 text-[#5b8cff]">
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-baseline justify-between border-t border-white/10 pt-6">
              <span className="text-3xl font-bold tracking-tight text-white">
                {pack.price}
              </span>
              <a
                href="#booking"
                className="text-sm font-medium text-[#5b8cff] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book this →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}