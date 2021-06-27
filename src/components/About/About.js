import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as ui from './ui'

export const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTextMediaElement(
        filter: { type: { eq: "about" } }
      ) {
        edges {
          node {
            id
            headline
            link1
            link1Label
            link2
            link2Label
            link3
            link3Label
            image {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 180
                height: 180
              )
            }
            text1 {
              id
              text1
            }
            text2 {
              text2
            }
          }
        }
      }
    }
  `)

  return data?.allContentfulTextMediaElement?.edges?.map((edge) => {
    const {
      id,
      headline,
      image,
      text1,
      link1,
      link1Label,
      link2,
      link2Label,
      text2,
      link3,
      link3Label,
    } = edge.node

    return (
      <ui.Background key={id} id="About">
        <ui.Container>
          <ui.LeftConfetti />
          <ui.RightConfetti />
          <ui.Image>
            <GatsbyImage
              image={image.gatsbyImageData}
              alt="Logo"
              objectFit="contain"
              objectPosition="top"
            />
          </ui.Image>
          <ui.Headline>{headline}</ui.Headline>
          <ui.Content>
            <p>{text1.text1}</p>
            <ui.LinkList>
              <a
                href={link1}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link1Label}
              </a>
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link2Label}
              </a>
            </ui.LinkList>
            <p>{text2.text2}</p>
            <a href={link3} target="_blank" rel="noopener noreferrer">
              {link3Label}
            </a>
          </ui.Content>
        </ui.Container>
      </ui.Background>
    )
  })
}
