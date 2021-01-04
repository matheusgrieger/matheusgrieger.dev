module.exports = {
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
