/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tropical: {
          100: '#ffeccc',
          200: '#ffd1a9',
          300: '#ffad5e',
          400: '#ff8c42',
          500: '#ff7b25',
          600: '#d86b1f',
        },
        pearl: '#FBFCF8',
        'Off-white': '#FAF9F6',
        'blue-principal': '#1EA5E0',
        'blue-second': '#0E4069',
        green: '#008000',
        'blue-dark': '#1A2D52',
        'green-light': '#C6DFCB',
        orange: '#EAB308',
        genericBlue: '#111827'
      },
      fontFamily: {
        generic: ["Karla", "serif"],
        title: ["Dancing Script", "serif"],
      },
      animation: {
        zoomOut: 'zoomOut 5s infinite', // Nom de l'animation
      },
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(1.1)' }, // Début avec un zoom léger
          '100%': { transform: 'scale(1)' }, // Recul à l'état normal
        },
      },
    },
  },
  plugins: [],
};
