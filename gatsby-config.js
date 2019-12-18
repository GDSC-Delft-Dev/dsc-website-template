module.exports = {
  siteMetadata: {
    title: `Delft Developer Student Club`,
    description: `Developer Student Clubs(DSC) is a Google Developers program for university students to acquire technical skills and solve problems`,
    university: `Delft`,
    lang: `en`,
    register: `#`,
    mail: `contact@dscdelft.nl`,
    social: {
      youtube: `https://youtube.com/dscdelft`,
      github: `https://github.com/dscdelft`,
      twitter: `https://twitter.com/dscdelft`,
      instagram: `https://instagram.com/dscdelft`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./teams/`,
        name: 'teams',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dsc-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
