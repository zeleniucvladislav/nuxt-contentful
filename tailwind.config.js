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
      colors: {
        primaryColor: '#845ec2',
        primaryColorHover: '#673fa6'
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(300px, 1fr))'
      },

      spacing: {
        layout: '5vw 10vw'
      },
      minHeight: {
        '100vh': '100vh'
      }
    }
  },
  plugins: []
}
