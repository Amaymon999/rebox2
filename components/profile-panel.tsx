"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProfilePanel() {
  return (
    <div className="px-4 space-y-3">
      <h1 className="text-[20px] font-black">Profilo</h1>

      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[14px] font-black">Ciao! 👋</div>
              <div className="text-[12px] font-semibold text-rebox-navy/70">Accedi per salvare punti e premi.</div>
            </div>
            <Badge tone="cream">MVP</Badge>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Button variant="navy">ACCEDI</Button>
            <Button>CREA ACCOUNT</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-[14px] font-black">Link rapidi</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link href="/loyalty"><Button className="w-full" size="md">PUNTI</Button></Link>
            <Link href="/rewards"><Button className="w-full" size="md" variant="navy">PREMI</Button></Link>
            <Link href="/alerts"><Button className="w-full" size="md" variant="ghost">ALERT</Button></Link>
            <Link href="/invite"><Button className="w-full" size="md" variant="ghost">INVITA</Button></Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
