# REBOX STORE — MVP (Next.js + Tailwind)

Un MVP **mobile-first** stile Temu/AliExpress (FOMO + drop + punti) pronto da caricare su GitHub e deployare su **Vercel**.

## Stack
- Next.js (App Router)
- TailwindCSS
- Framer Motion
- Zustand (stato)
- Supabase (opzionale, per auth + DB nella fase 2)

## Avvio locale
```bash
npm i
npm run dev
```

## Deploy su Vercel
1. Pusha questa cartella su GitHub
2. Import su Vercel
3. Deploy

## ENV (solo se attivi Supabase)
Crea `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Roadmap consigliata (2–3 giorni)
- Auth (OTP via WhatsApp/SMS o email)
- Wallet Pass (Apple/Google) per punti
- Admin: crea drop, set quantità, coupon/QR
- Alerts: iscrizioni + invio WhatsApp Business / email

> Nota: questo repo è volutamente **MVP**. I dati sono mock nello store Zustand.
