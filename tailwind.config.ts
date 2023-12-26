import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        primary2: "#313131",
        secondary: "#FFFFFF",
        secondary2: "#B6B6B6",
        tertiary: "#CFA18C",
      },
      backgroundImage: {
        profile: "url('/Images/profile.webp')",
      },
    },
    fontFamily: {
      monts: ["Montserrat"],
    },
  },
  plugins: [],
};
export default config;
