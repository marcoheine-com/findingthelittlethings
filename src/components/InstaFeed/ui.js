import styled from 'styled-components'

export const Container = styled.section`
  padding: 20px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
  gap: 6px;
  justify-content: center;
`
