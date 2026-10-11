import { Anton, Barlow } from "next/font/google";
import Link from "next/link";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import { CrypticCta } from "@/demos/kit/CrypticCta";
import { CrypticDemoBar } from "@/demos/kit/CrypticDemoBar";
import { DemoSiteFooter } from "@/demos/kit/DemoSiteFooter";
import { DemoSiteNav } from "@/demos/kit/DemoSiteNav";
import { DemoContainer, DemoSection } from "@/demos/kit/primitives";
import { Reveal } from "@/demos/kit/Reveal";
import { BookingForm } from "@/demos/barbershop/BookingForm";
import { ServiceMenu } from "@/demos/barbershop/ServiceMenu";
import type { Demo } from "@/config/demos";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-demo-display",
});

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-demo-body",
});

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Barbers", href: "#barbers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Hours", href: "#hours" },
];

const BARBERS = [
  {
    name: "Ronan Vale",
    role: "Founder",
    initials: "RV",
    since: "Chair one",
    note: "Twenty-two years behind the chair. Cuts short, talks less, remembers how you take it.",
  },
  {
    name: "Micah Bell",
    role: "Senior barber",
    initials: "MB",
    since: "Chair two",
    note: "Skin fades and hard partings. Will talk you out of anything that will not grow out.",
  },
  {
    name: "Theo March",
    role: "Barber · beard",
    initials: "TM",
    since: "Chair three",
    note: "Beard design, straight-razor work and hot towel shaves. Keeps a book of shape notes.",
  },
  {
    name: "Ellis Pryce",
    role: "Barber",
    initials: "EP",
    since: "Chair four",
    note: "Junior cuts without the fuss. Also the best fade in the building, quietly.",
  },
];

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Friday", time: "09:00 – 19:00" },
  { day: "Saturday", time: "08:00 – 18:00" },
  { day: "Sunday", time: "10:00 – 16:00" },
];

const GALLERY = [
  { v: 0, ratio: "aspect-[4/5]" },
  { v: 1, ratio: "aspect-[4/5]" },
  { v: 2, ratio: "aspect-[4/5]" },
  { v: 3, ratio: "aspect-[4/5]" },
];

export function BarbershopDemo({ demo }: { demo: Demo }) {
  const theme = demo.theme;

  return (
    <div
      id="main"
      className={`${display.variable} ${body.variable} min-h-screen bg-[#141210] font-body text-white [--accent:#d4a24c]`}
    >
      <CrypticDemoBar demo={demo} />

      <DemoSiteNav
        brand={
          <span className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" aria-hidden="true" fill="none">
              <circle cx="20" cy="20" r="18.5" stroke="#d4a24c" strokeWidth="1.5" />
              <path d="M13 25.5 27 14.5" stroke="#d4a24c" strokeWidth="2" strokeLinecap="round" />
              <path d="M13 14.5 27 25.5" stroke="#d4a24c" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-bold uppercase tracking-[0.18em] text-white">
                Sable &amp; Shears
              </span>
              <span className="mt-1 font-mono text-[9px] tracking-[0.3em] text-[#d4a24c] uppercase">
                Grooming Co.
              </span>
            </span>
          </span>
        }
        links={NAV_LINKS}
        cta={{ label: "Book a chair", href: "#booking" }}
        barClassName="border-b border-white/10 bg-[#141210]/92 backdrop-blur-md"
        listClassName="text-[13px] font-semibold uppercase tracking-[0.12em]"
        linkClassName="rounded-sm text-white/55 transition-colors hover:text-[#d4a24c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a24c]"
        ctaClassName="bg-[#d4a24c] text-[12px] font-bold uppercase tracking-[0.16em] text-[#141210] transition-colors hover:bg-[#e2b663] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4a24c]"
        panelClassName="border-t border-white/10 bg-[#141210]"
        panelLinkClassName="font-semibold tracking-[0.12em] text-white/75 uppercase"
      />

      {/* --------------------------------------------------------- Hero */}
      <DemoSection className="relative isolate overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30">
          <DemoArtwork
            motif="blade"
            variant={0}
            theme={theme}
            alt=""
            decorative
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/80 to-[#141210]/70" />
        </div>

        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a24c]">
              Fenwick Row · Chapel Gate
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-[3.25rem] leading-[0.88] tracking-tight text-white uppercase sm:text-7xl lg:text-[6rem]">
              Sharp work.
              <br />
              <span className="text-[#d4a24c]">Straight talk.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60">
              Four chairs, no music you have to shout over, and barbers who will
              tell you when a cut will not suit you. Appointments or walk-ins,
              seven days a week.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 bg-[#d4a24c] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#141210] transition-colors hover:bg-[#e2b663] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4a24c]"
            >
              Book a chair
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center border border-white/25 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4a24c]"
            >
              See the menu
            </Link>
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Services */}
      <DemoSection id="services" className="border-b border-white/10 bg-[#1a1714]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a24c]">
                  The menu
                </p>
                <h2 className="mt-5 font-display text-4xl tracking-tight text-white uppercase sm:text-6xl">
                  Services &amp; prices
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-relaxed text-white/50">
                Fixed prices, no card surcharge, no upsell in the mirror. Chair
                time is what you are paying for.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <ServiceMenu selectedId="cut-finish" />
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Barbers */}
      <DemoSection id="barbers" className="border-b border-white/10">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a24c]">
              The chairs
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-white uppercase sm:text-6xl">
              Who is cutting
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BARBERS.map((barber, index) => (
              <Reveal key={barber.name} delay={index * 90}>
                <article className="group flex h-full flex-col overflow-hidden border border-white/10 transition-colors hover:border-[#d4a24c]/45">
                  <div className="relative">
                    <DemoArtwork
                      motif="blade"
                      variant={index % 4}
                      theme={theme}
                      alt={`Illustration representing ${barber.name}'s chair`}
                      className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 bg-[#141210] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4a24c]"
                    >
                      {barber.since}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold tracking-tight uppercase text-white">
                      {barber.name}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {barber.role}
                    </p>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/55">
                      {barber.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Gallery */}
      <DemoSection id="gallery" className="border-b border-white/10 bg-[#1a1714]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a24c]">
                  In the room
                </p>
                <h2 className="mt-5 font-display text-4xl tracking-tight text-white uppercase sm:text-6xl">
                  The shop
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-relaxed text-white/50">
                Concept illustrations for this demonstration — a real studio
                would show its work, its room and its regulars here.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((tile, index) => (
              <Reveal key={`${tile.v}-${index}`} delay={index * 80}>
                <figure className="h-full">
                  <div className="overflow-hidden border border-white/10">
                    <DemoArtwork
                      motif="blade"
                      variant={tile.v}
                      theme={theme}
                      alt={`Illustration of the barbershop interior, view ${index + 1}`}
                      className={`w-full ${tile.ratio}`}
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Fig. {index + 1}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ---------------------------------------------- Hours and location */}
      <DemoSection id="hours" className="border-b border-white/10">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a24c]">
              Hours
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-white uppercase sm:text-5xl">
              When we&apos;re open
            </h2>
            <dl className="mt-9 divide-y divide-white/10 border-y border-white/10">
              {HOURS.map((row) => (
                <div
                  key={row.day}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-4"
                >
                  <dt className="text-[15px] text-white/80">{row.day}</dt>
                  <dd
                    className={`font-mono text-[13px] tracking-wide ${
                      row.time === "Closed" ? "text-white/35" : "text-[#d4a24c]"
                    }`}
                  >
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[14px] leading-relaxed text-white/45">
              Last bookings are thirty minutes before close. Closed Mondays
              except public holidays.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a24c]">
              Finding us
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-white uppercase sm:text-5xl">
              41 Fenwick Row
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/60">
              Chapel Gate, on the corner with the old ironmonger. The door is
              the dark green one, between the tailor and the record shop.
            </p>
            <dl className="mt-9 space-y-5 text-[15px]">
              <div className="border-t border-white/10 pt-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
                  Address
                </dt>
                <dd className="mt-2 text-white/75">
                  41 Fenwick Row
                  <br />
                  Chapel Gate (fictional)
                </dd>
              </div>
              <div className="border-t border-white/10 pt-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
                  Getting there
                </dt>
                <dd className="mt-2 text-white/75">
                  Four minutes on foot from Chapel Gate station. Step-free
                  entrance through the side door.
                </dd>
              </div>
              <div className="border-t border-white/10 pt-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
                  Late appointments
                </dt>
                <dd className="mt-2 text-white/75">
                  Thursday and Friday until 19:00, for people who cannot make
                  the weekend.
                </dd>
              </div>
            </dl>
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Booking */}
      <DemoSection id="booking" className="bg-[#1a1714]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a24c]">
                Booking
              </p>
              <h2 className="mt-5 font-display text-4xl tracking-tight text-white uppercase sm:text-5xl">
                Take a chair
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-white/60">
                Book ahead if you can. Saturdays go first, and the Thursday and
                Friday evening chairs are the busiest part of the week.
              </p>
              <ul className="mt-9 space-y-4 text-[15px] text-white/60">
                {[
                  "Appointments run 30–70 minutes depending on the service.",
                  "Walk-ins welcome if a chair is free.",
                  "Card and cash, no booking fee.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-[#d4a24c]">
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
              <BookingForm />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      <DemoSiteFooter
        brand={
          <div>
            <p className="text-lg font-bold tracking-[0.16em] text-white uppercase">
              Sable &amp; Shears
            </p>
            <p className="mt-1 font-mono text-[9px] tracking-[0.3em] text-[#d4a24c] uppercase">
              Grooming Co.
            </p>
            <p className="mt-4 max-w-[28ch] text-[13px] leading-relaxed text-white/45">
              Four chairs on Fenwick Row. Cuts, shaves and beard work, seven days
              a week.
            </p>
          </div>
        }
        columns={[
          {
            title: "Menu",
            items: [
              { label: "Cut & Finish", href: "#services" },
              { label: "Skin Fade", href: "#services" },
              { label: "Beard Sculpt", href: "#services" },
              { label: "Hot Towel Shave", href: "#services" },
            ],
          },
          {
            title: "Visit",
            items: [
              { label: "The chairs", href: "#barbers" },
              { label: "The shop", href: "#gallery" },
              { label: "Hours", href: "#hours" },
              { label: "Book a chair", href: "#booking" },
            ],
          },
          {
            title: "More demos",
            items: [
              { label: "All Cryptic demos", href: "/demos" },
              { label: "Restaurant demo", href: "/demos/restaurant" },
              { label: "Home service demo", href: "/demos/home-service" },
            ],
          },
        ]}
        className="border-t border-white/10 bg-[#141210]"
        titleClassName="text-[#d4a24c]"
        linkClassName="text-white/60 hover:text-white"
        legalClassName="border-white/10 text-white/35"
        legal={
          <p>
            Sable &amp; Shears is a fictional barbershop created by{" "}
            <Link href="/demos" className="underline underline-offset-4 hover:text-white/70">
              Cryptic
            </Link>{" "}
            to demonstrate a grooming website. The address, opening hours and
            prices on this page are invented.
          </p>
        }
      />

      <CrypticCta demo={demo} />
    </div>
  );
}