import type { ProjectAccent } from "@/config/projects";

export const projectAccents: Record<
  ProjectAccent,
  {
    tile: string;
    text: string;
    ghost: string;
    glow: string;
  }
> = {
  cyan: {
    tile: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    text: "text-sky-300",
    ghost: "text-sky-400/[0.06]",
    glow: "rgba(56, 189, 248, 0.12)",
  },
  amber: {
    tile: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    text: "text-amber-300",
    ghost: "text-amber-400/[0.06]",
    glow: "rgba(251, 191, 36, 0.12)",
  },
};