import { DemoCard } from "@/components/demos/DemoCard";
import { demos } from "@/config/demos";

export function DemosShowcase({ className = "" }: { className?: string }) {
  const [lead, ...rest] = demos;

  return (
    <div className={className}>
      {lead && <DemoCard demo={lead} featured />}
      {rest.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {rest.map((demo) => (
            <DemoCard key={demo.slug} demo={demo} />
          ))}
        </div>
      )}
    </div>
  );
}