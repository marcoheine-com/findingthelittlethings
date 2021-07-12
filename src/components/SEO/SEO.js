import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon16x16 from '../../images/favicon-16x16.png'
import favicon32x32 from '../../images/favicon-32x32.png'
import favicon96x96 from '../../images/favicon-96x96.png'

const faviconLinks = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: favicon16x16,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: favicon32x32,
  },
  { rel: 'shortcut icon', type: 'image/png', href: favicon96x96 },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: favicon16x16,
  },
]

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
      link={faviconLinks}
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
