/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#facc15",
        
"secondary": "#1d4ed8",
        
"accent": "#67e8f9",
        
"neutral": "#374151",
        
"base-100": "#292524",
        
"info": "#99f6e4",
        
"success": "#36d399",
        
"warning": "#fbbd23",
        
"error": "#f87272",
        },
      },
    ],
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
