import styled from 'styled-components'
import '@fontsource/recursive/variable-full.css'
import HeaderSVG from '../../assets/header-background.svg'

export const Header = styled.header`
  background-image: url(${HeaderSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
`
export const RightConfetti = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(RightConfetti.svg);
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
  background-image: url(LeftConfetti.svg);
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

export const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.peach};
  display: block;
  position: fixed;
  z-index: 3;
  width: 100%;
  @media (min-width: 768px) {
    background-color: inherit;
    display: block;
    position: relative;
    height: 100%;
  }
`

export const MenuToggle = styled.button`
  background-color: ${({ theme }) => theme.colors.peach};
  border: none;
  cursor: pointer;
  font-family: 'RecursiveVariable';
  font-size: 16px;
  font-variation-settings: 'MONO' 1, 'CASL' 0, 'slnt' 0, 'CRSV' 0.5;
  font-weight: 400;
  height: 48px;
  text-transform: uppercase;
  width: 100%;
  span {
    margin-right: 8px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const Nav = styled.div`
  display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  font-family: 'RecursiveVariable';
  font-variation-settings: 'MONO' 1, 'CASL' 1, 'slnt' 0, 'CRSV' 0.5;
  font-weight: 700;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      display: flex;
      gap: 40px;
    }
  }
  text-align: center;
  text-transform: uppercase;
  padding: 32px 0 14px 0;

  li {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 40px;

    li {
      margin-bottom: 0px;
    }
  }
`

export const HeaderContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px 64px 20px;
  position: relative;
  transform: translateY(48px);
  z-index: 1;

  h1 {
    text-align: center;
  }
`
