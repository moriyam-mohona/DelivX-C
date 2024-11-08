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
        mediumGray: "gray-200", // Slightly darker gray
        blueGray: "blue-100", // Light blue for card or section backgrounds

        // Text Colors
        darkGray: "gray-800", // Dark gray text color
        Gray: "gray-600", // Medium gray text color
      },
    },
  },
  plugins: [daisyui],
};
