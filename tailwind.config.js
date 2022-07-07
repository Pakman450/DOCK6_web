/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      animation: {
        'typeWriter': 'typingAnim 3.5s steps(40, end), blinkingCursor .5s step-end infinite'
      },

      keyframes: {
        typingAnim: {
          from: { width: '0'},
          to: { width: '100%' }
        },
        blinkingCursor: {
          from: {borderColor: 'transparent'},
          // to: {borderColor: 'transparent'},
          '50%': {borderColor: 'orange'},
          
        }
      },
      colors: {
        'bg-gray-800-monochromatic': '#314158',
        'bg-#5A6679': '#5A6679',
      },
      backgroundImage: {
        'hexagon_pattern': "url('/img/background.jpg')",
      },
     },
   },
   plugins: [],
}
