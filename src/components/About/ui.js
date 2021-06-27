import styled from 'styled-components'

export const Background = styled.section`
  background-image: url(./about-background.svg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

export const Container = styled.section`
  display: grid;
  padding: 240px 20px 120px;
  max-width: 780px;
  position: relative;

  @media (min-width: 768px) {
    padding: 130px 20px 120px;
    gap: 20px;
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

  p {
    line-height: 1.5em;
  }
`
export const RightConfetti = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(./AboutRightConfetti.svg);
  display: none;
  height: 100%;
  right: -50%;
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
  background-image: url(./AboutLeftConfetti.svg);
  display: none;
  height: 100%;
  left: -50%;
  position: absolute;
  top: 0;
  width: 50%;

  @media (min-width: 1000px) {
    display: block;
  }
`
export const Headline = styled.h2`
  text-align: center;
  @media (min-width: 540px) {
    grid-row-start: 1;
    grid-column-start: 2;
    text-align: left;
  }
`

export const Image = styled.div`
  grid-row-start: 2;
  min-width: 180px;
  justify-self: center;
  @media (min-width: 540px) {
    grid-row-start: 2;
    grid-column-start: 1;
  }
`

export const Content = styled.div`
  @media (min-width: 540px) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`

export const LinkList = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 40px;
`
