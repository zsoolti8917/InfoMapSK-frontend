/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: ["index.html",
  "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-700': '#014E56',
        'primary-300': '#F67E7E',
        'primary-100': '#FFFFFF',
        'secondary-400': '#79C8C7',
        'secondary-600': '#2C6269',
        'secondary-700': '#004047',
        'secondary-800': '#012F34',
        'secondary-900': '#002529',
      },
      maxWidth:{
        'container': '1200px'
      },
      fontFamily: {
        livvic: ['Livvic', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

