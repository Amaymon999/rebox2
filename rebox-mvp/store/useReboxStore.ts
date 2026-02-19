import { create } from "zustand";

export type City = "Bergamo" | "Milano";

export type Drop = {
  id: string;
  title: string;
  city: City;
  startAt: string; // ISO
  endAt: string; // ISO
  quantityTotal: number;
  quantityLeft: number;
};

export type Reward = {
  id: string;
  name: string;
  pointsCost: number;
  description: string;
  type: "discount" | "free_box" | "upgrade";
};

type State = {
  city: City;
  setCity: (c: City) => void;
  points: number;
  tier: "Bronze" | "Silver" | "Gold";
  addPoints: (n: number) => void;
  rewards: Reward[];
  drop: Drop;
  bundles: { label: string; price: number; note: string }[];
};

function computeTier(points: number): State["tier"] {
  if (points >= 1200) return "Gold";
  if (points >= 600) return "Silver";
  return "Bronze";
}

export const useReboxStore = create<State>((set, get) => ({
  city: "Bergamo",
  setCity: (c) => set({ city: c }),

  points: 240,
  tier: "Bronze",
  addPoints: (n) => {
    const next = get().points + n;
    set({ points: next, tier: computeTier(next) });
  },

  rewards: [
    { id: "r1", name: "-€5 sul prossimo acquisto", pointsCost: 500, description: "Valido 7 giorni. Mostra il QR in cassa.", type: "discount" },
    { id: "r2", name: "Upgrade box (da Singolo a Tematico)", pointsCost: 800, description: "Finché disponibili. Chiedi in cassa.", type: "upgrade" },
    { id: "r3", name: "1 ReBox Singolo GRATIS", pointsCost: 1200, description: "Riscattabile una volta al mese.", type: "free_box" }
  ],

  drop: {
    id: "d1",
    title: "DROP DEL GIORNO: 100 NUOVI PACCHI",
    city: "Bergamo",
    startAt: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    endAt: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
    quantityTotal: 100,
    quantityLeft: 37
  },

  bundles: [
    { label: "ReBox Singolo", price: 10, note: "Perfetto per iniziare" },
    { label: "ReBox Tripla", price: 25, note: "Best-seller: 3 box" },
    { label: "ReBox Tematici", price: 19, note: "Scegli categoria" }
  ]
}));
