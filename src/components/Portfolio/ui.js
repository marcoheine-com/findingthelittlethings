import styled from 'styled-components'

export const Container = styled.section`
  align-items: center;
  display: flex;
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
  flex-direction: column;
`
