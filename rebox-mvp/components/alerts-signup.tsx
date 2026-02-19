"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReboxStore } from "@/store/useReboxStore";

export function AlertsSignup() {
  const { city, setCity } = useReboxStore();
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  return (
    <div className="px-4 space-y-3">
      <h1 className="text-[20px] font-black">Alert Drop</h1>

      <Card className="bg-white/70">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <Badge tone="orange">FLASH ALERT</Badge>
            <Badge tone="navy">0 spam</Badge>
          </div>

          <div className="text-[12px] font-semibold text-rebox-navy/70">
            Ti avvisiamo quando arriva il drop e quando c’è un bundle top.
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button size="md" variant={city === "Bergamo" ? "navy" : "ghost"} onClick={() => setCity("Bergamo")}>Bergamo</Button>
            <Button size="md" variant={city === "Milano" ? "navy" : "ghost"} onClick={() => setCity("Milano")}>Milano</Button>
          </div>

          <div>
            <label className="text-[12px] font-extrabold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nome@dominio.it"
              className="mt-1 w-full h-12 px-4 rounded-2xl border border-rebox-navy/15 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rebox-orange/30"
            />
          </div>

          <Button className="w-full" onClick={() => setOk(true)} disabled={!email}>
            {ok ? "ISCRITTO!" : "ISCRIVITI"}
          </Button>

          <div className="text-[11px] font-semibold text-rebox-navy/60">
            Fase 2: WhatsApp Business + Telegram (link diretto) + push.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
