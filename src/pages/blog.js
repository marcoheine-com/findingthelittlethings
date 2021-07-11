import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../styles/Layout'
import styled from 'styled-components'
import { useLanguage } from '../context/languageContext'
import { LANGUAGES } from '../constants'

const Container = styled.section`
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
`

const BlogItems = ({ items }) => {
  const { currentLanguage } = useLanguage()

  return items
    .filter((edge) => edge.node.node_locale === currentLanguage)
    .map((edge) => (
      <React.Fragment key={edge.node.id}>
        <h3>{edge.node.title}</h3>
        <span>{edge.node.author}</span>
        <time>{edge.node.dateAndTime}</time>
        <Link to={edge.node.slug}>
          {currentLanguage === LANGUAGES.en
            ? 'Read portfolio post'
            : 'Blog post lesen'}
        </Link>
      </React.Fragment>
    ))
}

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h2>Blog Posts:</h2>
        <BlogItems items={data.allContentfulBlogPost.edges} />
      </Container>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          author
          dateAndTime(formatString: "MMMM Do, YYYY")
          node_locale
        }
      }
    }
  }
`
