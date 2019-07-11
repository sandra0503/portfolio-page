module.exports = {
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      headline: ['Lora', 'serif'],
      sansserif: ['Oswald','sans-serif'],
    },
    colors: {
      eggshell: '#fdf7e9',
      black: '#000',
      blue: '#1a1b46',
      white: '#fff',
      teal: '#49beb7',
      grey: '#f4f7f6',
    },
    extend: {
      height: {
        'hero': 'calc(100vh - 75px)',
      },
      minHeight: {
        'hero': '500px',
      },
      maxHeight: {
        'hero': '800px',
      },
      fontSize: {
        'super': '3rem',
        'huge': '2.5rem',
        'tiny': '10px'
      }
    }
  },
  plugins: [
    require('glhd-tailwindcss-transitions')(),
  ],
};
