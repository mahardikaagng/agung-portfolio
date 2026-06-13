import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          blue: '#6EE7FF',
          surface: '#14131c',
          panel: '#12121a',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(110, 231, 255, 0.12)',
        surface: '0 20px 70px rgba(8, 8, 11, 0.45)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 16% 16%, rgba(110, 231, 255, 0.12), transparent 24%), radial-gradient(circle at 82% 16%, rgba(212, 175, 55, 0.12), transparent 20%), radial-gradient(circle at 50% 100%, rgba(15, 23, 42, 0.84), transparent 65%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
