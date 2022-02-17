const rnd = () => Math.random().toString(36).substr(2, 1)

module.exports = {
  /*
  Experimental flags that increase DX and build times with different technics (may require to use `yarn clean` time to time)
  Current avaliable flags: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  */
  // flags: {
  //   FAST_DEV: true,
  // },
  siteMetadata: {
    title: `Everstake Capital`,
    description: `Money is cheap, expertise is priceless. We bridge the gap.`,
    domain: process.env.GATSBY_VERCEL_URL || 'everstake.salex.pro',
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        enable: process.env.GATSBY_VERCEL_ENV === 'production',
        prefix: rnd(),
        suffix: rnd(),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `images`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            urlLoaderOptions: {
              limit: 10,
            },
          },
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
