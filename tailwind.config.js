/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 5s linear infinite',
    },
    fontFamily: {
      sohne : ["Sohne","sans-serif"],
      sohneLight : ["Sohne-light","sans-serif"]
    }
  },
  plugins: [],
}

