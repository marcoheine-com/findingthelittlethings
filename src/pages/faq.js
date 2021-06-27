import * as React from 'react'
import { Layout } from '../styles/Layout'
import styled from 'styled-components'

const Container = styled.section`
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
  margin: 0 auto;

  h2 {
    text-align: center;
  }
`

const FAQPage = () => {
  return (
    <Layout>
      <Container>
        <h2>FAQ:</h2>
      </Container>
    </Layout>
  )
}

export default FAQPage
