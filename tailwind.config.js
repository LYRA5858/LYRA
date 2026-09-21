/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lyra: {
          bg: "#0b0e11",
          surface: "#15191e",
          card: "#1e2329",
          cardHover: "#252a31",
          border: "#2b3139",
          muted: "#848e9c",
          text: "#eaecef",
          accent: "#F0B90B",
          accentHover: "#f8c62e",
          success: "#0ECB81",
          danger: "#F6465D",
          warning: "#f0b90b",
          info: "#3861fb",
        },
        binance: {
          black: "#0b0e11",
          card: "#1e2329",
          yellow: "#F0B90B",
          green: "#0ECB81",
          red: "#F6465D",
          gray: "#848E9C",
          light: "#EAECEF",
        },
        market: {
          up: "#0ECB81",
          down: "#F6465D",
          neutral: "#848E9C",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["0.9375rem", { lineHeight: "1.5rem" }],
        lg: ["1.0625rem", { lineHeight: "1.625rem" }],
        xl: ["1.1875rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      borderRadius: {
        xs: "0.375rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "lyra-card": "0 8px 30px rgba(0, 0, 0, 0.22)",
        "lyra-soft": "0 4px 16px rgba(0, 0, 0, 0.16)",
        "lyra-focus": "0 0 0 3px rgba(240, 185, 11, 0.18)",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },
      minHeight: {
        screen: "100vh",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
};
