/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        "2xl": "1600px",
      },
    },

    extend: {
      colors: {
        "primary-green": "hsl(var(--primary-green))",
        "secondary-green": "hsl(var(--primary-green))",
        "accent-dark": "hsl(var(--primary-green))",
      },
    },
  },
  plugins: [],
};
