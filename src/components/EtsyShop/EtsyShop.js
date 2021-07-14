import * as React from 'react'
import * as ui from './ui'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useLanguage } from '../../context/languageContext'
import PreviousArrow from '../../assets/PreviousArrow.svg'
import NextArrow from '../../assets/NextArrow.svg'
import MenuButtonActive from '../../assets/MenuButtonActive.svg'
import MenuButton from '../../assets/MenuButton.svg'

export const EtsyShop = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAction(filter: { category: { eq: "Etsy" } }) {
        edges {
          node {
            id
            node_locale
            label
          }
        }
      }
      allEtsyListing(limit: 16) {
        nodes {
          id
          title
          price
          url
          description
          childEtsyListingImage {
            childFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 270
                  height: 270
                )
              }
            }
          }
        }
      }
    }
  `)

  const allItems = data?.allEtsyListing?.nodes

  const [sliceValues, setSliceValues] = React.useState({
    start: 0,
    end: 4,
  })

  const initialFourItems = allItems.slice(
    sliceValues.start,
    sliceValues.end,
  )

  const [etsyItems, setEtsyItems] = React.useState(initialFourItems)
  const [fadeInDirection, setFadeInDirection] = React.useState('left')

  const useIsMount = () => {
    const isMountRef = React.useRef(true)
    React.useEffect(() => {
      isMountRef.current = false
    }, [])
    return isMountRef.current
  }

  const isMount = useIsMount()

  React.useEffect(() => {
    // Don't set values on initial render
    if (!isMount) {
      setEtsyItems(allItems.slice(sliceValues.start, sliceValues.end))
    }
  }, [sliceValues])

  const { currentLanguage } = useLanguage()

  const handlePreviousClick = () => {
    setFadeInDirection('left')

    if (sliceValues.start < 4) {
      setSliceValues({
        start: allItems.length - 4,
        end: allItems.length,
      })
      return
    }

    setSliceValues({
      start: sliceValues.start - 4,
      end: sliceValues.end - 4,
    })
  }

  const handleNextClick = () => {
    setFadeInDirection('right')

    if (sliceValues.end >= allItems.length) {
      setSliceValues({ start: 0, end: 4 })
      return
    }

    setSliceValues({
      start: sliceValues.start + 4,
      end: sliceValues.end + 4,
    })
  }

  const renderMenuButton = (index) =>
    sliceValues.start === index ? (
      <MenuButtonActive />
    ) : (
      <MenuButton />
    )

  return (
    <ui.Section id="Shop">
      <h2>Shop</h2>

      <ui.Items>
        {etsyItems.map((item) => {
          return (
            <ui.Item key={item.id} fadeInDirection={fadeInDirection}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  image={
                    item.childEtsyListingImage.childFile
                      .childImageSharp.gatsbyImageData
                  }
                  alt={item.title}
                />

                <ui.InfoText>
                  <h3>{item.title.replace(/&quot;/g, '"')}</h3>
                  <p>{item.price} €</p>
                  {data.allContentfulAction.edges
                    .filter(
                      (edge) =>
                        edge.node.node_locale === currentLanguage,
                    )
                    .map((edge) => (
                      <ui.Button key={edge.node.id}>
                        {edge.node.label}
                      </ui.Button>
                    ))}
                </ui.InfoText>
              </a>
            </ui.Item>
          )
        })}
      </ui.Items>

      <ui.MenuButtons>
        <button onClick={handlePreviousClick}>
          <PreviousArrow />
        </button>

        <ui.Buttongroup>
          <button
            onClick={() => setSliceValues({ start: 0, end: 4 })}
          >
            {renderMenuButton(0)}
          </button>
          <button
            onClick={() => setSliceValues({ start: 4, end: 8 })}
          >
            {renderMenuButton(4)}
          </button>
          <button
            onClick={() => setSliceValues({ start: 8, end: 12 })}
          >
            {renderMenuButton(8)}
          </button>
          <button
            onClick={() => setSliceValues({ start: 12, end: 16 })}
          >
            {renderMenuButton(12)}
          </button>
        </ui.Buttongroup>

        <button>
          <NextArrow onClick={handleNextClick} />
        </button>
      </ui.MenuButtons>
    </ui.Section>
  )
}
