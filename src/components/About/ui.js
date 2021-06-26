import styled from 'styled-components'

export const Background = styled.section`
  background-color: ${({ theme }) => theme.colors.mistyrose};
`

export const Container = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px 20px 36px;
`

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`
