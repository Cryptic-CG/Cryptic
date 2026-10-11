"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import type { DemoTheme } from "@/config/demos";

type Property = {
  id: string;
  address: string;
  area: string;
  type: "House" | "Townhouse" | "Apartment";
  beds: number;
  baths: number;
  reception: number;
  price: number;
  floor: string;
  status: string;
  blurb: string;
  features: string[];
  tenure: string;
  epc: string;
  agent: string;
  variant: number;
};

const PROPERTIES: Property[] = [
  {
    id: "alder-house",
    address: "14 Alder Row",
    area: "Westfields",
    type: "House",
    beds: 4,
    baths: 3,
    reception: 2,
    price: 895000,
    floor: "2,480 sq ft",
    status: "New instruction",
    blurb:
      "A 1930s house rebuilt behind its original brick. South-facing kitchen opening onto a walled garden, and a first-floor studio that could work as a fifth bedroom.",
    features: [
      "Rebuilt to insulation standards, brick retained",
      "Walled south-facing garden with mature fig",
      "Separate studio with its own stair",
      "Two minutes from the tram terminus",
    ],
    tenure: "Freehold",
    epc: "Band B",
    agent: "Imogen Alder",
    variant: 0,
  },
  {
    id: "marlowe-mews",
    address: "7 Marlowe Mews",
    area: "Old Town",
    type: "Townhouse",
    beds: 3,
    baths: 2,
    reception: 2,
    price: 640000,
    floor: "1,640 sq ft",
    status: "For sale",
    blurb:
      "A quiet mews house on a gated lane, arranged over three floors with a roof terrace looking over the rooftops toward the cathedral.",
    features: [
      "Gated mews lane, no through traffic",
      "Roof terrace with cathedral views",
      "Fully refitted kitchen and bathrooms",
      "Secure residents parking permit",
    ],
    tenure: "Freehold",
    epc: "Band C",
    agent: "Rowan Vance",
    variant: 1,
  },
  {
    id: "quay-penthouse",
    address: "3 Harbour Steps",
    area: "Riverside",
    type: "Apartment",
    beds: 3,
    baths: 2,
    reception: 2,
    price: 1150000,
    floor: "1,980 sq ft",
    status: "For sale",
    blurb:
      "The top floor of a converted warehouse: double-height living space, original columns and a terrace that wraps the full river elevation.",
    features: [
      "Double-height living space",
      "Wrap-around terrace facing the water",
      "Original cast-iron columns retained",
      "Two secure parking bays and a store",
    ],
    tenure: "Share of freehold",
    epc: "Band B",
    agent: "Imogen Alder",
    variant: 2,
  },
  {
    id: "willow-barn",
    address: "Willow Lane",
    area: "North Quarter",
    type: "House",
    beds: 5,
    baths: 3,
    reception: 3,
    price: 775000,
    floor: "3,120 sq ft",
    status: "Under offer",
    blurb:
      "A converted threshing barn with five bedrooms, a double-height living hall and a field boundary running along the northern edge of the plot.",
    features: [
      "Double-height living hall with original beams",
      "Rough meadow at the rear",
      "Detached double garage and workshop",
      "Oil-fired heating, recently serviced",
    ],
    tenure: "Freehold",
    epc: "Band D",
    agent: "Priya Sandhu",
    variant: 3,
  },
  {
    id: "cedar-wharf",
    address: "22 Wharf Walk",
    area: "Riverside",
    type: "Apartment",
    beds: 2,
    baths: 1,
    reception: 1,
    price: 415000,
    floor: "890 sq ft",
    status: "For sale",
    blurb:
      "A well-placed two-bedroom on the third floor, with a west-facing balcony and the river path directly outside the building.",
    features: [
      "West-facing balcony over the towpath",
      "Lift and secure entry",
      "Allocated parking bay",
      "Fitted 2023, ready to move into",
    ],
    tenure: "Leasehold · 119 years",
    epc: "Band C",
    agent: "Rowan Vance",
    variant: 1,
  },
  {
    id: "prospect-villa",
    address: "9 Prospect Hill",
    area: "Westfields",
    type: "House",
    beds: 4,
    baths: 3,
    reception: 3,
    price: 1020000,
    floor: "2,760 sq ft",
    status: "For sale",
    blurb:
      "A white-rendered villa on the ridge, with long views south over the park. Three reception rooms, a separate office and a double garage.",
    features: [
      "Long south-facing views over the park",
      "Separate home office with its own entrance",
      "Double garage with EV charger",
      "Landscaped front and rear gardens",
    ],
    tenure: "Freehold",
    epc: "Band B",
    agent: "Priya Sandhu",
    variant: 0,
  },
];

const AREAS = ["All areas", "Westfields", "Old Town", "Riverside", "North Quarter"];
const TYPES = ["Any type", "House", "Townhouse", "Apartment"];
const BEDS = [
  { label: "Any beds", value: 0 },
  { label: "2+ beds", value: 2 },
  { label: "3+ beds", value: 3 },
  { label: "4+ beds", value: 4 },
];
const PRICES = [
  { label: "Any price", value: Infinity },
  { label: "Up to £500k", value: 500000 },
  { label: "Up to £750k", value: 750000 },
  { label: "Up to £1m", value: 1000000 },
];

const selectClass =
  "h-12 w-full appearance-none border border-[#e2ded6] bg-white px-4 pr-10 text-[15px] text-[#1a1c1a] outline-none transition-colors focus:border-[#20503d]";

function formatPrice(value: number) {
  return `£${value.toLocaleString("en-GB")}`;
}

export function PropertySearch({ theme }: { theme: DemoTheme }) {
  const [area, setArea] = useState(AREAS[0]);
  const [type, setType] = useState(TYPES[0]);
  const [beds, setBeds] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [openId, setOpenId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const results = useMemo(
    () =>
      PROPERTIES.filter(
        (property) =>
          (area === AREAS[0] || property.area === area) &&
          (type === TYPES[0] || property.type === type) &&
          property.beds >= beds &&
          property.price <= maxPrice,
      ),
    [area, type, beds, maxPrice],
  );

  const open = PROPERTIES.find((property) => property.id === openId) ?? null;

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div>
      {/* Filter bar */}
      <div className="grid gap-3 border border-[#e2ded6] bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6f6a]">
            Area
          </span>
          <select
            value={area}
            onChange={(event) => setArea(event.target.value)}
            className={selectClass}
          >
            {AREAS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6f6a]">
            Property type
          </span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className={selectClass}
          >
            {TYPES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <fieldset className="flex flex-col gap-2">
          <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6f6a]">
            Bedrooms
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {BEDS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setBeds(item.value)}
                aria-pressed={beds === item.value}
                className={`h-9 border px-3 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20503d] ${
                  beds === item.value
                    ? "border-[#20503d] bg-[#20503d] text-white"
                    : "border-[#e2ded6] bg-white text-[#4c524d] hover:border-[#b9b3a6]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6f6a]">
            Price
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {PRICES.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setMaxPrice(item.value)}
                aria-pressed={maxPrice === item.value}
                className={`h-9 border px-3 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20503d] ${
                  maxPrice === item.value
                    ? "border-[#20503d] bg-[#20503d] text-white"
                    : "border-[#e2ded6] bg-white text-[#4c524d] hover:border-[#b9b3a6]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-[15px] text-[#4c524d]" role="status">
          {results.length} {results.length === 1 ? "property" : "properties"}
          {area !== AREAS[0] ? ` in ${area}` : ""}
        </p>
        <button
          type="button"
          onClick={() => {
            setArea(AREAS[0]);
            setType(TYPES[0]);
            setBeds(0);
            setMaxPrice(Infinity);
          }}
          className="text-[14px] text-[#20503d] underline underline-offset-4 transition-colors hover:text-[#142f24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20503d]"
        >
          Clear filters
        </button>
      </div>

      {results.length === 0 ? (
        <div className="mt-8 border border-dashed border-[#d8d3c9] bg-white/60 px-6 py-16 text-center">
          <p className="font-display text-2xl text-[#1a1c1a]">
            Nothing matches those filters.
          </p>
          <p className="mt-3 text-[15px] text-[#6b6f6a]">
            Try widening the price range or clearing the area.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <article
              key={property.id}
              className="group flex flex-col border border-[#e2ded6] bg-white transition-colors hover:border-[#b9b3a6]"
            >
              <div className="relative overflow-hidden">
                <DemoArtwork
                  motif="facade"
                  variant={property.variant}
                  theme={theme}
                  alt={`Illustration of the building at ${property.address}`}
                  className="aspect-[4/3] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 bg-[#1a1c1a] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white">
                  {property.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[13px] uppercase tracking-[0.16em] text-[#6b6f6a]">
                  {property.area} · {property.type}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-[#1a1c1a]">
                  {property.address}
                </h3>
                <p className="mt-3 text-[20px] text-[#20503d]">
                  {formatPrice(property.price)}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-[#eceae4] pt-4 text-[13px] text-[#6b6f6a]">
                  <li>{property.beds} beds</li>
                  <li>{property.baths} baths</li>
                  <li>{property.reception} reception</li>
                  <li>{property.floor}</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setOpenId(property.id)}
                  className="mt-5 inline-flex items-center gap-2 self-start text-[15px] font-medium text-[#1a1c1a] underline decoration-[#c9c3b6] underline-offset-4 transition-colors hover:decoration-[#20503d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20503d]"
                >
                  View details
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Details preview */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#141613]/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpenId(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-dialog-title"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white"
          >
            <div className="relative">
              <DemoArtwork
                motif="facade"
                variant={open.variant}
                theme={theme}
                alt={`Illustration of the building at ${open.address}`}
                seed="preview"
                className="aspect-[16/9] w-full"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Close property details"
                className="absolute top-4 right-4 grid h-11 w-11 place-items-center bg-white/90 text-[#1a1c1a] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[13px] uppercase tracking-[0.16em] text-[#6b6f6a]">
                {open.area} · {open.type} · {open.status}
              </p>
              <h3
                id="property-dialog-title"
                className="mt-2 font-display text-3xl leading-tight text-[#1a1c1a]"
              >
                {open.address}
              </h3>
              <p className="mt-3 text-[22px] text-[#20503d]">
                {formatPrice(open.price)}
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-[#4c524d]">
                {open.blurb}
              </p>

              <ul className="mt-6 grid gap-2 border-t border-[#eceae4] pt-5 sm:grid-cols-2">
                {open.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[15px] text-[#4c524d]">
                    <span aria-hidden="true" className="text-[#20503d]">
                      ·
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 grid gap-4 border-t border-[#eceae4] pt-5 text-[14px] sm:grid-cols-3">
                {[
                  ["Floor area", open.floor],
                  ["Tenure", open.tenure],
                  ["EPC", open.epc],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6f6a]">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[#1a1c1a]">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#eceae4] pt-6">
                <p className="text-[14px] text-[#6b6f6a]">
                  Listed by{" "}
                  <span className="text-[#1a1c1a]">{open.agent}</span>
                </p>
                <a
                  href="#contact"
                  onClick={() => setOpenId(null)}
                  className="ml-auto inline-flex h-12 items-center bg-[#20503d] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#142f24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20503d]"
                >
                  Arrange a viewing
                </a>
              </div>

              <p className="mt-5 text-[12px] leading-relaxed text-[#9a958a]">
                Demonstration listing. This address, price and description were
                invented by Cryptic to show how a property detail view can look.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}