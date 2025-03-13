/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(12, 192, 223)',
        secondary: 'rgb(29, 35, 42)',
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      backgroundImage: {
        'contact_img': "url('https://i.ibb.co.com/39N2Nsvg/Dark-Futuristic-Wave-Lines-Desktop-Background.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

