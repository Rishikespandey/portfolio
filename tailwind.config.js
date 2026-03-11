/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--bg-primary)',
        cardBg: 'var(--card-bg)',
        accent: '#8b5cf6', // purple-500
        accentLight: '#a78bfa', // purple-400
        textPrimary: 'var(--text-primary)',
        textMuted: 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
