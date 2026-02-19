"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CountdownStrip } from "@/components/parts/countdown-strip";
import { useReboxStore } from "@/store/useReboxStore";

export function DropDetail() {
  const { drop, city, setCity } = useReboxStore();

  return (
    <div className="px-4 space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-black">Drop</h1>
        <div className="flex gap-2">
          <Button size="md" variant={city === "Bergamo" ? "navy" : "ghost"} onClick={() => setCity("Bergamo")}>Bergamo</Button>
          <Button size="md" variant={city === "Milano" ? "navy" : "ghost"} onClick={() => setCity("Milano")}>Milano</Button>
        </div>
      </div>

      <Card className="bg-rebox-orange text-white border-0">
        <CardContent className="p-4">
          <Image src="/brand/fox_walk.png" alt="" width={110} height={110} className="pointer-events-none select-none absolute -right-6 -bottom-6 opacity-20" />
          <div className="flex items-center justify-between">
            <Badge tone="navy">SOLO OGGI</Badge>
            <Badge tone="yellow">{drop.quantityLeft}/{drop.quantityTotal}</Badge>
          </div>
          <div className="mt-3 text-[22px] font-black leading-[1.05]">{drop.title}</div>
          <div className="mt-2 text-[12px] font-semibold text-white/90">Arriva prima: i migliori box finiscono subito.</div>
          <div className="mt-3"><CountdownStrip endAt={drop.endAt} /></div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button variant="navy">PRENOTA RITIRO</Button>
            <Button variant="primary">AVVISA UN AMICO</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="text-[14px] font-black">Come funziona</div>
          <ul className="text-[12px] font-semibold text-rebox-navy/70 list-disc pl-5 space-y-1">
            <li>Scegli il box (Singolo, Tripla, Tematico)</li>
            <li>Compra in cassa (anche bundle)</li>
            <li>Apri al Corner Unboxing e taggaci</li>
            <li>Accumula punti mostrando il QR</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
