/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Bauhaus93: ['Bauhaus93', 'sans-serif'], // 'sans-serif' as fallback
      },
    },
  },
  plugins: [],
};
