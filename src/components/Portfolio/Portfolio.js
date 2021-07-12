import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import * as ui from './ui'
import { useLanguage } from '../../context/languageContext'

export const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioPost {
        edges {
          node {
            headline
            id
            media {
              contentful_id
              gatsbyImageData(
                height: 375
                width: 375
                placeholder: BLURRED
                cropFocus: TOP
                layout: CONSTRAINED
              )
              title
            }
            link
            node_locale
            slug
            teasertext
          }
        }
      }
    }
  `)

  const theme = useContext(ThemeContext)
  const { currentLanguage } = useLanguage()

  return (
    <ui.Container id="Portfolio">
      <h2>Portfolio</h2>

      <ui.Items>
        {data?.allContentfulPortfolioPost?.edges
          ?.filter(
            (edge) => edge.node.node_locale === currentLanguage,
          )
          .map((edge) => {
            const { headline, id, media, slug, teasertext, link } =
              edge.node

            return (
              <React.Fragment key={id}>
                {media.map((image) => {
                  const { gatsbyImageData, title, contentful_id } =
                    image

                  return (
                    <GatsbyImage
                      key={contentful_id}
                      image={gatsbyImageData}
                      alt={title}
                      style={{
                        boxShadow: `5px 5px ${theme.colors.lemon}`,
                        marginBottom: '32px',
                      }}
                    />
                  )
                })}
                <h2>{headline}</h2>
                <p>{teasertext}</p>
                <Link to={slug}>{link}</Link>
              </React.Fragment>
            )
          })}
      </ui.Items>
    </ui.Container>
  )
}
