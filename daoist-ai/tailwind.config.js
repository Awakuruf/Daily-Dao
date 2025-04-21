/** @type {import('tailwindcss').Config} */
module.exports = {
    // 1. Tell Tailwind which files to scan for class names:
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    // 2. (Optional) Extend the default theme if you like:
    theme: {
      extend: {
        colors: {
          // add custom colors here
        },
        fontFamily: {
          // add custom fonts here
        },
      },
    },
    // 3. Any plugins you want to use:
    plugins: [],
  }  