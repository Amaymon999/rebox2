"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReboxStore } from "@/store/useReboxStore";
import Link from "next/link";
import { CountdownStrip } from "@/components/parts/countdown-strip";

export function HeroDrop() {
  const { drop, city } = useReboxStore();

  return (
    <section className="px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-rebox-orange text-white shadow-soft overflow-hidden relative"
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <Badge tone="navy">SOLO OGGI</Badge>
            <Badge tone="yellow">{city}</Badge>
          </div>

          <h1 className="mt-3 text-[26px] leading-[1.05] font-black tracking-tight">
            {drop.title}
          </h1>

          <p className="mt-2 text-white/90 text-[13px] font-semibold">
            Prezzi da €10 · Sorpresa garantita · Valore superiore al prezzo
          </p>

          <div className="mt-3">
            <CountdownStrip endAt={drop.endAt} />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Link href="/drop" className="flex-1">
              <Button className="w-full" variant="navy">SCOPRI IL DROP</Button>
            </Link>
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.3, repeat: Infinity }}
              className="rounded-2xl bg-white/15 border border-white/20 px-3 py-2"
            >
              <div className="text-[10px] font-extrabold">RIMASTI</div>
              <div className="text-[18px] font-black leading-none">{drop.quantityLeft}</div>
            </motion.div>
          </div>
        </div>

        <div className="h-12 bg-white/10" />
      </motion.div>
    </section>
  );
}
