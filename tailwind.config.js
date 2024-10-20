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
        cards: 'repeat(auto-fit, minmax(300px, 1fr))',
        detailed: '2fr 1fr'
      },
      spacing: {
        layout: '5vw 10vw'
      },
      minHeight: {
        '100vh': '100vh'
      },
      screens: {
        mobile: '320px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      }
    }
  },
  plugins: []
}
