import styled from 'styled-components'
import '@fontsource/recursive/variable-full.css'

export const Header = styled.header`
  background-image: url(header-background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
`

export const HeaderContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px 32px 20px;
  position: relative;
  z-index: 2;

  h1 {
    text-align: center;
  }

  svg {
    width: 160px;
    height: 160px;
  }
`

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.softviolet};
`

export const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 24px 0;
  font-family: 'RecursiveVariable';
  font-variation-settings: 'MONO' 1, 'CASL' 1, 'slnt' 0, 'CRSV' 0.5;
  font-weight: 700;
  li {
    padding-bottom: 32px;
    text-align: center;
  }
`
