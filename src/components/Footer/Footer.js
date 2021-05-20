import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFooterlinks {
        edges {
          node {
            id
            link
            linkText
          }
        }
      }
    }
  `)

  return (
    <footer>
      <ul>
        {data?.allContentfulFooterlinks?.edges?.map((edge) => {
          return (
            <li key={edge.node.id}>
              <a
                href={edge.node.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {edge.node.linkText}
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
