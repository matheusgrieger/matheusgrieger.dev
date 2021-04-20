module.exports = {
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'en-US',
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/links',
        permanent: false,
      },
    ];
  },
}
