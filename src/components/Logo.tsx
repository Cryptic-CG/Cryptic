import Image from "next/image";
import { site } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/cryptic-logo.png"
        alt="Cryptic"
        width={549}
        height={647}
        className="h-8 w-auto select-none"
        priority
      />
      <span className="text-[17px] font-semibold tracking-tight text-zinc-50">
        {site.name}
        <span className="text-amber-300">.</span>
      </span>
    </span>
  );
}