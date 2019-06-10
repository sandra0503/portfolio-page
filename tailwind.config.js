module.exports = {
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      headline: ['Oswald','sans-serif'],
    },
    colors: {
      pink: '#f5e1da',
      black: '#000',
      blue: '#1a1b46',
      white: '#fff',
      grey: '#f1f1f1',
      teal: '#085f63',
    },
    extend: {
      minHeight: {
        'hero': 'calc(100vh - 69px)',
      },
      fontSize: {
        'super': '5rem',
        'huge': '4rem',
      }
    }
  },
  plugins: [
    require('glhd-tailwindcss-transitions')(),
  ],
};
