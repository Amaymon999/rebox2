"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Timer, Gift, Bell, UserRound, Shield } from "lucide-react";
import { cn } from "@/components/lib/utils";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/drop", label: "Drop", icon: Timer },
  { href: "/loyalty", label: "Punti", icon: Gift },
  { href: "/alerts", label: "Alert", icon: Bell },
  { href: "/profile", label: "Profilo", icon: UserRound },
];

export function BottomNav() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <div className="fixed bottom-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-[480px] px-3">
        <nav className="rounded-2xl bg-white/80 backdrop-blur border border-rebox-navy/10 shadow-soft px-2 py-2 flex items-center justify-between">
          {items.map((it) => {
            const active = pathname === it.href;
            const Icon = it.icon;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-2 py-2 rounded-xl min-w-[56px]",
                  active ? "bg-rebox-orange text-white" : "text-rebox-navy/70 hover:bg-rebox-navy/5"
                )}
                aria-label={it.label}
              >
                <Icon size={18} />
                <span className="text-[10px] font-extrabold">{it.label}</span>
              </Link>
            );
          })}

          <Link
            href="/admin"
            className={cn(
              "flex flex-col items-center gap-1 px-2 py-2 rounded-xl min-w-[56px]",
              isAdmin ? "bg-rebox-navy text-rebox-cream" : "text-rebox-navy/70 hover:bg-rebox-navy/5"
            )}
            aria-label="Admin"
          >
            <Shield size={18} />
            <span className="text-[10px] font-extrabold">Admin</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
