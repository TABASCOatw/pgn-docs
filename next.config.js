const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
  })
  
  module.exports = withNextra(
    {
      i18n: {
          locales: ['en-US'],
          defaultLocale: 'en-US'
        },    
      async redirects() {
          return [
              {
                  source: '/getting-started',
                  destination: '/',
                  permanent: true
              },
              {
                  source: '/using-pgn',
                  destination: '/using-pgn/adding-pgn-to-a-wallet',
                  permanent: true
              },
              {
                  source: '/getting-started/rpc-endpoints',
                  destination: '/using-pgn/adding-pgn-to-a-wallet',
                  permanent: true
              },
              {
                  source: '/getting-started/bridge',
                  destination: '/using-pgn/bridging',
                  permanent: true
              },
              {
                  source: '/getting-started/faucet',
                  destination: '/using-pgn/bridging',
                  permanent: true
              },
              {
                  source: '/using-pgn/bridging-eth-to-pgn',
                  destination: '/using-pgn/bridging',
                  permanent: true
              },
              {
                  source: '/quick-links',
                  destination: '/',
                  permanent: true
              }
          ]
      },
  }
  )