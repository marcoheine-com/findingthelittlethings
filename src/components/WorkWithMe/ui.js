import styled from 'styled-components'

export const Background = styled.section`
  background-color: ${({ theme }) => theme.colors.softviolet};
  background-image: url(./workWithMe-background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1000px) {
    background-size: contain;
  }
`

export const Container = styled.section`
  padding: 100px 20px 100px 20px;

  @media (min-width: 560px) {
    padding: 100px 200px 100px 100px;
    background-image: url(./WorkWithMeConfetti.svg);
    background-repeat: no-repeat;
    background-position-x: 100%;
  }

  p {
    line-height: 1.5em;
  }

  a {
    font-family: 'RecursiveVariable';
    font-variation-settings: 'MONO' 1, 'CASL' 1, 'slnt' 0, 'CRSV' 0.5;
    font-weight: 700;
    text-transform: uppercase;
    &:hover {
      color: ${({ theme }) => theme.colors.violet};
    }
  }
`
