import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        wave: "wave 2.5s infinite",
      },
      keyframes: {
        wave: {
          "from, 50%, to": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "40%": { transform: "rotate(9deg)" },
        },
        meteor: {
          "0%": { transform: "rotate(240deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(250deg) translateX(-1080px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
