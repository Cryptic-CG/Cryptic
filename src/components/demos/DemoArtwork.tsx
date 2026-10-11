import type { DemoMotif, DemoTheme } from "@/config/demos";

/**
 * Lightweight, resolution-independent artwork used across the demo portfolio.
 *
 * The demos are placeholder-safe: instead of shipping stock photography or
 * hotlinked assets, every visual is drawn as inline SVG from the demo's own
 * palette. It costs no network requests, never distorts, and can be swapped
 * for real client photography later by replacing this component.
 */

type Layer = React.ReactNode;

/** Stable, collision-resistant id fragment so SVG defs never clash on a page. */
function hash(value: string) {
  let h = 5381;
  for (let i = 0; i < value.length; i += 1) {
    h = ((h << 5) + h + value.charCodeAt(i)) >>> 0;
  }
  return h.toString(36);
}

/* ------------------------------------------------------------------ */
/* Motifs                                                             */
/* ------------------------------------------------------------------ */

function Dish({ accent, variant }: { accent: string; variant: number }) {
  const plates = [
    { cx: 700, cy: 400, r: 232, food: 0.34 },
    { cx: 560, cy: 420, r: 250, food: 0.2 },
    { cx: 620, cy: 380, r: 268, food: 0.44 },
    { cx: 790, cy: 330, r: 196, food: 0.28 },
  ][variant % 4];

  const inner = plates.r - 30;
  const food = plates.r * plates.food;

  return (
    <>
      <ellipse
        cx={plates.cx + 10}
        cy={plates.cy + 24}
        rx={plates.r * 1.03}
        ry={plates.r * 0.98}
        fill="#000"
        opacity="0.32"
      />
      <circle cx={plates.cx} cy={plates.cy} r={plates.r} fill="#ffffff" opacity="0.06" />
      <circle
        cx={plates.cx}
        cy={plates.cy}
        r={plates.r}
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />
      <circle
        cx={plates.cx}
        cy={plates.cy}
        r={inner}
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.1"
        strokeWidth="1"
      />
      <path
        d={`M ${plates.cx - plates.r + 56} ${plates.cy - plates.r * 0.62} A ${plates.r} ${plates.r} 0 0 1 ${plates.cx + plates.r - 26} ${plates.cy - plates.r * 0.84}`}
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.34"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx={plates.cx} cy={plates.cy} r={food} fill={accent} opacity="0.22" />
      <circle
        cx={plates.cx}
        cy={plates.cy}
        r={food}
        fill="none"
        stroke={accent}
        strokeOpacity="0.5"
        strokeWidth="1.25"
      />
      <circle
        cx={plates.cx - food * 0.55}
        cy={plates.cy - food * 0.5}
        r={food * 0.22}
        fill={accent}
        opacity="0.3"
      />
      <g opacity="0.42">
        <rect
          x={plates.cx + plates.r + 54}
          y={220}
          width="5"
          height={360 + plates.r / 3}
          rx="2.5"
          fill="#ffffff"
        />
        <rect
          x={plates.cx + plates.r + 88}
          y={220}
          width="5"
          height={360 + plates.r / 3}
          rx="2.5"
          fill="#ffffff"
          opacity="0.6"
        />
      </g>
      <circle
        cx={plates.cx - plates.r - 74}
        cy={plates.cy + 196}
        r="58"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />
      <circle
        cx={plates.cx - plates.r - 74}
        cy={plates.cy + 196}
        r="50"
        fill="#ffffff"
        opacity="0.04"
      />
      <rect
        x={plates.cx - plates.r - 158}
        y={plates.cy + 162}
        width="90"
        height="68"
        rx="3"
        fill="#ffffff"
        opacity="0.05"
      />
    </>
  );
}

function Body({ accent, variant }: { accent: string; variant: number }) {
  const sweep = variant % 4;

  return (
    <>
      <g opacity="0.9">
        {sweep === 0 && (
          <>
            <path
              d="M -60 690 C 240 560 520 430 1280 360"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.22"
              strokeWidth="90"
              strokeLinecap="round"
            />
            <path
              d="M -60 700 C 250 585 520 460 1280 400"
              fill="none"
              stroke={accent}
              strokeOpacity="0.2"
              strokeWidth="10"
            />
            <path
              d="M 40 520 C 380 430 760 372 1240 330"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.5"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}
        {sweep === 1 && (
          <>
            <path
              d="M -40 760 C 180 470 560 300 1300 300"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.2"
              strokeWidth="120"
              strokeLinecap="round"
            />
            <path
              d="M -40 745 C 190 470 560 312 1300 312"
              fill="none"
              stroke={accent}
              strokeOpacity="0.22"
              strokeWidth="8"
            />
            <ellipse cx="420" cy="430" rx="300" ry="60" fill="#ffffff" opacity="0.07" />
          </>
        )}
        {sweep === 2 && (
          <>
            <ellipse cx="620" cy="430" rx="560" ry="210" fill="#ffffff" opacity="0.05" />
            <ellipse cx="620" cy="430" rx="560" ry="210" fill="none" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
            <ellipse cx="620" cy="430" rx="380" ry="140" fill="none" stroke={accent} strokeOpacity="0.35" strokeWidth="2" />
            <ellipse cx="620" cy="430" rx="190" ry="70" fill={accent} opacity="0.12" />
          </>
        )}
        {sweep === 3 && (
          <>
            <path
              d="M 120 820 L 120 470 A 250 250 0 0 1 620 470 L 620 820"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.16"
              strokeWidth="70"
            />
            <path
              d="M 120 470 A 250 250 0 0 1 620 470"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.45"
              strokeWidth="5"
            />
            <path
              d="M 700 560 L 1180 560"
              stroke={accent}
              strokeOpacity="0.3"
              strokeWidth="2"
              strokeDasharray="14 16"
            />
          </>
        )}
      </g>
      <ellipse cx="210" cy="196" rx="330" ry="190" fill={accent} opacity="0.06" />
      <g stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1">
        <path d="M 0 120 H 1200" />
        <path d="M 0 240 H 1200" />
        <path d="M 0 640 H 1200" />
      </g>
    </>
  );
}

function Facade({ accent, variant }: { accent: string; variant: number }) {
  const layouts = [
    { x: 470, y: 268, cw: 56, ch: 64, rows: 7, cols: 6, sun: 300, sunR: 96, side: 300 },
    { x: 540, y: 350, cw: 46, ch: 54, rows: 5, cols: 8, sun: 880, sunR: 64, side: 180 },
    { x: 420, y: 200, cw: 62, ch: 72, rows: 7, cols: 6, sun: 960, sunR: 130, side: 420 },
    { x: 500, y: 300, cw: 50, ch: 58, rows: 6, cols: 7, sun: 250, sunR: 78, side: 240 },
  ][variant % 4];

  const { x, y, cw, ch, rows, cols, sun, sunR, side } = layouts;

  const windows = Array.from({ length: cols * rows }, (_, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const lit = (c * 3 + r * 5 + variant * 7) % 5 === 0;
    return (
      <rect
        key={i}
        x={x + 14 + c * cw}
        y={y + 18 + r * ch}
        width={cw - 26}
        height={ch - 26}
        fill={lit ? accent : "#ffffff"}
        opacity={lit ? 0.5 : 0.1}
        rx="1.5"
      />
    );
  });

  return (
    <>
      <circle cx={sun} cy={sun * 0.76} r={sunR} fill={accent} opacity="0.14" />
      <circle
        cx={sun}
        cy={sun * 0.76}
        r={sunR}
        fill="none"
        stroke={accent}
        strokeOpacity="0.38"
        strokeWidth="1.5"
      />
      <rect
        x={x}
        y={y}
        width={cols * cw}
        height={rows * ch + 26}
        fill="#ffffff"
        opacity="0.05"
      />
      <rect
        x={x}
        y={y}
        width={cols * cw}
        height={rows * ch + 26}
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.16"
      />
      {windows}
      <rect
        x={side}
        y={y + rows * ch - 130}
        width={side > 300 ? 200 : 130}
        height="290"
        fill="#ffffff"
        opacity="0.04"
      />
      <rect
        x={side}
        y={y + rows * ch - 130}
        width={side > 300 ? 200 : 130}
        height="290"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.12"
      />
      <rect
        x={x - 110}
        y={y + rows * ch - 60}
        width="72"
        height="220"
        fill="#ffffff"
        opacity="0.03"
      />
      <rect
        x={x - 110}
        y={y + rows * ch - 60}
        width="72"
        height="220"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.1"
      />
      <path d="M 0 760 H 1200" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M 0 760 H 1200" stroke={accent} strokeOpacity="0.14" strokeWidth="10" />
    </>
  );
}

function Blade({ accent, variant }: { accent: string; variant: number }) {
  const diagonal = variant % 2 === 0;

  const stripes = diagonal
    ? Array.from({ length: 16 }, (_, i) => (
        <rect
          key={i}
          x={-300 + i * 92}
          y={-200}
          width="44"
          height="1240"
          fill={i % 2 === 0 ? "#ffffff" : accent}
          opacity={i % 2 === 0 ? 0.12 : 0.24}
          transform="rotate(24 600 400)"
        />
      ))
    : Array.from({ length: 12 }, (_, i) => (
        <rect
          key={i}
          x={-100}
          y={44 + i * 64}
          width="1400"
          height="28"
          fill={i % 2 === 0 ? "#ffffff" : accent}
          opacity={i % 2 === 0 ? 0.12 : 0.24}
        />
      ));

  return (
    <>
      <g>{stripes}</g>

      {variant % 4 === 0 && (
        <g>
          <rect x="430" y="30" width="340" height="700" rx="170" fill="#000" opacity="0.3" />
          <rect
            x="430"
            y="30"
            width="340"
            height="700"
            rx="170"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
          <rect x="412" y="-6" width="376" height="52" rx="16" fill={accent} opacity="0.6" />
          <rect x="412" y="712" width="376" height="52" rx="16" fill={accent} opacity="0.6" />
          <rect x="412" y="-6" width="376" height="52" rx="16" fill="none" stroke="#ffffff" strokeOpacity="0.2" />
          <rect x="412" y="712" width="376" height="52" rx="16" fill="none" stroke="#ffffff" strokeOpacity="0.2" />
        </g>
      )}

      {variant % 4 === 2 && (
        <g transform="rotate(-30 600 400)">
          <rect x="612" y="-80" width="18" height="960" fill="#ffffff" opacity="0.32" rx="9" />
          <rect x="572" y="-80" width="10" height="960" fill="#ffffff" opacity="0.18" rx="5" />
          <rect x="566" y="-120" width="120" height="40" rx="14" fill="#ffffff" opacity="0.26" />
        </g>
      )}

      {variant % 4 === 3 && (
        <g transform="rotate(-16 600 400)" opacity="0.85">
          <circle cx="700" cy="330" r="86" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="5" />
          <circle cx="760" cy="420" r="86" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="5" />
          <circle cx="700" cy="330" r="14" fill={accent} opacity="0.7" />
          <circle cx="760" cy="420" r="14" fill={accent} opacity="0.7" />
        </g>
      )}

      <rect
        x="0"
        y="0"
        width="1200"
        height="800"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
    </>
  );
}

function Roof({ accent, variant }: { accent: string; variant: number }) {
  const wide = variant % 2 === 0;

  return (
    <>
      <circle cx="250" cy="200" r="78" fill={accent} opacity="0.18" />
      <g>
        <rect x={wide ? 380 : 440} y="430" width={wide ? 440 : 320} height="330" fill="#ffffff" opacity="0.06" />
        <rect x={wide ? 380 : 440} y="430" width={wide ? 440 : 320} height="330" fill="none" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2" />
        <path
          d={
            wide
              ? "M 340 432 L 600 220 L 860 432 Z"
              : "M 400 432 L 600 240 L 800 432 Z"
          }
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d={
            wide
              ? "M 340 432 L 600 220 L 860 432 Z"
              : "M 400 432 L 600 240 L 800 432 Z"
          }
          fill={accent}
          opacity="0.12"
        />
        <rect x={wide ? 560 : 566} y="620" width="80" height="140" rx="3" fill="#ffffff" opacity="0.14" />
        <rect x={wide ? 430 : 476} y="520" width="96" height="80" rx="3" fill={accent} opacity="0.28" />
        <rect x={wide ? 700 : 686} y="520" width="96" height="80" rx="3" fill={accent} opacity="0.28" />
        {variant % 4 >= 2 && (
          <rect x={wide ? 880 : 830} y="560" width="180" height="200" fill="none" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2" />
        )}
      </g>
      <path d="M 0 760 H 1200" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" />
      <circle cx="960" cy="700" r="54" fill="#ffffff" opacity="0.05" />
      <circle cx="180" cy="710" r="76" fill="#ffffff" opacity="0.04" />
    </>
  );
}

const MOTIFS: Record<
  DemoMotif,
  (props: { accent: string; variant: number }) => Layer
> = {
  dish: Dish,
  body: Body,
  facade: Facade,
  blade: Blade,
  roof: Roof,
};

/* ------------------------------------------------------------------ */
/* Component                                                          */
/* ------------------------------------------------------------------ */

export interface DemoArtworkProps {
  motif: DemoMotif;
  variant?: number;
  theme: DemoTheme;
  /** Meaningful description of the artwork. */
  alt: string;
  /** When true the artwork is skipped by assistive technology. */
  decorative?: boolean;
  /** Distinguishes repeated copies of the same artwork on one page. */
  seed?: string;
  className?: string;
}

export function DemoArtwork({
  motif,
  variant = 0,
  theme,
  alt,
  decorative = false,
  seed,
  className = "",
}: DemoArtworkProps) {
  const id = `a${motif}${variant}${hash(`${alt}|${seed ?? ""}`)}`;
  const v = variant % 4;
  const Motif = MOTIFS[motif];

  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
    >
      {!decorative && <title>{alt}</title>}
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.from} />
          <stop offset="55%" stopColor={theme.via} />
          <stop offset="100%" stopColor={theme.to} />
        </linearGradient>
        <radialGradient id={`${id}bloom`} cx="0.5" cy="0.4" r="0.7">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.28" />
          <stop offset="60%" stopColor={theme.accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}vig`} cx="0.5" cy="0.5" r="0.78">
          <stop offset="52%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
        </radialGradient>
        <filter id={`${id}grain`} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="1200" height="800" fill={`url(#${id}bg)`} />
      <Motif accent={theme.accent} variant={v} />
      <rect width="1200" height="800" fill={`url(#${id}bloom)`} />
      <rect width="1200" height="800" fill={`url(#${id}vig)`} />
      <rect
        width="1200"
        height="800"
        filter={`url(#${id}grain)`}
        opacity="0.15"
        style={{ mixBlendMode: "overlay" }}
      />
    </svg>
  );
}