/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3D2F31",
        
"secondary": "#C6C8D7",
        
"accent": "#657B6E",
        
"neutral": "#18342b",
        
"base-100": "#F4F6F3",
        
"info": "#3abff8",
        
"success": "#36d399",
        
"warning": "#fbbd23",
        
"error": "#f87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};

module.exports = config;
