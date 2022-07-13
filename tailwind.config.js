/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      animation: {
        'typeWriter': 'typingAnim 3s steps(40, end), blinkingCursor .5s step-end 6',
        'typeWriter2': 'hiddenTyping 7s, typingAnim 0s steps(40, end) 7s, blinkingCursor .5s step-end infinite 3.2s, staticCursor 4s 3.2s',
        'gifDelay': 'typingAnim 3.5',
        'gifHide': 'widthChange 1s infinite 7s, opacOn step-end 3.4s' ,
        'hide1': 'visHide 0s infinite 3.4s',
        'hide2': 'visHide 3.2s',


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
        visHide:{
          from: {visibility: 'hidden'},
          to: {visibility: 'hidden'}
        },
        opacOn:{
          from: {opacity: '0'},
          to: {opacity: '100%'}
        },
        widthChange:{
          from: {height: '0'},
          to: {height: '0'}
        },
        colorhide:{
          from: {backgroundColor: 'transparent'},
          to: {backgroundColor: 'rgb(39 39 42)'}
        },
        blinkingCursor: {
          from: {borderColor: 'transparent'},
          to: {borderColor: 'transparent'},
          '50%': {borderColor: 'navajowhite',borderRightWidth: '2px',borderStyle: 'solid'},
        },
        staticCursor: {
          from: {borderColor: 'navajowhite',borderRightWidth: '2px',borderStyle: 'solid'},
          to: {borderColor: 'navajowhite',borderRightWidth: '2px',borderStyle: 'solid'},
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
