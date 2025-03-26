/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "background": "#0F0F0F",
        "card": "#1A1A1A",
        "primary": "#B0FE76",
        "primary-2": "#4F772D",
        "subtext": "#88888C",
        "bkg-1": "#2E2E2E",
        "bkg-2": "#333333",
      }
    },
  },
  plugins: [],
}
