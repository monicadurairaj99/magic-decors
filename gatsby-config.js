/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: ` MAGIC DECORS`,
    description: `MAGIC DECORS`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rx4gw55zu79c',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'TUN6Y0iDoCWl-xpzy4E7nZUOKq72i5USAAHWsmrCoZQ',
      },
    },
    `gatsby-plugin-sass`
  ],}
