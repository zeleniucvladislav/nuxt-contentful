// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(20vw, 1fr))'
      }
    },
    spacing: {
      '30px': '30px',
      '20px': '20px',
      '5px': '5px'
    }
  },
  plugins: []
}
