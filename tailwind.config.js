/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kem': '#F5EBD4',
        'kem-nhat': '#FBF6EA',
        'do': '#BE3232',
        'xanh': '#2E6E5A',
        'vang': '#D4A760',
        'nau': '#8B5E3C',
        'nau-dam': '#4A2E1B',
      },
    },
  },
  plugins: [],
}
