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
            caption
            permalink
            id
            localImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 256
                  height: 256
                )
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ui.Container>
      <h2>Instagram</h2>
      <ui.Content>
        {data?.allInstagramContent?.edges?.map((edge) => {
          const { caption, permalink, id, localImage } = edge.node

          return (
            <a
              key={id}
              href={permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={localImage.childImageSharp.gatsbyImageData}
                alt={caption}
              />
            </a>
          )
        })}
      </ui.Content>
    </ui.Container>
  )
}
