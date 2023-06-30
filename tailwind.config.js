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
    boxShadow: {
      "cell-edit": "2px 2px 4px rgba(0, 0, 0, 0.25)",
      "row-error-shadow": "0px 0px 6px rgba(0, 0, 0, 0.25)",
    },
    scale: {
      "cell-large": "1.05",
      "input-reverse": "calc(1/1.05)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      input: "#f3f3f3",
      header: "#efefef",
      "row-normal-bg": "#fafafa",
      "row-edit-bg": "#dbe7ff",
      "row-error-bg": "#ffefef",
      "row-error-border": "#af3434",
      "cell-edit-bg": "#CBDCFF",
      "cell-border": "#e8e8e8",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
