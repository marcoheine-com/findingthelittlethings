import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as ui from './ui'
import { useLanguage } from '../../context/languageContext'

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
            node_locale
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

  const { currentLanguage } = useLanguage()

  return data?.allContentfulTextMediaElement?.edges
    ?.filter((edge) => edge.node.node_locale === currentLanguage)
    .map((edge) => {
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
