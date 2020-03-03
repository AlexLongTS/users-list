module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors:{
        'ts-blue': '#2580c3',
        'ts-dark': '#1c2537',
        'ts-darker': 'rgb(26, 33, 45)',
        'ts-darkest': 'rgb(22, 26, 35)',
        'ts-light': '#e0e0e0',
        'ts-green': '#25dd85'
      },
    }
  },
  variants: {},
  plugins: []
}
