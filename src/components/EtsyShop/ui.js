import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
  padding: 56px 20px 36px;
  text-align: center;
`

export const Items = styled.section`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
  justify-content: center;
`

export const Item = styled.span`
  align-items: center;
  background-color: #fff;
  box-shadow: 5px 5px ${({ theme }) => theme.colors.peach};
  display: flex;
  flex-direction: column;

  animation: ${({ fadeInDirection }) =>
      fadeInDirection === 'right' ? fadeInRight : fadeInLeft}
    0.5s linear;

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

const fadeInLeft = keyframes`
    0% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(0px);
    }
  `

const fadeInRight = keyframes`
  0% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0px);
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

export const MenuButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`

export const Buttongroup = styled.span`
  display: flex;
`
