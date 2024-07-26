import daisyui from "daisyui";
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-solid-bottom-right": "15px 15px 0px 0px rgb(49,57,251)",
        // "light-solid-bottom-right": "15px 15px 0px 0px rgb(88 28 135)",
      },
      backgroundImage: {
        "noise-light": "url('public/noise-light.png')",
      },
      colors: {
        "nice-blue": "rgb(49,57,251)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          colors: {
            primary: {
              50: "#ecd2ff",
              100: "#f9d9ff",
              200: "#ffe4f6",
              300: "#ffebf0",
              400: "#ffebeb",
              500: "#ffe4e1",
              600: "#e5b7b7",
              700: "#c08494",
              800: "#95507e",
              900: "#5a2664",
            },
            secondary: {
              50: "#cfd4ff",
              100: "#d2daff",
              200: "#d6e1fe",
              300: "#d3e1f9",
              400: "#c7d8ef",
              500: "#b0c4de",
              600: "#8ea5c5",
              700: "#667da6",
              800: "#405282",
              900: "#202a5a",
            },
          },
          primary: "#d9c1ca",
          "primary-focus": "#ffebeb",
          "primary-content": "#f8fafc", // button color
          secondary: "#2702c2", //700
          "secondary-focus": "#f8fafc", //500
          "secondary-content": "#f8fafc", //50
          accent: colors.fuchsia[300],
          "accent-focus": colors.fuchsia[400],
          "accent-content": colors.fuchsia[900],
          neutral: colors.neutral[900],
          "neutral-focus": colors.neutral[700],
          "neutral-content": colors.neutral[50],
          "base-100": colors.indigo[300],
          "base-200": colors.slate[300],
          "base-300": colors.slate[300],
          "base-content": colors.slate[900],
          info: colors.sky[300],
          "info-content": colors.sky[900],
          success: colors.emerald[400],
          "success-content": colors.emerald[900],
          warning: colors.yellow[400],
          "warning-content": colors.yellow[900],
          error: colors.rose[300],
          "error-content": colors.rose[900],
        },
        dark: {
          colors: {
            primary: {
              50: "#d59eff",
              100: "#f1acff",
              200: "#ffc5ec",
              300: "#ffd9e3",
              400: "#ffe3e3",
              500: "#ffe4e1",
              600: "#e5bbbb",
              700: "#c08897",
              800: "#95537f",
              900: "#5a2764",
            },
            secondary: {
              50: "#9aa6ff",
              100: "#a5b5ff",
              200: "#b7cbfe",
              300: "#c2d5f9",
              400: "#c0d4ef",
              500: "#b0c4de",
              600: "#91a7c5",
              700: "#6a7fa6",
              800: "#425482",
              900: "#212b5a",
            },
          },
          primary: "#e8dae1", //300,
          "primary-focus": "#f8fafc", //500
          "primary-content": "#5a2664", //50
          secondary: "#a5b4fc", //300
          "secondary-focus": "#c7d8ef", //400
          "secondary-content": "#202a5a", //900
          accent: colors.fuchsia[700],
          "accent-focus": colors.fuchsia[500],
          "accent-content": colors.fuchsia[50],
          neutral: colors.neutral[100],
          "neutral-focus": colors.neutral[200],
          "neutral-content": colors.neutral[900],
          "base-100": "rgba(69, 99, 120, 0)",
          "base-200": colors.slate[700],
          "base-300": colors.slate[700],
          "base-content": "rgb(255,252,236)",
          info: colors.sky[300],
          "info-content": colors.sky[900],
          success: colors.emerald[400],
          "success-content": colors.emerald[900],
          warning: colors.yellow[400],
          "warning-content": colors.yellow[900],
          error: colors.rose[300],
          "error-content": colors.rose[900],
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
};
