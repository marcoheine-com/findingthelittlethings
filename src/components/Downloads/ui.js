import styled from 'styled-components'

export const Container = styled.section`
  background-image: url(./Download-svg.svg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 100px 20px 120px;
  max-width: 1088px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 180px));
  justify-content: center;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
`
