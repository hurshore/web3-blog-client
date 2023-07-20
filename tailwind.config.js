/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      beige: '#e3bdae',
      pink: {
        100: 'rgb(234, 205, 194)',
        500: 'rgb(183, 93, 105)',
        700: 'rgb(142, 58, 67)',
      },
      purple: {
        300: '#4B3364',
        500: '#372549',
        700: '#1A1423',
      },
      white: '#fff',
    },
    fontFamily: {
      margarine: ['Margarine', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ai-companies':
          'url("https://framerusercontent.com/images/yaTn70bQLpCIjsphRb6i3f4sUqs.jpg?scale-down-to=512")',
        blocks:
          'url(https://framerusercontent.com/images/3xDWxY62GFxLosnDOSi8zns38.jpg?scale-down-to=512)',
        books:
          'url(https://framerusercontent.com/images/Z4paanw2jU70X5uKT2kaREbJJg.jpg?scale-down-to=512)',
        laptop:
          'url(https://framerusercontent.com/images/eeLpvgrm0LOmlJ8BmyhcZukRxw.jpg?scale-down-to=512)',
      },
    },
  },
  plugins: [],
};
