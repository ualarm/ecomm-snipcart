require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Tea Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: '171431a7c788b523edd8115261de4f' },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZmQ4Yzg1Y2ItYWE3Yi00Yzk5LThiNzgtYjQ4ZmM4MTc3MjIyNjM3Mzg1OTcyNTg3Mzk1Mzcz',
        autopop: true
      }
    },
  ],
}
