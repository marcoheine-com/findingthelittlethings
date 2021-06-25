import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as ui from './ui'

export const WorkWithMe = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTextMediaElement(
        filter: { type: { eq: "workWithMe" } }
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
      <ui.Background key={id}>
        <ui.Container>
          <h2>{headline}</h2>
          <p>{text1.text1}</p>
          <a href={link1} target="_blank" rel="noopener noreferrer">
            {link1Label}
          </a>
        </ui.Container>
      </ui.Background>
    )
  })
}
