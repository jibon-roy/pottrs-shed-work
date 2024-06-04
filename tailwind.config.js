/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        "2xl": "1600px",
      },
    },

    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Noto: ["Noto Serif", "sans-serif"],
      },
      colors: {
        "primary-green": "hsl(var(--primary-green))",
        "secondary-green": "hsl(var(--secondary-green))",
        "accent-dark": "hsl(var(--accent-dark))",
      },
    },
  },
  plugins: [],
});
