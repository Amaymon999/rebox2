import type { Metadata } from "next";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { BottomNav } from "@/components/bottom-nav";
import { TopBar } from "@/components/top-bar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "REBOX STORE — Ogni box è un’occasione",
  description: "Drop, punti e sorprese: REBOX STORE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={montserrat.variable}>
      <body className="font-sans text-rebox-navy">
        <div className="mx-auto max-w-[480px] min-h-dvh pb-[88px]">
            <TopBar />
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
