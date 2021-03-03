module.exports = {
  purge: [],
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': -1,
      },
      colors: {
        'pink-500': '#ff7cbd',
      },
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
      },

      rotate: {
        '-135': '-135deg',
      },
    },
    variants: {
      borderColor: ['responsive', 'last', 'hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    // require('@tailwindcss/forms'),
  ],
}
