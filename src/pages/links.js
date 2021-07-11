import * as React from 'react'
import { LinkInBio } from '../components/LinkInBio'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { SEO } from '../components/SEO'
import { LanguageContextProvider } from '../context/languageContext'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const IndexPage = () => {
  return (
    <LanguageContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SEO />
        <Page>
          <LinkInBio />
        </Page>
      </ThemeProvider>
    </LanguageContextProvider>
  )
}

export default IndexPage
