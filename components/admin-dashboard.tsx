"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReboxStore } from "@/store/useReboxStore";

export function AdminDashboard() {
  const { drop, addPoints } = useReboxStore();
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="px-4 space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-black">Admin</h1>
        <Badge tone="cream">MVP demo</Badge>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="text-[14px] font-black">Drop attivo</div>
          <div className="mt-1 text-[12px] font-semibold text-rebox-navy/70">{drop.title}</div>
          <div className="mt-2 flex gap-2">
            <Badge tone="navy">Tot: {drop.quantityTotal}</Badge>
            <Badge tone="yellow">Rimasti: {drop.quantityLeft}</Badge>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button variant="navy">Modifica Drop</Button>
            <Button>Esporta CSV</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-[14px] font-black">Accredita punti (MVP)</div>
          <div className="text-[12px] font-semibold text-rebox-navy/70 mt-1">Cerca utente e aggiungi punti dopo acquisto.</div>
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="email utente"
            className="mt-3 w-full h-12 px-4 rounded-2xl border border-rebox-navy/15 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rebox-orange/30"
          />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button variant="navy" onClick={() => addPoints(100)} disabled={!userEmail}>+100</Button>
            <Button onClick={() => addPoints(250)} disabled={!userEmail}>+250</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
