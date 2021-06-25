import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../../assets/svg/Logo_ftlt.svg'
import * as ui from './ui'

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeaderlinks {
        edges {
          node {
            id
            link
          }
        }
      }
    }
  `)

  return (
    <ui.Header>
      <ui.HeaderContent>
        <ui.Nav>
          {data?.allContentfulHeaderlinks?.edges?.map((edge) => {
            return (
              <li key={edge.node.id}>
                <a href={`#${edge.node.link}`}>{edge.node.link}</a>
              </li>
            )
          })}
        </ui.Nav>

        <Logo />

        <h1>Prints and Custom Illustrations</h1>
        <p>by Laura Heine</p>
      </ui.HeaderContent>
    </ui.Header>
  )
}
