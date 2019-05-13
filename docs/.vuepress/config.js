module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    locales: {
      '/': {
        selectText: 'Language',
        label: 'English',
        sidebar: [
          '/project1',
          '/welcome',
          '/test'
        ],
        nav: [
          {
            text: 'About me',
            link: '/about',
          },
          {
            text: 'References',
            link: '/project1',
          }
        ]
      },
      '/de/': {
        selectText: 'Sprache',
        label: 'Deutsch',
        sidebar: [
          '/de/project1',
          '/de/welcome',
          '/de/test'
        ],
        nav: [
          {
            text: 'Über mich',
            link: '/de/about',
          },
          {
            text: 'Referenzen',
            link: '/de/project1',
          }
        ]
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-GB', // this will be set as the lang attribute on <html>
      title: 'Sandra Zollner',
      description: 'Frontend-Developer'
    },
    '/de/': {
      lang: 'de-DE',
      title: 'Sandra Zollner',
      description: 'Frontend-Entwicklerin'
    }
  }
}
