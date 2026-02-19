import * as React from "react";
import { cn } from "@/components/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "navy" | "ghost";
  size?: "md" | "lg";
};

export function Button({ className, variant = "primary", size = "lg", ...props }: Props) {
  const base = "inline-flex items-center justify-center font-extrabold rounded-2xl transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-rebox-navy/30 disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    primary: "bg-rebox-orange text-white shadow-pill hover:brightness-[0.98]",
    navy: "bg-rebox-navy text-rebox-cream shadow-pill hover:brightness-[1.05]",
    ghost: "bg-transparent text-rebox-navy hover:bg-rebox-navy/5"
  };
  const sizes: Record<string, string> = {
    md: "h-11 px-4 text-[14px]",
    lg: "h-12 px-5 text-[15px]"
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
