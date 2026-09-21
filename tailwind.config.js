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
      },
    },
  },
  plugins: [],
};
