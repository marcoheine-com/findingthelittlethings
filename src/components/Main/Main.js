import * as React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px 160px 20px;
`

export const Main = ({ children }) => (
  <StyledMain>{children}</StyledMain>
)
