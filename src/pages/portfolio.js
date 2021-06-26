import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../styles/Layout'
import styled from 'styled-components'

const Container = styled.section`
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
`

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h2>Blog Posts:</h2>
        {data.allContentfulPortfolioPost.edges.map((edge) => (
          <React.Fragment key={edge.node.id}>
            <h3>{edge.node.headline}</h3>
            <Link to={edge.node.slug}>Read blog post</Link>
          </React.Fragment>
        ))}
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
          id
          slug
          headline
        }
      }
    }
  }
`
