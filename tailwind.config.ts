import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: "#ffffff",
      },
      boxShadow: {
        glass: "0 12px 40px rgba(91, 94, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
