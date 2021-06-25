import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.softviolet};
  padding: 0 calc(${({ theme }) => theme.rootSpace} * 2.5);
`
