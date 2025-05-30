import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "lavender-bg": "#EFEFFF",
        "lavender-light": "#C2C2F6",
        "soft-Lavender": "#DEE5FF",
        lavender: "#9C9CE6",
        "off-white-lavender": "#DDDDFA",
        coral: "#E26D5A",
        "light-coral": "#F9D8CD",
        "slate-blue": "#526188",
        "bluish-Gray": "#8099CF",
        "grey-font": "#564747",
      },
      animation: {
        "spin-custom": "spin-custom 12s linear infinite",
        "spin-custom-slow": "spin-custom 16s linear infinite",
      },
      keyframes: {
        "spin-custom": {
          to: {
            transform: "translateX(-50%) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
