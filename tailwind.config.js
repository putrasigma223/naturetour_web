/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2C3A2E",
        sage: "#7C8B6F",
        olive: "#A3AE94",
        moss: "#DCE3D5",
        paper: "#F6F4EE",
        sand: "#E8E0D2",
        clay: "#8C7A63",
        ink: "#1E211C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      maxWidth: {
        shell: "78rem",
      },
      boxShadow: {
        lift: "0 18px 40px -18px rgba(44, 58, 46, 0.35)",
        soft: "0 10px 30px -20px rgba(44, 58, 46, 0.5)",
      },
    },
  },
  plugins: [],
};
