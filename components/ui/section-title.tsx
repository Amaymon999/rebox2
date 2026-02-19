import { cn } from "@/components/lib/utils";

export function SectionTitle({ title, right, className }: { title: string; right?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between px-4", className)}>
      <h2 className="text-rebox-navy text-[16px] font-extrabold tracking-tight">{title}</h2>
      {right}
    </div>
  );
}
