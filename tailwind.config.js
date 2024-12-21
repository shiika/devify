/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'devify-primary': '#6941C6',
        'devify-bg': '#F9F5FF'
      }
    }
  }
}