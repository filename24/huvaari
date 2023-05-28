/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: 'macchiato'
    }),
  ],
}
