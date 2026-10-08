/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.tsx', './components/**/*.tsx', './pages/**/*.tsx'],
  theme: { extend: { colors: { accent: '#ff6b00' } } },
  plugins: [],
};
