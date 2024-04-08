/** @type {import('tailwindcss').Config} */
import galaxia from "./src/assets/galaxia.gif"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amatic-sc': ['Amatic SC', 'cursive'],
        'caveat': ['Caveat', 'cursive'],
        'cormorant-garamond': ['Cormorant Garamond', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'gochi-hand': ['Gochi Hand', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'itim': ['Itim', 'cursive'],
        'oswald': ['Oswald', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'playfair-display': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'rubik-bubbles': ['Rubik Bubbles', 'sans-serif'],
        'sofia': ['Sofia', 'cursive'],
      }
    
    },
  },
  plugins: [],
}

