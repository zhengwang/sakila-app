/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'splash-texture': "url('/assets/img/splash-texture.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-fontawesome')
  ],
}

