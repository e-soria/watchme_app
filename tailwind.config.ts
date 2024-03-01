import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {

      fontFamily: {
        'primary': ['Bebas Neue', 'sans-serif'],
        'secondary': ['Cairo', 'sans-serif'],
      },

      colors: {
        'primary': 'var(--primary-color)',
        'body': 'var(--body-color)',
        'grey': 'var(--grey-color)',
        'blue': 'var(--blue-color)',
        'red': 'var(--red-color)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config