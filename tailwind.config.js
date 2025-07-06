/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Theme configurations have been moved to CSS using @theme and custom properties
  // in src/index.css for better maintainability and theming support
  theme: {
  },
  plugins: [],
}
