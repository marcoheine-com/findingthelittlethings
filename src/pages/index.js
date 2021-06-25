import * as React from 'react'
import { Layout } from '../styles/Layout'
import { EtsyShop } from '../components/EtsyShop'
import { About } from '../components/About'
import { CustomIllustrations } from '../components/CustomIllustrations'
import { Portfolio } from '../components/Portfolio'
import { WorkWithMe } from '../components/WorkWithMe'
import { Blog } from '../components/Blog'
import { Downloads } from '../components/Downloads'
import { InstaFeed } from '../components/InstaFeed'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const IndexPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <EtsyShop />
        <CustomIllustrations />
        <About />
        <Portfolio />
        <WorkWithMe />
        <Blog />
        <Downloads />
        <InstaFeed />
      </Layout>
    </QueryClientProvider>
  )
}

export default IndexPage
