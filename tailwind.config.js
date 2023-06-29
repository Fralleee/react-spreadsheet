/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      DEFAULT: "4px",
      large: "5px",
    },
    gap: {
      1: "1px",
      4: "4px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      input: "#f3f3f3",
      header: "#efefef",
      cell: "#fafafa",
      "cell-border": "#d5d5d5",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
