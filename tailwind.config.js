/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0f0f1a',
        cardBg: '#1a1a2e',
        accent: '#8b5cf6', // purple-500
        accentLight: '#a78bfa', // purple-400
        textPrimary: '#e5e7eb', // gray-200
        textMuted: '#9ca3af', // gray-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
