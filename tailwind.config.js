/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F4EF',
          dark: '#EEEAE2',
        },
        brand: {
          black: '#0D0D0D',
          accent: '#1A1A2E',
          dark2: '#2A2A2A',
          dark3: '#111111',
        },
        gray: {
          DEFAULT: '#6B6B6B',
          light: '#C4C0B8',
        },
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'bounce-soft': 'bounce-soft 1.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
