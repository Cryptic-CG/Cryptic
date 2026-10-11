import type { ComponentType } from "react";
import type { Demo } from "@/config/demos";
import { AutoDetailingDemo } from "@/demos/auto-detailing/AutoDetailingDemo";
import { BarbershopDemo } from "@/demos/barbershop/BarbershopDemo";
import { HomeServiceDemo } from "@/demos/home-service/HomeServiceDemo";
import { RealEstateDemo } from "@/demos/real-estate/RealEstateDemo";
import { RestaurantDemo } from "@/demos/restaurant/RestaurantDemo";

export type DemoSiteProps = { demo: Demo };

/**
 * Maps a demo slug to its website. Adding a demo means adding one import and
 * one line here — everything else (routes, portfolio page, sitemap) reads from
 * `src/config/demos.ts`.
 */
export const DEMO_SITES: Record<string, ComponentType<DemoSiteProps>> = {
  restaurant: RestaurantDemo,
  "auto-detailing": AutoDetailingDemo,
  "real-estate": RealEstateDemo,
  barbershop: BarbershopDemo,
  "home-service": HomeServiceDemo,
};

export function hasDemoSite(slug: string): boolean {
  return slug in DEMO_SITES;
}