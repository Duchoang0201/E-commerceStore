/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      ssm: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },

    fontFamily: {
      poppins: ["Poppins"],
      // poppins: ["poppins"],
      inter: "Inter",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1234px",
      },
    },
    // containerCover: {
    //   center: true,
    //   // padding: "2rem",
    //   screens: {
    //     "2xl": "1440px",
    //   },
    // },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "width-down": {
          to: { width: 0 },
        },
        "hieght-down": {
          to: { display: "100%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        toastOut: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "20%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": { transform: "translate(2000px) scale(0.7)", opacity: 0.7 },
        },
        toastIn: {
          "0%": { transform: "translate(2000px) scale(0.7)", opacity: 0.7 },
          "80%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "width-down": "width-down 2s linear 1 forwards",
        "hieght-down": "hieght-down 5s linear 1 ",
        toastIn: "toastIn 0.7s both",
        toastOut: "toastOut 0.7s both",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          0: "#fff",
        },
        black: {
          0: "#000",
        },
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        error: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
        },
        Neutral: {
          0: "#FFFFFF",
          50: "#F4F4F6  ",
          100: "#E9EAEC",
          200: "#D1D4DB",
          300: "#9096A2",
          400: "#4D566B",
          500: "#202C46",
          600: "#1B253C",
        },
        Blue: {
          100: "#F5F7FE",
          200: "#EAEFFD",
          300: "#ADBEF7",
          400: "#5A7DEE",
          500: "#315CEA",
          600: "#2A4EC7",
          700: "#2240A4",
        },
        Purple: {
          100: "#F8F5FE",
          200: "#F1ECFC",
          300: "#C9B2F3",
          400: "#9265E8",
          500: "#773FE2",
          600: "#6436BF",
        },
        Magenta: {
          100: "#FEF6F8",
          200: "#FCEEF1",
          300: "#F4BAC8",
          400: "#E97591",
          500: "#E35275",
          600: "#C24764",
        },
        Green: {
          100: "#F4FDF7",
          200: "#E9FAEF",
          300: "#A9EBBF",
          400: "#52D880",
          500: "#27CE60",
          600: "#21AF52",
        },
        Red: {
          100: "#FCE9EC",
          200: "#F9D2D9",
          300: "#F2A6B4",
          400: "#E9677F",
          500: "#DF2648",
          600: "#B71F3B",
        },
        Yellow: {
          100: "#FEF3E6",
          200: "#FDE7CD",
          300: "#FCCF9C",
          400: "#FAB261",
          500: "#F89118",
          600: "##C77414",
        },
        Primary: {
          0: "#FFFFFF",
          1: "#363738",
        },
        TEXT: {
          0: "#FAFAFA",
          1: "#7D8184",
        },
        Secondary: {
          0: "#F5F5F5",
          1: "#FEFAF1",
          2: "#DB4444",
        },

        Button: {
          0: "#47B486",
          1: "#DB4444",
          2: "#E07575",
          3: "#A0BCE0",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
