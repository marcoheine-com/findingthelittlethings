import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const CustomIllustrations = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTextMediaElement(
        filter: { type: { eq: "customIllustrations" } }
      ) {
        edges {
          node {
            id
            headline
            text1 {
              text1
            }
            link1
            link1Label
          }
        }
      }
    }
  `)

  return data?.allContentfulTextMediaElement?.edges?.map((edge) => {
    const { id, headline, text1, link1, link1Label } = edge.node
    return (
      <React.Fragment key={id}>
        <h2>{headline}</h2>
        <p>{text1.text1}</p>
        <a href={link1} target="_blank" rel="noopener noreferrer">
          {link1Label}
        </a>
      </React.Fragment>
    )
  })
}
