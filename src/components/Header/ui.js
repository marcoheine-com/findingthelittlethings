import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.mistyrose};
`

export const HeaderContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 calc(${({ theme }) => theme.rootSpace} * 2.5);
`

export const Nav = styled.ul`
  display: flex;
  gap: calc(${({ theme }) => theme.rootSpace} * 3);
  list-style-type: none;
`
