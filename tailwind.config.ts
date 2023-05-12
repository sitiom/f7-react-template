import type { Config } from "tailwindcss";
import konstaConfig from "konsta/config";

export default konstaConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config);
