/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          'pearl': '#FBFCF8',
          'Off-white' : '#FAF9F6',
          'blue-principal': '#1EA5E0',
          'blue-second':'#0E4069',
          'green': '#008000',
          'blue-dark': '#1A2D52',
          'green-light': '#C6DFCB',
        },
  
        fontFamily: {
          Spinnaker: ['Spinnaker', 'sans-serif'],
          GreatVibes: ['Great Vibes', 'cursive'],
          Poppins: ['Poppins', 'sans-serif'],
        },
  
      },
    },
  },
  plugins: [],
}

