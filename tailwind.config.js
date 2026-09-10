/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#05060B",
          900: "#080A13",
          850: "#0B0E1A",
          800: "#0F1322",
          700: "#161B2E",
          600: "#1E2540",
        },
        silver: {
          50: "#F5F6FA",
          100: "#E8EAF2",
          300: "#B8BDD4",
          500: "#8891AD",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        electric: {
          400: "#5B8DFF",
          500: "#3B6BFF",
          600: "#2E54E0",
        },
        cyan: {
          300: "#7DE8F5",
          400: "#22D3EE",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,92,255,0.18), transparent), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(59,107,255,0.12), transparent)",
        aurora:
          "linear-gradient(115deg, #8B5CF6 0%, #3B6BFF 45%, #22D3EE 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139,92,246,0.45)",
        "glow-blue": "0 0 40px -10px rgba(59,107,255,0.45)",
        "glow-cyan": "0 0 40px -10px rgba(34,211,238,0.35)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
