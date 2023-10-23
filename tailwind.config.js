/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightShade: "#949494",
        dollar: "#00d108",
        button: "#2f9200",
        homeBack: "#fbfaf5",
      },
    },
  },
  plugins: [],
};
