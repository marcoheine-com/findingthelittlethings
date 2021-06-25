import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.softviolet};
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
  text-align: center;
`

export const Items = styled.section`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const Item = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`
