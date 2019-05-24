module.exports = {
  title: 'Sandra Zollner',
  description: 'Sandra Zollner',
  themeConfig: {
    docsDir: 'docs',
    locales: {
      '/': {
        selectText: 'Language',
        label: 'English',
        nav: [
          {
            text: 'About me',
            link: '#about',
          },
          {
            text: 'Contact',
            link: '#contact',
          },
        ]
      },
    }
  },
  plugins: {
    'vuepress-plugin-smooth-scroll': true,
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
};
