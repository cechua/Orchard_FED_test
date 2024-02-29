/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html', './src/**/*.{js,jsx}'],
  content: ['./src/**/*.{js,jsx,html}'],
  theme: {
    colors: {
      bodyBG: 'rgb(14, 20, 20)',
    },
    extend: {},
  },
  plugins: [],
};
