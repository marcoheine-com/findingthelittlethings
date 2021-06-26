import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.softviolet};
  background-image: url(./header-background.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  position: relative;
`
export const RightConfetti = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(./Right-confetti.svg);
  width: 100%;
  height: 100%;
  @media (min-width: 1000px) {
    display: block;
  }
`

export const HeaderContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 calc(${({ theme }) => theme.rootSpace} * 2.5);
`

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: calc(${({ theme }) => theme.rootSpace} * 3);
  list-style-type: none;
  text-transform: uppercase;
`
