/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0f0f11',
        cardBg: 'rgba(255, 255, 255, 0.03)',
        navBg: 'rgba(15, 15, 17, 0.7)',
        orangeLight: '#ff8c00',
        orangeDark: '#ff6b00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
