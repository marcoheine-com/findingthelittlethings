import styled from 'styled-components'

export const Container = styled.div`
  max-width: 780px;
  margin-right: auto;
  margin-left: auto;
  padding: 56px 20px 0px;
  margin-bottom: -120px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  p {
    line-height: 1.5em;
  }
`

export const CustomIllustrationHeader = styled.div`
  padding-bottom: 40px;
`

export const CustomIllustrationItem = styled.div`
  display: grid;
  gap: 20px;
  padding-bottom: 40px;
`
export const Image = styled.div`
  min-width: 180px;
  justify-self: center;
`
export const Content = styled.div`
  @media (min-width: 540px) {
    grid-column-start: 2;
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
