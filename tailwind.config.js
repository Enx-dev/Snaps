/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        almostWhite: " hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      backgroundImage: {
        heroImageMobile: "url('../images/image-hero-mobile.png')",
        heroImageDesktop: "url('../images/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
};
