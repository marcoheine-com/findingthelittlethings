import React from 'react'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GlobalStyle } from './GlobalStyles'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Page>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  </ThemeProvider>
)
