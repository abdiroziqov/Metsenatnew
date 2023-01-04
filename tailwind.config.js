/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      xm: "500px",
      sm: "640px",
      ml: "700px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2E5BFF"
        },
        edit: {
          DEFAULT: "#EDF1FD"
        },
        editing: {
          DEFAULT: "#3365FC"
        },
        contactbg: {
          DEFAULT: "#EAECF0,"
        },
        border:{
          DEFAULT: "#E0E7FF"
        },
        conatcttext:{
          DEFAULT: "#212121"
        },
      }
    },
  },
  plugins: [],
};
