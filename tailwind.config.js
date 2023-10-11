/** @type {import('tailwindcss').Config} */
import DefaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...DefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
