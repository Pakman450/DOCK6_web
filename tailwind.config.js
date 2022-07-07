/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      animation: {
        'typeWriter': 'typingAnim 3.5s steps(40, end), blinkingCursor .5s step-end 8',
        'typeWriter2': 'hiddenTyping 8s, typingAnim 3.5s steps(40, end) 8s, blinkingCursor .5s step-end infinite 8s'
      },

      keyframes: {
        typingAnim: {
          from: { width: '0'},
          to: { width: '100%' }
        },
        hiddenTyping:{
          from: {width: '0',borderColor: 'transparent'},
          to: {width:'0',borderColor: 'transparent'}
        },
        blinkingCursor: {
          from: {borderColor: 'transparent'},
          to: {borderColor: 'transparent'},
          '50%': {borderColor: 'navajowhite',borderRightWidth: '2px',borderStyle: 'solid'},
        },
        blinkingEnd: {
          from: {borderColor: 'transparent',borderRightWidth: '0px'},
          to: {borderColor: 'transparent',borderRightWidth: '0px'},
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
