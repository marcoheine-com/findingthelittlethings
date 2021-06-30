import * as React from 'react'
import { LinkInBio } from '../components/LinkInBio'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { SEO } from '../components/SEO'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      <Page>
        <LinkInBio />
      </Page>
    </ThemeProvider>
  )
}

export default IndexPage
