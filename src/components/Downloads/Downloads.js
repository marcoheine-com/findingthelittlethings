import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as ui from './ui'
import { CustomLink } from '../../styles/GlobalStyles'
import { useLanguage } from '../../context/languageContext'
import { LANGUAGES } from '../../constants'

export const Downloads = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDownload {
        edges {
          node {
            id
            title
            metaInfo
            node_locale
            previewImage {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                width: 180
                height: 180
              )
            }
            file {
              file {
                url
                fileName
                contentType
              }
              description
              title
            }
          }
        }
      }
    }
  `)

  const { currentLanguage } = useLanguage()

  return (
    <ui.Container>
      <h2 id="Downloads">
        {currentLanguage === LANGUAGES.en
          ? 'Free Downloads'
          : 'Kostenlose Downloads'}
      </h2>

      <ui.LeftConfetti />
      <ui.RightConfetti />
      <ui.Content>
        {data?.allContentfulDownload?.edges
          ?.filter(
            (edge) => edge.node.node_locale === currentLanguage,
          )
          .map((edge) => {
            const { id, previewImage, title, metaInfo, file } =
              edge.node

            return (
              <ui.Item key={id}>
                <GatsbyImage
                  image={previewImage.gatsbyImageData}
                  alt={title}
                />

                <ui.Text>
                  <h3>{title}</h3>
                  <p>{metaInfo}</p>

                  {file.map((item) => (
                    <CustomLink
                      key={item.file.fileName}
                      href={item.file.url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </CustomLink>
                  ))}
                </ui.Text>
              </ui.Item>
            )
          })}
      </ui.Content>
    </ui.Container>
  )
}
