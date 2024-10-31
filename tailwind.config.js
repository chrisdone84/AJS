module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#F4EF3E", // Yellow
        secondary: "#254D94", // Blue
        accent: "#669bbc", // Light Blue
        textPrimary: "#ffffff", // White text
        textSecondary: "#333333", // Dark text
        background: "#f1f1f1", // Light gray background
        card: "#ffffff", // White card background
      },
    },
  },
  plugins: [],
};
