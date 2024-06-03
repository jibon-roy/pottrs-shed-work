/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      // default breakpoints but with 40px removed
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {},
  },
  plugins: [],
};
