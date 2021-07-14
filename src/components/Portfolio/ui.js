import styled from 'styled-components'

export const Container = styled.section`
  align-items: center;
  display: flex;
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
  flex-direction: column;
`

export const Items = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 375px));
  column-gap: 25px;
`

export const ImageWrapper = styled.span`
  box-shadow: 5px 5px ${({ theme }) => theme.colors.peach};
`
