import styled from 'styled-components'

export const Background = styled.section`
  background-color: ${({ theme }) => theme.colors.mistyrose};
`

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  gap: calc(${({ theme }) => theme.rootSpace} * 11.25);
  padding: 56px;
  position: relative;
  max-width: 780px;
  margin: 0 auto;
`

export const RightConfetti = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(footer-right-confetti.svg);
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
  background-image: url(footer-left-confetti.svg);
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

export const List = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
  position: relative;
  z-index: 2;

  h3 {
    margin: 0;
  }

  li:first-of-type {
    margin-bottom: 24px;
  }

  li {
    margin-bottom: 16px;
  }
`
