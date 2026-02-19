"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useReboxStore } from "@/store/useReboxStore";

export function TopBar() {
  const { city } = useReboxStore();

  return (
    <div className="sticky top-0 z-40 bg-rebox-cream/95 backdrop-blur border-b border-rebox-navy/10">
      <div className="mx-auto max-w-[480px] px-4 h-[56px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo.png"
            alt="REBOX STORE"
            width={34}
            height={34}
            priority
            className="rounded-[10px] shadow-soft"
          />
          <div className="leading-tight">
            <div className="text-[12px] font-black tracking-tight">REBOX STORE</div>
            <div className="text-[10px] font-semibold text-rebox-navy/70">Ogni box è un’occasione</div>
          </div>
        </Link>

        <Link href="/profile" aria-label="Cambia città">
          <Badge tone="navy" className="h-8 px-3 text-[12px] font-extrabold">
            {city}
          </Badge>
        </Link>
      </div>
    </div>
  );
}
