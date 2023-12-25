/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#121212",
        primary: "#2cdadd",
        secondary: "#899cec",
        accent: "#4D3EC5",
      },
    },
  },
  plugins: [],
};
