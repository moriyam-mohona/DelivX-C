import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core Colors
        teal: "teal", // Primary teal color
        orange: "orange", // Secondary orange color
        green: "green", // Green for success
        yellow: "yellow", // Yellow for warning
        red: "red", // Red for errors

        // Neutral Backgrounds
        lightGray: "gray-100", // Light gray background
        darkGray: "gray-800",
        Gray: "gray-600",
      },
    },
  },
  plugins: [daisyui],
};
