/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#618AF7',
        'ocean': '#A8D2FB',
        'orange': '#EF8E67',
        'hm': '#F6CE98',
        'dark': '#1C1B37',
        'light': '#F5F7FB',
      },
      fontFamily: {
        sans: ['Chillax', 'sans-seritf']
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
    },
  },
  plugins: [],
}