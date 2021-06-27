import styled from 'styled-components'
import '@fontsource/recursive/variable-full.css'

export const Header = styled.header`
  background-image: url(./header-background.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  position: relative;
`
export const RightConfetti = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(./RightConfetti.svg);
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
  background-image: url(./LeftConfetti.svg);
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

export const HeaderContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 calc(${({ theme }) => theme.rootSpace} * 2.5);
  position: relative;
  z-index: 2;
`

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: 'RecursiveVariable';
  font-variation-settings: 'MONO' 1, 'CASL' 1, 'slnt' 0, 'CRSV' 0.5;
  font-weight: 700;
  gap: 40px;
  list-style-type: none;
  text-transform: uppercase;
  margin: 0;
  padding: 32px 0 14px 0;
`
