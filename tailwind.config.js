/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [],
  },
  
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
