/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121418", // slate/ink from your template vibe
        gold: "#C8A74A",
        parchment: "#ECE8DD",
        line: "rgba(18,20,24,0.35)",
      },
      fontFamily: {
        display: ["CanelaText", "serif"],
        body: ["SourceSans3", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 20px 55px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
