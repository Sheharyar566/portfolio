/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: [`var(--Roboto)`],
      OpenSans: [`var(--OpenSans)`],
    },
    extend: {
      backgroundImage: {
        'blobPattern': "url('/header.svg')",
      },
      colors: {
        'primary': '#FBAE3C',
        'secondary': '#001220',
      },
    },
  },
  plugins: [],
}
