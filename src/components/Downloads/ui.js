import styled from 'styled-components'

export const Container = styled.section`
  background-image: url(./Download-svg.svg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 100px 20px 120px;
  max-width: 1150px;
  margin: 0 auto;
  position: relative;
  h2 {
    text-align: center;
  }
`

export const RightConfetti = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(./download-right-confetti.svg);
  background-position: right;
  display: none;
  height: 100%;
  right: 0;
  top: 0;
  position: absolute;
  width: 50%;

  @media (min-width: 1000px) {
    display: block;
  }
`

export const LeftConfetti = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(./download-left-confetti.svg);
  display: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;

  @media (min-width: 1000px) {
    display: block;
  }
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 180px));
  gap: 20px;
  justify-content: center;
  position: relative;
  z-index: 2;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    a {
      color: ${({ theme }) => theme.colors.violet};
    }
  }
`

export const Text = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
`
