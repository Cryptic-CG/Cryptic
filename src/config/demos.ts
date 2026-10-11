/**
 * Demo websites shown on /demos.
 *
 * Every entry in this file is a fully built, fictional demo website served from
 * its own route. Adding a sixth demo means:
 *
 *   1. append an entry to `demos` below,
 *   2. build the site in `src/demos/<slug>/`,
 *   3. register it in `src/demos/registry.ts`.
 *
 * The portfolio page, sitemap and navigation all read from this list.
 */

export type DemoStyle =
  | "editorial"
  | "precision"
  | "architectural"
  | "heritage"
  | "assured";

/** Geometry generator used for the artwork on cards and inside each demo. */
export type DemoMotif = "dish" | "body" | "facade" | "blade" | "roof";

export interface DemoArtworkSpec {
  motif: DemoMotif;
  /** 0–3. Shifts the composition so galleries never repeat themselves. */
  variant: number;
}

export interface DemoTheme {
  /** Gradient stops for the generated artwork. */
  from: string;
  via: string;
  to: string;
  /** Accent used for highlights, chips and rules. */
  accent: string;
  /** Accent at low alpha, used for preview glows. */
  glow: string;
}

export interface Demo {
  /** URL-safe identifier. Also defines the internal route `/demos/<slug>`. */
  slug: string;
  /** Fictional business name shown inside the demo website. */
  name: string;
  /** Sales category, e.g. "Premium Restaurant". */
  category: string;
  /** One or two sentences shown on the portfolio card. */
  description: string;
  /** Internal route for the live demo website. */
  route: string;
  /** Visual preview used on the portfolio card. */
  preview: DemoArtworkSpec;
  /** Featured demos lead the /demos page. */
  featured: boolean;
  /** Design language, used for labelling and future filtering. */
  style: DemoStyle;
  /** Human-readable style summary shown on the card. */
  styleLabel: string;
  /** Short bullets describing what a client gets. */
  highlights: string[];
  /** Colours powering the generated artwork. */
  theme: DemoTheme;
  seoTitle: string;
  seoDescription: string;
}

export const demos: Demo[] = [
  {
    slug: "restaurant",
    name: "Ember & Olive",
    category: "Premium Restaurant",
    description:
      "An editorial dining site for a small seasonal restaurant — menu storytelling, reservations and atmosphere photography handled with restraint.",
    route: "/demos/restaurant",
    preview: { motif: "dish", variant: 0 },
    featured: true,
    style: "editorial",
    styleLabel: "Editorial · Serif-led · Ivory & ember",
    highlights: ["Tasting-style menu", "Reservation flow", "Opening hours"],
    theme: {
      from: "#3a2c22",
      via: "#241b14",
      to: "#100c09",
      accent: "#e07a4f",
      glow: "rgba(224, 122, 79, 0.22)",
    },
    seoTitle: "Ember & Olive — Restaurant Website Demo",
    seoDescription:
      "A demonstration restaurant website built by Cryptic. Fictional concept site for a seasonal dining room.",
  },
  {
    slug: "auto-detailing",
    name: "Vertex Auto Spa",
    category: "Auto Detailing / Car Care",
    description:
      "A high-contrast detailing site built around before-and-after proof, clear packages and a booking path that converts.",
    route: "/demos/auto-detailing",
    preview: { motif: "body", variant: 0 },
    featured: true,
    style: "precision",
    styleLabel: "Precision · Bold sans · Carbon & cobalt",
    highlights: ["Before / after slider", "Service packages", "Service area"],
    theme: {
      from: "#1b1f26",
      via: "#0e1217",
      to: "#06080a",
      accent: "#5b8cff",
      glow: "rgba(91, 140, 255, 0.22)",
    },
    seoTitle: "Vertex Auto Spa — Auto Detailing Website Demo",
    seoDescription:
      "A demonstration automotive detailing website built by Cryptic. Fictional concept site for a detailing studio.",
  },
  {
    slug: "real-estate",
    name: "Alder & Rowe",
    category: "Real Estate",
    description:
      "A calm, architectural brokerage site with a working property filter, listing cards and an agent section that reads as premium.",
    route: "/demos/real-estate",
    preview: { motif: "facade", variant: 0 },
    featured: false,
    style: "architectural",
    styleLabel: "Architectural · Airy neutral · Sage accent",
    highlights: ["Property search UI", "Listing detail preview", "Agent profiles"],
    theme: {
      from: "#3a4440",
      via: "#232b28",
      to: "#111614",
      accent: "#9cbf9f",
      glow: "rgba(156, 191, 159, 0.2)",
    },
    seoTitle: "Alder & Rowe — Real Estate Website Demo",
    seoDescription:
      "A demonstration real estate website built by Cryptic. Fictional concept site with invented listings and agents.",
  },
  {
    slug: "barbershop",
    name: "Sable & Shears",
    category: "Barbershop / Men's Grooming",
    description:
      "A confident grooming studio site — sharp pricing, a barber roster, a gallery and booking that suits a walk-in culture.",
    route: "/demos/barbershop",
    preview: { motif: "blade", variant: 0 },
    featured: false,
    style: "heritage",
    styleLabel: "Heritage · Condensed display · Charcoal & brass",
    highlights: ["Service menu + pricing", "Barber roster", "Booking CTA"],
    theme: {
      from: "#2d2822",
      via: "#1b1714",
      to: "#0c0a09",
      accent: "#d4a24c",
      glow: "rgba(212, 162, 76, 0.22)",
    },
    seoTitle: "Sable & Shears — Barbershop Website Demo",
    seoDescription:
      "A demonstration barbershop website built by Cryptic. Fictional concept site for a grooming studio.",
  },
  {
    slug: "home-service",
    name: "Hollis Home Services",
    category: "Local Home Service",
    description:
      "A trustworthy residential services site — plain-language services, a clear process, coverage areas and an instant quote path.",
    route: "/demos/home-service",
    preview: { motif: "roof", variant: 0 },
    featured: false,
    style: "assured",
    styleLabel: "Assured · Friendly grotesk · White & teal",
    highlights: ["Instant quote flow", "Coverage areas", "FAQ + process"],
    theme: {
      from: "#1e3b46",
      via: "#132a33",
      to: "#0a171d",
      accent: "#5ec2b8",
      glow: "rgba(94, 194, 184, 0.2)",
    },
    seoTitle: "Hollis Home Services — Home Care Website Demo",
    seoDescription:
      "A demonstration local home services website built by Cryptic. Fictional concept site for a cleaning and maintenance company.",
  },
];

export function getDemo(slug: string): Demo | undefined {
  return demos.find((demo) => demo.slug === slug);
}