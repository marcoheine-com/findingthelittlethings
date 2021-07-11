import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as ui from './ui'
import { useLanguage } from '../../context/languageContext'

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
            node_locale
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
            node_locale
          }
        }
      }
    }
  `)

  const getInTouchitems = data?.getInTouch?.edges
  const linkItems = data?.links?.edges

  const { currentLanguage } = useLanguage()

  const renderHeadline = (items) =>
    items
      .filter((item) => item?.node?.isHeadline)
      .filter((item) => item.node.node_locale === currentLanguage)
      .map(
        (item) =>
          item && (
            <li key={item.node.id}>
              <h3>{item.node.linkText}</h3>
            </li>
          ),
      )

  const renderItems = (items) =>
    items
      .filter((edge) => !edge.node.isHeadline)
      .filter((item) => item.node.node_locale === currentLanguage)
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
        <ui.LeftConfetti />
        <ui.RightConfetti />
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
