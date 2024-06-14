/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:{
          light: "#8CDBDD",
          dark: "#2bd0d0",
        },
        backgroundColor:"#3a3053",
        textColor: "#B5C0D0",
        footerColor:'#232027',
      },
    },
  },
  plugins: [],
};
