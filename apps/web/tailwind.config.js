/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pastel-bg": "url('./src/assets/bg-pastel.svg')"
      }
    },
  },
  plugins: [],
}

