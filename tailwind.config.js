module.exports = {
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      headline: ['Limelight','cursive'],
      sansserif: ['Oswald','sans-serif'],
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
      height: {
        'hero': 'calc(100vh - 69px)',
      },
      minHeight: {
        'hero': '500px',
      },
      maxHeight: {
        'hero': '800px',
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
