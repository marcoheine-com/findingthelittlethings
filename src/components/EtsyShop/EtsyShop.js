import * as React from 'react'
import * as ui from './ui'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const EtsyShop = () => {
  const [shouldRenderAll, setShouldRenderAll] = React.useState(false)
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

  const allItems = data?.allEtsyListing?.nodes
  const initialFirstFourItems = data?.allEtsyListing?.nodes.slice(
    0,
    4,
  )

  const etsyItems = shouldRenderAll ? allItems : initialFirstFourItems

  return (
    <ui.Section id="Shop">
      <h2>Shop</h2>
      <ui.Items>
        {etsyItems.map((item) => {
          return (
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
          )
        })}
      </ui.Items>
      <button onClick={() => setShouldRenderAll(!shouldRenderAll)}>
        {shouldRenderAll ? 'Show less' : 'Show more'}
      </button>
    </ui.Section>
  )
}
