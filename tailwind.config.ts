import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@jiksdi/jiksdi-ui/dist/**/*.{js,css}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;