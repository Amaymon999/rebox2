"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownStrip({ endAt }: { endAt: string }) {
  const end = useMemo(() => new Date(endAt).getTime(), [endAt]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, end - now);
  const totalSeconds = Math.floor(diff / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return (
    <div className="rounded-2xl bg-white/15 border border-white/20 p-3">
      <div className="flex items-center justify-between">
        <div className="text-[12px] font-extrabold">FINO ALLE 19:00</div>
        <div className="text-[12px] font-extrabold">COUNTDOWN</div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        {[{ label: "ORE", v: pad(h) }, { label: "MIN", v: pad(m) }, { label: "SEC", v: pad(s) }].map((x) => (
          <motion.div
            key={x.label}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
            className="flex-1 rounded-2xl bg-rebox-navy text-rebox-cream py-2 text-center"
          >
            <div className="text-[18px] font-black leading-none">{x.v}</div>
            <div className="text-[10px] font-extrabold opacity-80">{x.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
