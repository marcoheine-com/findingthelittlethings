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
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 270
                  height: 270
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ui.Section>
      <h2>Shop</h2>
      <ui.Items>
        {data.allEtsyListing.nodes.map((item) => (
          <ui.Item key={item.id}>
            <GatsbyImage
              image={
                item.childEtsyListingImage.childFile.childImageSharp
                  .gatsbyImageData
              }
              alt={item.title}
            />
            <p>{item.title}</p>
            <p>{item.price} €</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              buy on etsy
            </a>
          </ui.Item>
        ))}
      </ui.Items>
    </ui.Section>
  )
}
