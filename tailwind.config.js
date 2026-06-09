/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#FAFAFA',
        surface: '#F2F1EE',
        'surface-indigo': '#EDEAFF',
        graphite: '#111318',
        indigo: {
          DEFAULT: '#5B2EFF',
          light: '#8878FF',
          pale: '#EDEAFF',
        },
        coral: {
          DEFAULT: '#FF4F2E',
          dark: '#E03A1C',
        },
        mid: '#636366',
        gray: {
          DEFAULT: '#636366',
          light: '#E0DDD8',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out both',
        'marquee': 'marquee 30s linear infinite',
        'bounce-soft': 'bounce-soft 1.5s ease-in-out infinite',
        'chat-in': 'chat-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'chat-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
