const { i18n } = require("./next-i18next.config")

// module.exports = {
//   i18n,
//   images: {
//     domains: [process.env.NEXT_IMAGE_DOMAIN],
//   },
// }

module.exports = {
  i18n,
  // reactStrictMode: true,
  images: {
    domains: ['http:localhost:3000', 'staging.test-dion.halcyondigitalhost.com'],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ]
  },
}