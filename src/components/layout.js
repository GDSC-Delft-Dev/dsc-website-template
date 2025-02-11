import React from 'react'
import Head from './Head'
import Nav from './Nav'
import Footer from './Footer'
import Seo from './seo'
import { useStaticQuery, graphql } from 'gatsby'
import './Layout.scss'

export default ({ children }) => {
  const {
    site: {
      siteMetadata: { title, lang, description, register, social, mail },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          university
          lang
          register
          mail
          social {
            instagram
            github
            twitter
            facebook
          }
        }
      }
    }
  `)

  return (
    <>
      <Head />
      <Seo {...{ title, lang, description }} />
      <Nav register={register} />
      {children}
      <Footer {...{ social, mail }} />
    </>
  )
}
