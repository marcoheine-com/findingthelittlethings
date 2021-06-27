import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as ui from './ui'

export const CustomIllustrations = () => {
  const data = useStaticQuery(graphql`
    query {
      customIllustrationsHeader: allContentfulTextMediaElement(
        filter: { type: { eq: "customIllustrationsHeader" } }
      ) {
        edges {
          node {
            id
            headline
            text1 {
              text1
            }
          }
        }
      }

      customIllustrationsItems: allContentfulTextMediaElement(
        filter: { type: { eq: "customIllustrationsItem" } }
      ) {
        edges {
          node {
            id
            image {
              gatsbyImageData(layout: FIXED, width: 180, height: 180)
            }
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

  return (
    <ui.Container>
      {data?.customIllustrationsHeader?.edges?.map((edge) => {
        const { id, headline, text1 } = edge.node
        return (
          <React.Fragment key={id}>
            <ui.CustomIllustrationHeader>
              <h2>{headline}</h2>
              <p>{text1.text1}</p>
            </ui.CustomIllustrationHeader>
          </React.Fragment>
        )
      })}
      {data?.customIllustrationsItems?.edges?.map((edge) => {
        const { id, image, text1, link1, link1Label } = edge.node
        return (
          <React.Fragment key={id}>
            <ui.CustomIllustrationItem>
              <ui.Image>
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt="Image of custom Illustration"
                  objectFit="contain"
                  objectPosition="top"
                />
              </ui.Image>
              <ui.Content>
                <p>{text1.text1}</p>
                <a
                  href={link1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link1Label}
                </a>
              </ui.Content>
            </ui.CustomIllustrationItem>
          </React.Fragment>
        )
      })}
    </ui.Container>
  )
}
