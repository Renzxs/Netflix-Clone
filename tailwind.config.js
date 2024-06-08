/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "DefaultTextColor": "#e5e5e5",
      },
      fontFamily: {
        "Poppins": ["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}

