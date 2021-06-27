import styled from 'styled-components'

export const Section = styled.section`
  padding: 20px 20px 36px;
  margin-bottom: -110px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const Items = styled.section`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
  justify-content: center;
`

export const Item = styled.span`
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 5px 5px ${({ theme }) => theme.colors.peach};

  h3 {
    text-align: start;
  }

  p {
    text-align: end;
  }

  &:hover {
    box-shadow: 5px 5px ${({ theme }) => theme.colors.blueviolet};

    h3 {
      color: ${({ theme }) => theme.colors.violet};
    }

    span {
      background-color: ${({ theme }) => theme.colors.softviolet};
    }
  }
`

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 32px;
`

export const Button = styled.span`
  background-color: ${({ theme }) => theme.colors.mistyrose};
  padding: 10px 0;
`

export const Link = styled.a``
