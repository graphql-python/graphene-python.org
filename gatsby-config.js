module.exports = {
  siteMetadata: {
    title: `Graphene-Python.org`
  },
  pathPrefix: `/__PATH_PREFIX__/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-jsx`,
    `@jacobmischka/gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-12613282-7"
        // Puts tracking script in the head instead of the body
        // head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
      }
    }
  ]
};
