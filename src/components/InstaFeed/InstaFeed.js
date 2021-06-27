import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as ui from './ui'

export const InstaFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 5) {
        edges {
          node {
            permalink
            id
            localImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ui.Container id="Instagram">
      <h2>Instagram</h2>
      <ui.Content>
        {data?.allInstagramContent?.edges?.map((edge) => {
          const { permalink, id, localImage } = edge.node

          return (
            <a
              key={id}
              href={permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={localImage.childImageSharp.gatsbyImageData}
              />
            </a>
          )
        })}
      </ui.Content>
    </ui.Container>
  )
}
