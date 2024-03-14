/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'enactusblue': '#29476D',
        'enactusyellow': '#FFC220',
        'offwhite': '#E8EFF9',
        'midgrey': '#565454',
        'dark': '#2F2E2E',
        'enactus-yellow': '#FFC220', //ENACTUS Color
      },
      boxShadow: {
        'all': '20px 20px 50px 5px rgba(0, 0, 0, 0.15), -10px -10px 50px 10px rgba(255, 255, 255, 0.5)',
        'solid': '15px 15px 0 #2F2E2E',
        'bluesolid': '15px 15px 0 #29476D',
        'yellowsolid': '15px 15px 0 #FFC220',
      },
      backgroundImage: {
        'hero': "url('/indeximages/ubcfountain.jpg')",
        'member': "url('/indeximages/member.jpg')",
        'comp': "url('/indeximages/comp.jpg')",
        'impact': "url('/indeximages/impactimage.png')",
        'about': "url('/aboutimages/aboutus1.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '0.8': '80vh',
        '288': '288px',
      },
      width: {
        '0.25': '25vw',
      },
      inset: {
        '65vh': '63.7vh',
        '3/5': '64%',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      screens: {
        '3xl': '1744px',
        '500': '500px',
      },
    },
    },
  plugins: []
};
