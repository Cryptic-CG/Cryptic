import { Archivo } from "next/font/google";
import Link from "next/link";
import { DemoArtwork } from "@/components/demos/DemoArtwork";
import { CrypticCta } from "@/demos/kit/CrypticCta";
import { CrypticDemoBar } from "@/demos/kit/CrypticDemoBar";
import { DemoSiteFooter } from "@/demos/kit/DemoSiteFooter";
import { DemoSiteNav } from "@/demos/kit/DemoSiteNav";
import { DemoContainer, DemoSection } from "@/demos/kit/primitives";
import { Reveal } from "@/demos/kit/Reveal";
import { BeforeAfter } from "@/demos/auto-detailing/BeforeAfter";
import { BookingForm } from "@/demos/auto-detailing/BookingForm";
import { Packages } from "@/demos/auto-detailing/Packages";
import type { Demo } from "@/config/demos";

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-demo-body",
});

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Packages", href: "#packages" },
  { label: "Coverage", href: "#coverage" },
];

const SERVICES = [
  {
    no: "01",
    name: "Paint correction",
    detail:
      "Machine polishing that removes swirls, haze and oxidation without thinning the clear coat. Measured with a paint-depth gauge before we start.",
    from: "from £220",
  },
  {
    no: "02",
    name: "Ceramic coating",
    detail:
      "A two-year 9H coating applied in a filtered booth. Easier to wash, harder to stain, and noticeably glossier under daylight.",
    from: "from £395",
  },
  {
    no: "03",
    name: "Interior deep clean",
    detail:
      "Steam extraction, seat and trim work, and odour treatment. We take the car apart properly rather than wiping the surface.",
    from: "from £140",
  },
  {
    no: "04",
    name: "Wheels & tyres",
    detail:
      "Cylinders, arches, lips and tyres. Rebuilt, sealed and dressed — the most neglected part of most cars, and the most visible.",
    from: "from £45",
  },
  {
    no: "05",
    name: "Engine bay",
    detail:
      "Degreased, steam cleaned and dressed with a matte finish. Safe plastics only, no shine where shine does not belong.",
    from: "from £70",
  },
  {
    no: "06",
    name: "Headlight restoration",
    detail:
      "Wet-sanded and polished back to clarity, then UV-protected. One of the fastest visible upgrades on any car.",
    from: "from £55",
  },
];

const BENEFITS = [
  {
    title: "Paint measured, not guessed",
    detail:
      "Every correction starts with a depth reading across the panel. If the paint is too thin, we tell you before you pay for anything.",
  },
  {
    title: "One car at a time",
    detail:
      "The studio takes a single vehicle per bay. No queue of three cars waiting behind yours when the job runs long.",
  },
  {
    title: "Products we can explain",
    detail:
      "Every bottle on the shelf is something we use ourselves. We will always tell you which step actually made the difference.",
  },
  {
    title: "Care guide after collection",
    detail:
      "You leave with a written wash routine for your specific finish. A coating is only as good as the maintenance after it.",
  },
];

const GALLERY = [
  { v: 0, ratio: "aspect-[4/3]", span: "sm:col-span-2" },
  { v: 2, ratio: "aspect-square", span: "" },
  { v: 3, ratio: "aspect-square", span: "" },
  { v: 1, ratio: "aspect-square", span: "" },
];

const REVIEWS = [
  {
    quote:
      "The paint reading before they touched anything is what sold me. Nobody else had done that, let alone given it to me in writing.",
    name: "Sample review",
    detail: "Fictional customer · concept content",
  },
  {
    quote:
      "Six hours in the bay and it came back looking like a different car. The handover notes on how to wash it were genuinely useful.",
    name: "Sample review",
    detail: "Fictional customer · concept content",
  },
  {
    quote:
      "Booked the mobile service for a car I could not move. They turned up, set up properly and left the drive spotless.",
    name: "Sample review",
    detail: "Fictional customer · concept content",
  },
];

const COVERAGE = [
  "Northgate",
  "Ashcroft",
  "Marlowe Park",
  "Stonebridge",
  "Fairlea",
  "Riverton",
  "Highmarsh",
  "Calder Vale",
  "Eastmoor",
  "Thistle Green",
];

export function AutoDetailingDemo({ demo }: { demo: Demo }) {
  const theme = demo.theme;

  return (
    <div
      id="main"
      className={`${body.variable} min-h-screen bg-[#08090b] font-body text-white [--accent:#5b8cff]`}
    >
      <CrypticDemoBar demo={demo} />

      <DemoSiteNav
        brand={
          <span className="flex items-center gap-3">
            <svg
              viewBox="0 0 32 32"
              className="h-6 w-6 shrink-0"
              aria-hidden="true"
              fill="none"
            >
              <path d="M16 3 29 28H3L16 3Z" stroke="#5b8cff" strokeWidth="2.5" />
              <path d="M16 12 22 24H10L16 12Z" fill="#5b8cff" />
            </svg>
            <span className="text-[15px] font-bold uppercase tracking-[0.22em] text-white">
              Vertex
            </span>
          </span>
        }
        links={NAV_LINKS}
        cta={{ label: "Book a detail", href: "#booking" }}
        barClassName="border-b border-white/10 bg-[#08090b]/90 backdrop-blur-md"
        listClassName="text-[13px] font-medium"
        linkClassName="rounded-sm text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        ctaClassName="bg-[#5b8cff] text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#7ba3ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        panelClassName="border-t border-white/10 bg-[#08090b]"
        panelLinkClassName="font-medium text-white/80"
      />

      {/* --------------------------------------------------------- Hero */}
      <DemoSection className="relative isolate overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <DemoArtwork
            motif="body"
            variant={1}
            theme={theme}
            alt=""
            decorative
            className="h-full w-full opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/75 to-[#08090b]/55" />
        </div>

        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
              Studio &amp; mobile detailing
            </p>
            <h1 className="mt-6 max-w-4xl text-[2.5rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-white uppercase sm:text-6xl lg:text-7xl">
              Machine finish
              <br />
              detailing, done properly.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60">
              Correction, coating and interior work for cars that get driven.
              Measured paint readings, one bay, one car at a time — and a written
              care plan before we hand the keys back.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 bg-[#5b8cff] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#7ba3ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a detail
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#results"
              className="inline-flex items-center border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See the results
            </Link>
          </Reveal>

          <Reveal delay={200} className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["Studio", "Two bays, filtered booth"],
              ["Mobile", "We come to your drive"],
              ["Booking", "One car at a time"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#08090b] px-6 py-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                  {label}
                </p>
                <p className="mt-2 text-[15px] text-white/85">{value}</p>
              </div>
            ))}
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Services */}
      <DemoSection id="services" className="border-b border-white/10 bg-[#0b0d10]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
              Services
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-5xl">
              Six things we do, done properly
            </h2>
          </Reveal>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {SERVICES.map((service, index) => (
              <Reveal key={service.no} delay={index * 70}>
                <div className="group grid gap-4 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-white/30 sm:col-span-1">
                    {service.no}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white uppercase transition-colors group-hover:text-[#5b8cff] sm:col-span-4 sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/55 sm:col-span-5">
                    {service.detail}
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 sm:col-span-2 sm:text-right">
                    {service.from}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Results */}
      <DemoSection id="results" className="border-b border-white/10">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
              Before / after
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-5xl">
              The work, not the promise
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/55">
              Drag the handle on either example. These are concept illustrations
              rather than photographs, but the format is exactly how a real
              before-and-after gallery behaves.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <BeforeAfter
                theme={theme}
                beforeVariant={2}
                afterVariant={0}
                caption="Midnight metallic · single-stage correction"
              />
            </Reveal>
            <Reveal delay={120}>
              <BeforeAfter
                theme={theme}
                beforeVariant={3}
                afterVariant={1}
                caption="Graphite clear-coat · two-stage correction"
              />
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Packages */}
      <DemoSection id="packages" className="border-b border-white/10 bg-[#0b0d10]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
              Packages
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-5xl">
              Three ways to book
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/55">
              Sample pricing for this concept. A real studio would quote after
              a paint inspection.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <Packages />
          </Reveal>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Benefits */}
      <DemoSection className="border-b border-white/10">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
              Why us
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-5xl">
              What you actually get
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 80} className="bg-[#08090b]">
                <div className="h-full p-8 sm:p-10">
                  <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/55">
                    {benefit.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Gallery */}
      <DemoSection className="border-b border-white/10 bg-[#0b0d10]">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
              Studio
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-5xl">
              Inside the bay
            </h2>
          </Reveal>
          <div className="mt-12 grid auto-rows-auto gap-4 sm:grid-cols-3">
            {GALLERY.map((tile, index) => (
              <Reveal
                key={`${tile.v}-${index}`}
                delay={index * 80}
                className={tile.span}
              >
                <div className="h-full overflow-hidden border border-white/10">
                  <DemoArtwork
                    motif="body"
                    variant={tile.v}
                    theme={theme}
                    alt={`Illustration of studio work, tile ${index + 1}`}
                    className={`w-full ${tile.ratio}`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Reviews */}
      <DemoSection className="border-b border-white/10">
        <DemoContainer className="py-20 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
                  Reviews
                </p>
                <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-5xl">
                  What owners say
                </h2>
              </div>
              <p className="max-w-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-[13px] leading-relaxed text-white/50">
                <strong className="font-semibold text-white/70">
                  Sample content.
                </strong>{" "}
                These reviews were written for this demonstration site and do
                not belong to a real customer.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <Reveal key={review.name + index} delay={index * 90}>
                <figure className="flex h-full flex-col border border-white/10 bg-[#0b0d10] p-7">
                  <blockquote className="flex-1 text-[16px] leading-relaxed text-white/75">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-[14px] font-semibold text-white">
                      {review.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      {review.detail}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ----------------------------------------------------- Coverage */}
      <DemoSection id="coverage" className="border-b border-white/10 bg-[#0b0d10]">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
                Coverage
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-4xl">
                Studio &amp; mobile
              </h2>
              <p className="mt-5 leading-relaxed text-white/55">
                The studio is in the Northgate trade units. Mobile visits cover
                anywhere within roughly twenty minutes of it — if you are not on
                this list, ask and we will check.
              </p>
              <p className="mt-4 leading-relaxed text-white/55">
                Mobile work needs power and water, so a drive, garage or
                forecourt is ideal. Multi-day concours work is always at the
                studio.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ul className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                {COVERAGE.map((area) => (
                  <li
                    key={area}
                    className="bg-[#0b0d10] px-5 py-6 text-[15px] text-white/75"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                All area names above are fictional
              </p>
            </Reveal>
          </div>
        </DemoContainer>
      </DemoSection>

      {/* ------------------------------------------------------ Booking */}
      <DemoSection id="booking">
        <DemoContainer className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5b8cff]">
                Booking
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-4xl">
                Book a detail
              </h2>
              <p className="mt-5 leading-relaxed text-white/55">
                Tell us what you have and what you want done. We will come back
                with a price, a length of time and anything we would change
                about the plan.
              </p>

              <dl className="mt-10 space-y-5 text-[15px]">
                <div className="border-t border-white/10 pt-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Studio
                  </dt>
                  <dd className="mt-2 text-white/75">
                    Unit 7, Northgate Trade Park
                    <br />
                    Northgate (fictional)
                  </dd>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Open
                  </dt>
                  <dd className="mt-2 text-white/75">
                    Monday – Friday, 08:00 – 18:00
                    <br />
                    Saturday, 09:00 – 14:00
                  </dd>
                </div>
              </dl>
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
            <p className="flex items-center gap-3 text-[15px] font-bold tracking-[0.2em] text-white uppercase">
              <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true" fill="none">
                <path d="M16 3 29 28H3L16 3Z" stroke="#5b8cff" strokeWidth="2.5" />
                <path d="M16 12 22 24H10L16 12Z" fill="#5b8cff" />
              </svg>
              Vertex
            </p>
            <p className="mt-4 max-w-[28ch] text-[13px] leading-relaxed text-white/45">
              Paint correction, ceramic coating and interior detailing. Two
              studio bays and mobile visits across the north of the city.
            </p>
          </div>
        }
        columns={[
          {
            title: "Services",
            items: SERVICES.map((service) => ({
              label: service.name,
              href: "#services",
            })),
          },
          {
            title: "Studio",
            items: [
              { label: "Before / after", href: "#results" },
              { label: "Packages", href: "#packages" },
              { label: "Coverage", href: "#coverage" },
              { label: "Book a detail", href: "#booking" },
            ],
          },
          {
            title: "More demos",
            items: [
              { label: "All Cryptic demos", href: "/demos" },
              { label: "Restaurant demo", href: "/demos/restaurant" },
              { label: "Real estate demo", href: "/demos/real-estate" },
            ],
          },
        ]}
        className="border-t border-white/10 bg-[#08090b]"
        titleClassName="text-white/35"
        linkClassName="text-white/65 hover:text-white"
        legalClassName="border-white/10 text-white/35"
        legal={
          <p>
            Vertex Auto Spa is a fictional detailing studio created by{" "}
            <Link href="/demos" className="underline underline-offset-4 hover:text-white/70">
              Cryptic
            </Link>{" "}
            to demonstrate a detailing website. The address, opening hours,
            prices and reviews on this page are invented.
          </p>
        }
      />

      <CrypticCta demo={demo} />
    </div>
  );
}