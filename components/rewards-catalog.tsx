"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReboxStore } from "@/store/useReboxStore";

export function RewardsCatalog() {
  const { rewards, points } = useReboxStore();

  return (
    <div className="px-4 space-y-3">
      <h1 className="text-[20px] font-black">Premi</h1>
      <div className="grid gap-3">
        {rewards.map((r) => {
          const locked = points < r.pointsCost;
          return (
            <Card key={r.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[14px] font-black">{r.name}</div>
                    <div className="text-[12px] font-semibold text-rebox-navy/70 mt-1">{r.description}</div>
                    <div className="mt-2"><Badge tone={locked ? "cream" : "yellow"}>{r.pointsCost} punti</Badge></div>
                  </div>
                  <Button size="md" disabled={locked} variant={locked ? "ghost" : "navy"}>
                    {locked ? "BLOCCATO" : "RISCATTA"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
