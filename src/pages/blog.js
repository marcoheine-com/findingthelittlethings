import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../styles/Layout'
import styled from 'styled-components'

const Container = styled.section`
  padding: 20px calc(${({ theme }) => theme.rootSpace} * 2.5);
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h2>Blog Posts:</h2>
        {data.allContentfulBlogPost.edges.map((edge) => (
          <React.Fragment key={edge.node.id}>
            <h3>{edge.node.title}</h3>
            <span>{edge.node.author}</span>
            <time>{edge.node.dateAndTime}</time>
            <Link to={edge.node.slug}>Read blog post</Link>
          </React.Fragment>
        ))}
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
        }
      }
    }
  }
`
