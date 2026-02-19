"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function InvitePanel() {
  const code = "REBOX-BG-123";
  const shareText = `Vieni da REBOX STORE! Usa il codice ${code} e sblocchiamo entrambi un bonus punti.`;

  return (
    <div className="px-4 space-y-3">
      <h1 className="text-[20px] font-black">Invita un amico</h1>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Badge tone="yellow">BONUS</Badge>
            <Badge tone="navy">+100 punti</Badge>
          </div>

          <div className="mt-3 text-[14px] font-black">Il tuo codice</div>
          <div className="mt-1 rounded-2xl bg-rebox-cream border border-rebox-navy/10 px-4 py-3 font-black tracking-wider">
            {code}
          </div>

          <div className="mt-3 text-[12px] font-semibold text-rebox-navy/70">
            Quando il tuo amico fa il primo acquisto verificato, ricevete entrambi il bonus.
          </div>

          <Button className="w-full mt-3" onClick={() => navigator.clipboard.writeText(shareText)}>
            COPIA TESTO INVITO
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
