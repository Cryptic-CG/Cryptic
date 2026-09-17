import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-zinc-50 text-zinc-950 hover:bg-white hover:-translate-y-px",
  secondary:
    "border border-zinc-700/70 text-zinc-200 hover:border-zinc-400 hover:bg-zinc-100/5 hover:-translate-y-px",
  ghost: "text-zinc-300 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  children,
}: Props) {
  const external = /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}