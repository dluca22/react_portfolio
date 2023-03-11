/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colBasic: '#293241',
        colPrimary: '#98C1D9',
        colSecondary: '#98c1d94b',
        colAccent: '#EE6C4D',
        textCol: '#e0fbfc',
      },
    },
  },

  plugins: [],
};
