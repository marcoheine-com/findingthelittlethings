import * as React from 'react'
import { Layout } from '../styles/Layout'
import { EtsyShop } from '../components/EtsyShop'
import { About } from '../components/About'
import { CustomIllustrations } from '../components/CustomIllustrations'
import { Portfolio } from '../components/Portfolio'
import { WorkWithMe } from '../components/WorkWithMe'
import { Downloads } from '../components/Downloads'
import { InstaFeed } from '../components/InstaFeed'

const IndexPage = () => {
  return (
    <Layout>
      <EtsyShop />
      <CustomIllustrations />
      <About />
      <Portfolio />
      <WorkWithMe />
      <Downloads />
      <InstaFeed />
    </Layout>
  )
}

export default IndexPage
