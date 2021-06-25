import * as React from 'react'
import * as ui from './ui'
import { useQuery } from 'react-query'

const ETSY_API = `${
  process.env.NODE_ENV === 'development'
    ? 'https://cors-anywhere.herokuapp.com/'
    : ''
}https://openapi.etsy.com/v2/shops/findinglittlethings/listings/active?api_key=${
  process.env.ETSY_API_KEY
}&includes=MainImage`

export const EtsyShop = () => {
  const { status, data } = useQuery('etsyData', async () => {
    try {
      const response = await fetch(ETSY_API, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log(response)

      if (!response.ok) {
        return new Error(response.statusText)
      }
      const resultJSON = await response.json()
      return resultJSON
    } catch (error) {
      return error
    }
  })

  console.log(ETSY_API)

  const renderEtyItems = () =>
    data.results.map((item) => (
      <React.Fragment key={item.listing_id}>
        <p>{item.title}</p>
        <p>{item.price} €</p>
        <img src={item.MainImage.url_170x135} />
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          Buy now
        </a>
      </React.Fragment>
    ))

  return (
    <ui.Section>
      <h2>Shop</h2>
      {status === 'loading' && <p>Loading etsy items...</p>}

      {status === 'error' && (
        <p>Could not load etsy items. Please try again.</p>
      )}

      {status === 'success' && data?.results && renderEtyItems()}
    </ui.Section>
  )
}
