/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        milk: "#f5f5dc",
        lblue: "#59d2fe",
        dblue: "#191923",
      },
      fontFamily: {
        sand: ["Quicksand", "san-serifs"],
      },
    },
  },
  plugins: [],
};
