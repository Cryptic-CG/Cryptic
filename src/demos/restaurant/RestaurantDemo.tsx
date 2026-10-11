import { Cormorant_Garamond, Jost } from "next/font/google";
import Link from "next/link";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import { CrypticCta } from "@/demos/kit/CrypticCta";
import { CrypticDemoBar } from "@/demos/kit/CrypticDemoBar";
import { DemoSiteFooter } from "@/demos/kit/DemoSiteFooter";
import { DemoSiteNav } from "@/demos/kit/DemoSiteNav";
import {
  DemoContainer,
  DemoEyebrow,
  DemoSection,
} from "@/demos/kit/primitives";
import { Reveal } from "@/demos/kit/Reveal";
import { ReservationForm } from "@/demos/restaurant/ReservationForm";
import { MenuPreview } from "@/demos/restaurant/MenuPreview";
import type { Demo } from "@/config/demos";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-demo-display",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Jost({
  subsets: ["latin"],
  variable: "--font-demo-body",
});

const NAV_LINKS = [
  { label: "The room", href: "#room" },
  { label: "Dishes", href: "#dishes" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

const DISHES = [
  {
    no: "01",
    name: "Charred leek, hazelnut, aged pecorino",
    note: "Burnt over vine wood, finished with bitter leaves and a hazelnut oil made that morning.",
    price: "18",
    variant: 1,
  },
  {
    no: "02",
    name: "Hand-dived scallop, brown butter, sea herbs",
    note: "Three scallops, dry-aged for two days, with pickled sea herbs and burnt lemon.",
    price: "24",
    variant: 2,
  },
  {
    no: "03",
    name: "Dry-aged duck, sour cherry, cocoa",
    note: "Thirty-five days in the cabinet, carved at the pass, with a cocoa and cherry jus.",
    price: "34",
    variant: 3,
  },
];

const HOURS = [
  { day: "Tuesday – Thursday", time: "12:00 – 14:30 · 18:00 – 22:00" },
  { day: "Friday – Saturday", time: "12:00 – 14:30 · 18:00 – 23:00" },
  { day: "Sunday", time: "12:00 – 16:00" },
  { day: "Monday", time: "Closed" },
];

export function RestaurantDemo({ demo }: { demo: Demo }) {
  const theme = demo.theme;

  return (
    <div
      id="main"
      className={`${display.variable} ${body.variable} min-h-screen bg-[#f6f1e7] font-body text-[#1b1512] [--accent:#b4552c] [--line:#ded5c6] [--muted:#6b6058]`}
    >
      <CrypticDemoBar demo={demo} />

      <DemoSiteNav
        brand={
          <span className="flex items-center gap-2.5">
            <span className="font-display text-[1.45rem] leading-none tracking-[0.16em] text-[#1b1512]">
              EMBER<span className="text-[#b4552c]">&</span>OLIVE
            </span>
          </span>
        }
        links={NAV_LINKS}
        cta={{ label: "Reserve a table", href: "#reserve" }}
        barClassName="border-b border-[#ded5c6] bg-[#f6f1e7]/92 backdrop-blur-md"
        listClassName="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6b6058]"
        linkClassName="rounded-sm text-[#1b1512] transition-colors hover:text-[#b4552c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4552c]"
        ctaClassName="rounded-full bg-[#1b1512] text-[13px] font-medium tracking-wide text-[#f6f1e7] transition-colors hover:bg-[#b4552c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4552c]"
        panelClassName="border-t border-[#ded5c6] bg-[#f6f1e7]"
        panelLinkClassName="font-mono text-[12px] uppercase tracking-[0.22em] text-[#1b1512]"
      />

      {/* ---------------------------------------------------------- Hero */}
      <DemoSection className="border-b border-[#ded5c6]">
        <DemoContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-7">
            <Reveal>
              <DemoEyebrow className="text-[#b4552c]">
                Lantern Row · Est. in a fictional city
              </DemoEyebrow>
              <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-[-0.02em] text-[#1b1512] sm:text-6xl lg:text-[4.5rem]">
                A seasonal dining
                <br />
                room above the
                <br />
                <em className="font-light italic text-[#b4552c]">old market.</em>
              </h1>
              <p className="mt-7 max-w-xl text-[17px] leading-[1.75] text-[#6b6058]">
                Twenty-two seats, one menu written each morning, and produce
                that arrives from four farms within a day&rsquo;s drive. We cook
                what the week gives us and stop when the kitchen is done.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#reserve"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#1b1512] px-7 text-sm font-medium tracking-wide text-[#f6f1e7] transition-colors hover:bg-[#b4552c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4552c]"
              >
                Reserve a table
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#menu"
                className="inline-flex h-12 items-center rounded-full border border-[#1b1512]/25 px-7 text-sm font-medium tracking-wide text-[#1b1512] transition-colors hover:border-[#1b1512] hover:bg-[#1b1512]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4552c]"
              >
                Read the menu
              </Link>
            </Reveal>

            <Reveal delay={220} className="mt-12">
              <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-[#ded5c6] pt-7">
                {[
                  ["Seats", "22"],
                  ["Menu", "Written daily"],
                  ["Produce", "4 farms"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6058]">
                      {label}
                    </dt>
                    <dd className="mt-2 font-display text-2xl text-[#1b1512]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-5">
            <figure>
              <div className="overflow-hidden border border-[#ded5c6]">
                <DemoArtwork
                  motif="dish"
                  variant={0}
                  theme={theme}
                  alt="Overhead illustration of a plated dish on a linen table"
                  className="aspect-[4/5] w-full"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6058]">
                Fig. 01 — Thursday&rsquo;s first plate
              </figcaption>
            </figure>
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* --------------------------------------------------------- Intro */}
      <DemoSection id="room" className="border-b border-[#ded5c6]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Reveal>
              <DemoEyebrow className="text-[#b4552c]">The room</DemoEyebrow>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] text-[#1b1512] sm:text-5xl">
                Built for the
                <br />
                long evening.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <div className="max-w-2xl space-y-5 text-[17px] leading-[1.75] text-[#4a423b]">
                <p>
                  The room is small on purpose. Twenty-two covers means the
                  kitchen can speak to every table, and you will never be
                  seated behind someone else&rsquo;s conversation.
                </p>
                <p>
                  We open for lunch Tuesday to Sunday and for dinner Wednesday
                  onward. The menu changes whenever the kitchen wants it to,
                  which is usually every few days.
                </p>
                <p>
                  Everything is cooked over vine wood and seasoned with salt we
                  bring back from the coast. Nothing is held back for a
                  photograph — if it is not good enough for the pass, it is not
                  good enough for you.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-12 grid gap-x-8 gap-y-6 border-t border-[#ded5c6] pt-8 sm:grid-cols-3">
              {[
                ["Kitchen", "Wood-fired, single pass"],
                ["Chef", "Ines Marchetti"],
                ["Cellar", "Low-intervention, mostly French"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6058]">
                    {label}
                  </p>
                  <p className="mt-2 text-[15px] text-[#1b1512]">{value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------- Dishes */}
      <DemoSection id="dishes" className="border-b border-[#ded5c6] bg-[#efe8db]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <DemoEyebrow className="text-[#b4552c]">This week</DemoEyebrow>
                <h2 className="mt-4 font-display text-4xl text-[#1b1512] sm:text-5xl">
                  Featured dishes
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-relaxed text-[#6b6058]">
                A snapshot of what the pass is sending out right now. The full
                menu changes daily.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {DISHES.map((dish, index) => (
              <Reveal key={dish.no} delay={index * 110}>
                <article className="group flex h-full flex-col">
                  <div className="overflow-hidden border border-[#ded5c6]">
                    <DemoArtwork
                      motif="dish"
                      variant={dish.variant}
                      theme={theme}
                      alt={`Illustration of ${dish.name}`}
                      className="aspect-[4/3] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-6 font-mono text-[11px] tracking-[0.22em] text-[#b4552c]">
                    {dish.no}
                  </p>
                  <h3 className="mt-2 font-display text-[1.6rem] leading-snug text-[#1b1512]">
                    {dish.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6b6058]">
                    {dish.note}
                  </p>
                  <p className="mt-5 border-t border-[#ded5c6] pt-4 font-display text-xl text-[#1b1512]">
                    {dish.price}
                    <span className="ml-1 font-body text-[13px] text-[#6b6058]">
                      per plate
                    </span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* --------------------------------------------------------- Menu */}
      <DemoSection id="menu" className="border-b border-[#ded5c6]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Reveal>
              <DemoEyebrow className="text-[#b4552c]">Menu</DemoEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-[#1b1512] sm:text-5xl">
                Written each morning.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6b6058]">
                A short preview of the current menu. Dietary requirements are
                always welcome — tell us when you book and the kitchen will
                adjust.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <MenuPreview />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Gallery */}
      <DemoSection className="border-b border-[#ded5c6] bg-[#1b1512]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <DemoEyebrow className="text-[#e07a4f]">Atmosphere</DemoEyebrow>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-[#f6f1e7] sm:text-5xl">
              Low light, high ceilings, and a lot of noise at eight o&rsquo;clock.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {[
              { v: 3, span: "lg:col-span-7", ratio: "aspect-[4/3]" },
              { v: 1, span: "lg:col-span-5", ratio: "aspect-[4/5]" },
              { v: 2, span: "lg:col-span-5", ratio: "aspect-[4/5]" },
              { v: 0, span: "lg:col-span-7", ratio: "aspect-[4/3]" },
            ].map((tile, index) => (
              <Reveal
                key={`${tile.v}-${index}`}
                delay={index * 100}
                className={`${tile.span}`}
              >
                <figure className="h-full">
                  <div className="h-full overflow-hidden border border-white/10">
                    <DemoArtwork
                      motif="dish"
                      variant={tile.v}
                      theme={theme}
                      alt={`Illustration of the dining room, plate and table setting no. ${index + 1}`}
                      className={`w-full ${tile.ratio}`}
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#f6f1e7]/40">
                    Fig. {String(index + 2).padStart(2, "0")}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* -------------------------------------------------------- Visit */}
      <DemoSection id="visit" className="border-b border-[#ded5c6]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <DemoEyebrow className="text-[#b4552c]">Opening hours</DemoEyebrow>
            <h2 className="mt-4 font-display text-4xl text-[#1b1512] sm:text-5xl">
              When we are open
            </h2>
            <dl className="mt-9 divide-y divide-[#ded5c6] border-y border-[#ded5c6]">
              {HOURS.map((row) => (
                <div
                  key={row.day}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-4"
                >
                  <dt className="text-[15px] text-[#1b1512]">{row.day}</dt>
                  <dd className="font-mono text-[13px] tracking-wide text-[#6b6058]">
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <DemoEyebrow className="text-[#b4552c]">Finding us</DemoEyebrow>
            <h2 className="mt-4 font-display text-4xl text-[#1b1512] sm:text-5xl">
              Lantern Row
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-[#4a423b]">
              Up the stairs above the old market hall. There is no street-level
              sign — look for the awning and the small brass plate by the
              door.
            </p>
            <dl className="mt-8 space-y-4 text-[15px]">
              <div className="flex gap-4 border-t border-[#ded5c6] pt-4">
                <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6058]">
                  Address
                </dt>
                <dd className="text-[#1b1512]">
                  Unit 4, Lantern Row
                  <br />
                  Old Market Quarter (fictional)
                </dd>
              </div>
              <div className="flex gap-4 border-t border-[#ded5c6] pt-4">
                <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6058]">
                  Getting here
                </dt>
                <dd className="text-[#1b1512]">
                  Six minutes on foot from the market square. Step-free access
                  via the rear entrance on Marlow Lane.
                </dd>
              </div>
              <div className="flex gap-4 border-t border-[#ded5c6] pt-4">
                <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b6058]">
                  Large tables
                </dt>
                <dd className="text-[#1b1512]">
                  Six covers or more, please book by the form below so we can
                  set the room properly.
                </dd>
              </div>
            </dl>
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Reserve */}
      <DemoSection id="reserve">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <DemoEyebrow className="text-[#b4552c]">Reservations</DemoEyebrow>
              <h2 className="mt-4 font-display text-[2.75rem] leading-[1.05] text-[#1b1512] sm:text-5xl">
                Book a table
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-[1.75] text-[#4a423b]">
                Tables open thirty days ahead. The room is small, so early
                evenings and Saturday lunch go first.
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-[#4a423b]">
                {[
                  "Parties of six or more are booked directly.",
                  "The kitchen closes at 21:30 on weekdays.",
                  "Tell us about allergies when you book.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-[#b4552c]">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={110}>
              <ReservationForm />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      <DemoSiteFooter
        brand={
          <div>
            <p className="font-display text-2xl tracking-[0.12em] text-[#f6f1e7]">
              EMBER<span className="text-[#e07a4f]">&</span>OLIVE
            </p>
            <p className="mt-3 max-w-[26ch] text-[13px] leading-relaxed text-[#f6f1e7]/50">
              A twenty-two seat dining room above the old market. Seasonal
              menus, wood fire, produce from four nearby farms.
            </p>
          </div>
        }
        columns={[
          {
            title: "Visit",
            items: [
              { label: "The room", href: "#room" },
              { label: "Dishes", href: "#dishes" },
              { label: "Menu", href: "#menu" },
              { label: "Reserve a table", href: "#reserve" },
            ],
          },
          {
            title: "Hours",
            items: [
              { label: "Tue – Thu", href: "#visit" },
              { label: "Fri – Sat", href: "#visit" },
              { label: "Sunday", href: "#visit" },
              { label: "Closed Monday", href: "#visit" },
            ],
          },
          {
            title: "More demos",
            items: [
              { label: "All Cryptic demos", href: "/demos" },
              { label: "Auto detailing demo", href: "/demos/auto-detailing" },
              { label: "Barbershop demo", href: "/demos/barbershop" },
            ],
          },
        ]}
        className="bg-[#1b1512]"
        titleClassName="text-[#e07a4f]"
        linkClassName="text-[#f6f1e7]/70 hover:text-[#f6f1e7]"
        legalClassName="border-white/10 text-[#f6f1e7]/40"
        legal={
          <p>
            Ember &amp; Olive is a fictional restaurant created by{" "}
            <Link href="/demos" className="underline underline-offset-4 hover:text-[#f6f1e7]/70">
              Cryptic
            </Link>{" "}
            to demonstrate a restaurant website. The address, opening hours,
            prices and reviews on this page are invented.
          </p>
        }
      />

      <CrypticCta demo={demo} />
    </div>
  );
}