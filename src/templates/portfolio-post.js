import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Layout } from '../styles/Layout'
import * as ui from './ui'
import { GatsbyImage } from 'gatsby-plugin-image'

const PortfolioPostTemplate = ({ data }) => {
  const { headline, media, body } = data.contentfulPortfolioPost
  return (
    <Layout>
      <ui.Container>
        <h2>{headline}</h2>
        {media.map((element) => (
          <GatsbyImage
            image={element.gatsbyImageData}
            alt={element.title}
            key={element.title}
          />
        ))}
        {renderRichText(body)}
      </ui.Container>
    </Layout>
  )
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulPortfolioPost(slug: { eq: $slug }) {
      headline
      media {
        title
        gatsbyImageData(placeholder: BLURRED)
      }
      body {
        raw
      }
    }
  }
`
