import styled from 'styled-components'

export const Background = styled.section`
  background-color: ${({ theme }) => theme.colors.mistyrose};
`

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  gap: calc(${({ theme }) => theme.rootSpace} * 11.25);
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`
