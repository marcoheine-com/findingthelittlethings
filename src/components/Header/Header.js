import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Logo from '../../assets/Logo_ftlt.svg'
import Menu from '../../assets/menu.svg'
import { LanguageToggle } from '../LanguageToggle/LanguageToggle'
import * as ui from './ui'
import { useLanguage } from '../../context/languageContext'

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeaderlinks(sort: { fields: order }) {
        edges {
          node {
            id
            link
            node_locale
          }
        }
      }
    }
  `)

  const { currentLanguage } = useLanguage()
  const [showMenu, setShowMenu] = React.useState(false)
  const handleClick = () => setShowMenu(!showMenu)

  return (
    <ui.Header>
      <ui.LeftConfetti />
      <ui.RightConfetti />
      <ui.MenuToggle onClick={handleClick}>
        <span>Menu</span>
        <Menu />
      </ui.MenuToggle>
      <ui.HeaderContent>
        <ui.Menu showMenu={showMenu}>
          <ui.Nav>
            {data?.allContentfulHeaderlinks?.edges
              ?.filter(
                (edge) => edge.node.node_locale === currentLanguage,
              )
              .map((edge) => {
                return (
                  <li key={edge.node.id}>
                    <a href={`#${edge.node.link}`}>
                      {edge.node.link}
                    </a>
                  </li>
                )
              })}

            <LanguageToggle />
          </ui.Nav>
        </ui.Menu>

        <Link to="/">
          <Logo />
        </Link>

        <h1>Prints and Custom Illustrations</h1>
        <p>by Laura Heine</p>
      </ui.HeaderContent>
    </ui.Header>
  )
}
