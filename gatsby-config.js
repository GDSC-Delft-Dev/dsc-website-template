module.exports = {
  siteMetadata: {
    title: `Delft Developer Student Club`,
    description: `Developer Student Clubs (DSC) is a Google Developers program for university students to acquire technical skills and solve problems`,
    university: `Delft, Netherlands`,
    lang: `en`,
    register: `#`,
    mail: `dsc.delft@gmail.com`,
    social: {
      github: `https://github.com/dscdelft`,
      twitter: `https://twitter.com/dscdelft`,
      instagram: `https://instagram.com/dscdelft`,
      facebook: `https://facebook.com/dscdelft`,
      youtube: `#`,
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Google Sans:300,200,400,700'],
        },
      },
    },
  ],
}
