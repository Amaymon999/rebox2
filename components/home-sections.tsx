"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReboxStore } from "@/store/useReboxStore";
import Link from "next/link";

export function HomeSections() {
  const { bundles } = useReboxStore();

  return (
    <div className="mt-4 space-y-5">
      <SectionTitle title="MEGA OCCASIONE" right={<Badge tone="yellow">NUOVI ARRIVI</Badge>} />
      <div className="px-4 grid gap-3">
        {bundles.map((b) => (
          <Card key={b.label}>
            <CardHeader className="flex flex-row items-start justify-between gap-3">
              <div>
                <div className="text-[14px] font-black">{b.label}</div>
                <div className="text-[12px] font-semibold text-rebox-navy/70">{b.note}</div>
              </div>
              <div className="rounded-2xl bg-rebox-yellow text-rebox-navy px-3 py-2 text-center shadow-pill">
                <div className="text-[10px] font-extrabold">DA</div>
                <div className="text-[22px] font-black leading-none">€{b.price}</div>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex gap-2">
                <Badge tone="cream">Sorpresa garantita</Badge>
                <Badge tone="navy">Valore &gt; prezzo</Badge>
              </div>
              <Link href="/drop">
                <Button size="md">CORRI</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <SectionTitle title="PUNTI & PREMI" right={<Link href="/loyalty" className="text-[12px] font-extrabold text-rebox-navy underline">Vedi</Link>} />
      <div className="px-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-[14px] font-black">Sblocca premi ogni settimana</div>
            <div className="text-[12px] font-semibold text-rebox-navy/70 mt-1">
              Accumuli punti in cassa con il QR. Premi immediati e upgrade.
            </div>
            <div className="mt-3 flex gap-2">
              <Link href="/loyalty" className="flex-1"><Button className="w-full" variant="navy">VEDI PUNTI</Button></Link>
              <Link href="/rewards" className="flex-1"><Button className="w-full">PREMI</Button></Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <SectionTitle title="ALERT DROP" right={<Badge tone="orange">WhatsApp / Email</Badge>} />
      <div className="px-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-[14px] font-black">Avvisami quando arrivano</div>
            <div className="text-[12px] font-semibold text-rebox-navy/70 mt-1">
              Ricevi l’avviso e arriva prima. (Niente spam, promesso.)
            </div>
            <Link href="/alerts" className="block mt-3"><Button className="w-full">ISCRIVITI</Button></Link>
          </CardContent>
        </Card>
      </div>

      <div className="h-2" />
    </div>
  );
}
