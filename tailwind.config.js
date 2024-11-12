import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core Colors
        teal: "teal",
        orange: "orange",
        green: "green",
        yellow: "yellow",
        red: "red",

        lightGray: "gray-100",
        darkGray: "gray-800",
        Gray: "gray-600",
      },
    },
  },
  plugins: [daisyui],
};
