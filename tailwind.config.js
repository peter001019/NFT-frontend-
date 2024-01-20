/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: "0px", max: "400px" },
      md: { min: "401px", max: "1023px" },
      lg: { min: "1080px" },
    },
    extend: {
      fontFamily: {
        'sans': ['NanumSquareNeoOTF', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
