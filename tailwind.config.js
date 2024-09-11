/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0A0E27",       // Dark blue for background
        "white-text": "#FFFFFF",      // White for text and accents
        "light-gray": "#AEAEAE",      // Light gray for subtle text
        "neon-blue": "#00FFFF",       // Neon blue for accents (buttons, hover effects)
      },
    },
  },
  plugins: [],
};
