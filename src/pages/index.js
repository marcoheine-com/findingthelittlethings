import * as React from 'react'
import { Layout } from '../styles/Layout'
import { EtsyShop } from '../components/EtsyShop'
import { About } from '../components/About'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const IndexPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <EtsyShop />
        <About />
      </Layout>
    </QueryClientProvider>
  )
}

export default IndexPage
