module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Open-Sans, sans-serif',
      'inter': ['Inter'],
    },
    minWidth: {
      '0': '0',
      '1/33': '33%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
