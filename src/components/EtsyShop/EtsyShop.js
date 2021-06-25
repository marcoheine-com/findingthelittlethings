import * as React from 'react'
import * as ui from './ui'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const EtsyShop = () => {
  const data = useStaticQuery(graphql`
    query {
      allEtsyListing {
        nodes {
          id
          title
          price
          url
          description
          childEtsyListingImage {
            childFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 400)
              }
            }
          }
        }
      }
    }
  `)

  const renderEtyItems = () =>
    data.allEtsyListing.nodes.map((item) => (
      <React.Fragment key={item.id}>
        <p>{item.title}</p>
        <p>{item.price} €</p>
        <GatsbyImage
          image={
            item.childEtsyListingImage.childFile.childImageSharp
              .gatsbyImageData
          }
          alt={item.title}
        />
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          Buy now
        </a>
      </React.Fragment>
    ))

  return (
    <ui.Section>
      <h2>Shop</h2>

      {renderEtyItems()}
    </ui.Section>
  )
}
