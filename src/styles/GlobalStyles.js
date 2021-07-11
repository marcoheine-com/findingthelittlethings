import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import '@fontsource/recursive/variable-full.css'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.softviolet};
    font-family: 'RecursiveVariable';
    font-size: 16px;
    font-variation-settings: 'MONO' 1, 'CASL' 0, 'slnt' 0, 'CRSV' 0.5;
    font-weight: 300;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'RecursiveVariable';
    font-size: 24px;
    font-variation-settings: 'MONO' 1, 'CASL' 1, 'slnt' 0, 'CRSV' 0.5;
    font-weight: 700;
    margin-top: 0;
  }

  h2 {
    margin-bottom: 24px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin-top: 0;
    line-height: 1.5;
  }
`

// ### Globally used styled components ###
export const CustomLink = styled.a`
  font-family: 'RecursiveVariable';
  font-variation-settings: 'MONO' 1, 'CASL' 1, 'slnt' 0, 'CRSV' 0.5;
  font-weight: 700;
  text-transform: uppercase;
`
