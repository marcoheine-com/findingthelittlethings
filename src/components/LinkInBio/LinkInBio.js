import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Logo from '../../assets/Logo_ftlt.svg'
import * as ui from './ui'
import { useLanguage } from '../../context/languageContext'

export const LinkInBio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLinkInBio(sort: { fields: order }) {
        edges {
          node {
            id
            linkLabel
            link
            order
            node_locale
          }
        }
      }
    }
  `)

  const { currentLanguage } = useLanguage()

  return (
    <ui.Background>
      <ui.Header>
        <ui.HeaderContent>
          <Link to="/">
            <Logo />
          </Link>

          <h1>Prints and Custom Illustrations</h1>
          <p>by Laura Heine</p>
        </ui.HeaderContent>
      </ui.Header>
      <ui.LinkList>
        {data?.allContentfulLinkInBio?.edges
          ?.filter(
            (edge) => edge.node.node_locale === currentLanguage,
          )
          .map((edge) => {
            return (
              <li key={edge.node.id}>
                <a href={`${edge.node.link}`}>
                  {edge.node.linkLabel}
                </a>
              </li>
            )
          })}
      </ui.LinkList>
    </ui.Background>
  )
}
