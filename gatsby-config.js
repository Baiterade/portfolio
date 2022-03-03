require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Jager Overson`,
    siteTitleAlt: `Jager Overson - Portfolio`,
    siteHeadline: `Jager Overson - Portfolio`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Professional portfolio built using gatsby :) `,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `Jager Overson`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jager Overson - Portfolio`,
        short_name: `Jager`,
        description: `Portfolio built using gatsby.`,
        start_url: `/`,
        background_color: `#f6ad55`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/banner.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/banner.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
