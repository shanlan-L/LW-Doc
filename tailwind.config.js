module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'content': '54.6rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
