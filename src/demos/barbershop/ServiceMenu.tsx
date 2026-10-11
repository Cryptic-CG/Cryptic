"use client";

import { useState } from "react";

export const SERVICES = [
  {
    id: "cut-finish",
    name: "Cut & Finish",
    price: 38,
    duration: "45 min",
    detail: "Consultation, wash, cut and finish. The everyday appointment.",
    booked: true,
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    price: 34,
    duration: "45 min",
    detail: "Taken to nothing with a razor. Includes a neck clean-up.",
    booked: false,
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt",
    price: 26,
    duration: "30 min",
    detail: "Line-up, shape and a conditioning finish.",
    booked: false,
  },
  {
    id: "shave",
    name: "Hot Towel Shave",
    price: 42,
    duration: "40 min",
    detail: "Two passes, hot towels, balm and a straight razor.",
    booked: false,
  },
  {
    id: "cut-beard",
    name: "Cut & Beard",
    price: 58,
    duration: "70 min",
    detail: "The full appointment. Most booked before the weekend.",
    booked: true,
  },
  {
    id: "grey",
    name: "Grey Blending",
    price: 48,
    duration: "50 min",
    detail: "Soft, low-contrast blending. Grows out without a hard edge.",
    booked: false,
  },
  {
    id: "kids",
    name: "Junior Cut",
    price: 24,
    duration: "30 min",
    detail: "Under twelves. Chair time kept short and calm.",
    booked: false,
  },
];

export function ServiceMenu({ selectedId }: { selectedId: string | null }) {
  const [internal, setInternal] = useState<string | null>(selectedId);
  const active = internal;

  return (
    <div>
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {SERVICES.map((service) => {
          const selected = active === service.id;
          return (
            <li key={service.id}>
              <button
                type="button"
                onClick={() => setInternal(selected ? null : service.id)}
                aria-pressed={selected}
                className={`group grid w-full gap-2 py-6 text-left transition-colors duration-200 sm:grid-cols-12 sm:items-baseline sm:gap-5 ${
                  selected ? "text-white" : "hover:text-white"
                } focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white/60`}
              >
                <span className="sm:col-span-4">
                  <span className="block text-xl font-bold tracking-tight uppercase sm:text-2xl">
                    {service.name}
                  </span>
                  {service.booked && (
                    <span className="mt-1.5 inline-block border border-[#d4a24c]/50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#d4a24c]">
                      Most booked
                    </span>
                  )}
                </span>
                <span className="text-[15px] leading-relaxed text-white/55 sm:col-span-5">
                  {service.detail}
                </span>
                <span className="flex items-baseline gap-4 sm:col-span-3 sm:justify-end">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
                    {service.duration}
                  </span>
                  <span className="w-14 text-right text-lg text-white">
                    £{service.price}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        className="mt-6 flex flex-wrap items-center justify-between gap-4"
        role="status"
      >
        <p className="text-[15px] text-white/60">
          {active ? (
            <>
              Selected:{" "}
              <span className="text-white">
                {SERVICES.find((service) => service.id === active)?.name} — £
                {SERVICES.find((service) => service.id === active)?.price}
              </span>
            </>
          ) : (
            "Tap a service to select it for your booking."
          )}
        </p>
        <a
          href="#booking"
          className="inline-flex h-11 items-center bg-[#d4a24c] px-6 text-[13px] font-bold uppercase tracking-[0.14em] text-[#141210] transition-colors hover:bg-[#e2b663] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4a24c]"
        >
          Book this
        </a>
      </div>
    </div>
  );
}