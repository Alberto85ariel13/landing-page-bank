import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        primary: "#00000",
        primaryDark: "rgba(255,255,255, 0.7);",
        secondary: "#23A745",
      },
      backgroundImage: {
        radialBlack:
          "linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)",
        greenRadial:
          "linear-gradient(90deg, #23A745 0%, rgba(34, 167, 69, 0.6) 95.83%)",
        greenLight:
          "linear-gradient(90deg, #23A745 0%, rgba(255, 255, 255, 0.86) 95.83% )",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
