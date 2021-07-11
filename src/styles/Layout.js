import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import { GlobalStyle } from './GlobalStyles'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components'
import { LanguageContextProvider } from '../context/languageContext'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

export const Layout = ({ children }) => (
  <LanguageContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      <Page>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Page>
    </ThemeProvider>
  </LanguageContextProvider>
)
