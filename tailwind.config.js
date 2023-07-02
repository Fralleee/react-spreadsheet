/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      DEFAULT: "4px",
      lg: "5px",
    },
    gap: {
      sm: "1px",
      lg: "4px",
    },
    boxShadow: {
      "edit-cell": "2px 2px 4px rgba(0, 0, 0, 0.25)",
      "error-row": "0px 0px 6px rgba(0, 0, 0, 0.25)",
    },
    scale: {
      "lg-cell": "1.05",
      "sm-input": "calc(1/1.05)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      input: "#f3f3f3",
      header: "#efefef",
      "cell-edit": "#cbdcff",
      "row-normal": "#fafafa",
      "row-edit": "#dbe7ff",
      "border-cell": "#e8e8e8",
      success: "#c8ffcb",
      error: "#ffefef",
      "error-border": "#af3434",
      default: "#1d4ed8",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
