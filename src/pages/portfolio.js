import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../styles/Layout'
import styled from 'styled-components'
import { useLanguage } from '../context/languageContext'
import { LANGUAGES } from '../constants'

const Container = styled.section`
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
`

const PortfolioItems = ({ items }) => {
  const { currentLanguage } = useLanguage()

  return items
    .filter((edge) => edge.node.node_locale === currentLanguage)
    .map((edge) => (
      <React.Fragment key={edge.node.id}>
        <h3>{edge.node.headline}</h3>
        <Link to={edge.node.slug}>
          {currentLanguage === LANGUAGES.en
            ? 'Read portfolio post'
            : 'Portfolio posts lesen'}
        </Link>
      </React.Fragment>
    ))
}

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h2>Portfolio Posts:</h2>
        <PortfolioItems
          items={data.allContentfulPortfolioPost.edges}
        />
      </Container>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioIndexQuery {
    allContentfulPortfolioPost {
      edges {
        node {
          headline
          id
          node_locale
          slug
        }
      }
    }
  }
`
