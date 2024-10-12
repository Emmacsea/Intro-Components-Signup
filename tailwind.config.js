/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 74%)",
          green: "hsl(154, 59%, 51%)",
        },

        accent: {
          blue: "hsl(248, 32%, 49%)",
        },

        neutral: {
          darkblue: "hsl(249, 10%, 26%)",
          grayishblue: "hsl(246, 25%, 77%)",
        }
      },

      fontFamily: {
        body: ["Poppins"],
      },


      backgroundImage: {
        'body-image': `url(${path.resolve(__dirname, 'src/assets/images/bg-intro-desktop.png')})`
      }
    },
  },
  plugins: [],
}