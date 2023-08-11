/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist:[
    {
      pattern: / ./, 
  },
],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
