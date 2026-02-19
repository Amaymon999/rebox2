import * as React from "react";
import { cn } from "@/components/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "orange" | "navy" | "yellow" | "cream";
};

export function Badge({ className, tone = "orange", ...props }: Props) {
  const tones: Record<string, string> = {
    orange: "bg-rebox-orange text-white",
    navy: "bg-rebox-navy text-rebox-cream",
    yellow: "bg-rebox-yellow text-rebox-navy",
    cream: "bg-rebox-cream text-rebox-navy border border-rebox-navy/10"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-extrabold shadow-sm",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
