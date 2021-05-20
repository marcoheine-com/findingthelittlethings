import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Recursive';
    font-variation-settings: 'MONO' 1, 'CASL' 0, 'wght' 300, 'slnt' 0, 'CRSV' 0.5;
    font-size: 16px;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Recursive';
    font-variation-settings: 'MONO' 1, 'CASL' 1, 'wght' 300, 'slnt' 0, 'CRSV' 0.5;
    font-size: 24px;
  }
`
