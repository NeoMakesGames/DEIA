/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    // },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
          
      "primary": "#4189B6",
               
      "secondary": "#f9a620",
               
      "accent": "#f43f5e",
               
      "neutral": "#0C0E15",
               
      "base-100": "#dbe3ff",
               
      "info": "#93e6fb",
               
      "success": "#80ced1",
               
      "warning": "#efd8bd",
               
      "error": "#e58b8b",
               },],
  },
}
