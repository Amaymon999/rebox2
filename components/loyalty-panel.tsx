"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReboxStore } from "@/store/useReboxStore";

function nextGoal(points: number) {
  const goals = [500, 800, 1200];
  return goals.find((g) => points < g) ?? goals[goals.length - 1];
}

export function LoyaltyPanel() {
  const { points, tier, addPoints } = useReboxStore();
  const goal = nextGoal(points);
  const pct = Math.min(100, Math.round((points / goal) * 100));

  return (
    <div className="px-4 space-y-3">
      <h1 className="text-[20px] font-black">Punti REBOX</h1>

      <Card className="bg-rebox-navy text-rebox-cream relative overflow-hidden">
        <CardContent className="p-4">
          <Image src="/brand/fox_heart.png" alt="" width={120} height={120} className="pointer-events-none select-none absolute -right-6 -top-6 opacity-25" />
          <div className="flex items-center justify-between">
            <Badge tone="yellow">{tier}</Badge>
            <div className="text-right">
              <div className="text-[10px] font-extrabold opacity-80">SALDO PUNTI</div>
              <div className="text-[28px] font-black leading-none">{points}</div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between text-[12px] font-extrabold">
              <span>Prossimo premio</span>
              <span>{goal} pt</span>
            </div>
            <div className="mt-2 h-3 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full bg-rebox-yellow" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-1 text-[11px] font-semibold text-white/80">Ti mancano {Math.max(0, goal - points)} punti.</div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="primary">MOSTRA QR IN CASSA</Button>
            <Button variant="ghost" className="text-rebox-cream border border-white/20" onClick={() => addPoints(50)}>+50 (demo)</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <Image src="/brand/fox_heart.png" alt="" width={120} height={120} className="pointer-events-none select-none absolute -right-6 -top-6 opacity-25" />
          <div className="text-[14px] font-black">Regole semplici</div>
          <div className="mt-1 text-[12px] font-semibold text-rebox-navy/70">
            1€ = 10 punti. Bundle e ReBox Club danno bonus. Premi immediati e trasparenti.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
