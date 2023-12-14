/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#49688e',
        'secondry': '#f4a024',
        'primary-600': '#49688d',
        'secondry-600': '#ffb240',
        
      },
    },
  },
  plugins: [],
}