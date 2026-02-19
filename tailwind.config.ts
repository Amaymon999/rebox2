import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rebox: {
          orange: "#FF7A1B",
          navy: "#192134",
          cream: "#FFF5E3",
          yellow: "#FFD752"
        }
      },
      borderRadius: {
        xl: "16px",
        '2xl': "24px"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(25,33,52,0.12)",
        pill: "0 8px 18px rgba(25,33,52,0.14)"
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
