import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as ui from './ui'

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      getInTouch: allContentfulFooterlinks(
        filter: { category: { eq: "Get in touch" } }
      ) {
        edges {
          node {
            id
            link
            linkText
            isHeadline
          }
        }
      }
      links: allContentfulFooterlinks(
        filter: { category: { eq: "Links" } }
      ) {
        edges {
          node {
            id
            link
            linkText
            isHeadline
          }
        }
      }
    }
  `)

  const getInTouchitems = data?.getInTouch?.edges
  const linkItems = data?.links?.edges

  const renderHeadline = (items) =>
    items
      .filter((item) => item?.node?.isHeadline)
      .map(
        (item) =>
          item && <h5 key={item.node.id}>{item.node.linkText}</h5>,
      )

  const renderItems = (items) =>
    items
      .filter((edge) => !edge.node.isHeadline)
      .map((edge) => {
        const { id, link, linkText } = edge.node

        return (
          <li key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
          </li>
        )
      })

  return (
    <ui.Background>
      <ui.Container>
        <ui.List>
          {renderHeadline(getInTouchitems)}
          {renderItems(getInTouchitems)}
        </ui.List>

        <ui.List>
          {renderHeadline(linkItems)}
          {renderItems(linkItems)}
        </ui.List>
      </ui.Container>
    </ui.Background>
  )
}
