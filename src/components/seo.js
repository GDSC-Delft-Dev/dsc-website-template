import React from 'react'
import Helmet from 'react-helmet'

export default ({ title, lang, description }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: 'og:image',
        content: 'https://dscdelft.nl/static/diversity-e2ddf1c608a75add459e67ce3da4cc76.png'
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      // {
      //   name: `twitter:creator`,
      //   content: site.siteMetadata.author,
      // },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
    ]}
  />
)
