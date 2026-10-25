import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071426",
        navy: "#0B1E35",
        panel: "#102945",
        amber: "#F5A623",
        mist: "#EAF0F6",
        steel: "#8EA4BA"
      },
      boxShadow: { glow: "0 0 55px rgba(245,166,35,.12)" }
    },
  },
  plugins: [],
};
export default config;
