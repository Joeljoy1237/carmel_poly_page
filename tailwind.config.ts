import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        carmel: {
          primary: '#164380',
          secondary: '#ffc107',
          light: '#e8f0fe',
          dark: '#0c2340',
        },
      },
    },
  },
  plugins: [],
}

export default config
