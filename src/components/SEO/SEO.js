import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO = () => {
  const { site } = useStaticQuery(query)

  const { title, description, siteUrl } = site.siteMetadata

  const lang = 'en'

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang,
      }}
    >
      <meta name="description" content={description} />

      <meta property="og:url" content={siteUrl} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
