import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as ui from './ui'

export const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  return (
    <ui.Container id="Portfolio">
      <h2>Portfolio</h2>
      {data?.allContentfulPortfolioPost?.edges?.map((edge) => {
        const { headline, slug, id } = edge.node
        return (
          <React.Fragment key={id}>
            <h3>{headline}</h3>
            <Link to={slug}>More about {headline}</Link>
          </React.Fragment>
        )
      })}
    </ui.Container>
  )
}
