module.exports = {
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          "800": '#282c34'
        },
        "smoke": {
          '800': 'rgba(0, 0, 0, 0.9)',
          '700': 'rgba(0, 0, 0, 0.75)',
          '600': 'rgba(0, 0, 0, 0.6)',
          '500': 'rgba(0, 0, 0, 0.5)',
          '400': 'rgba(0, 0, 0, 0.4)',
          '300': 'rgba(0, 0, 0, 0.25)',
          '200': 'rgba(0, 0, 0, 0.1)',
        }

      }
    }
  },
  variants: {},
  plugins: [
    require('autoprefixer')
  ]
}
