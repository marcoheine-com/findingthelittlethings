import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Layout } from '../styles/Layout'
import * as ui from './ui'

const BlogPostTemplate = ({ data }) => {
  const { title, author, dateAndTime, body } = data.contentfulBlogPost
  return (
    <Layout>
      <ui.Container>
        <h2>{title}</h2>
        <time>{dateAndTime}</time>
        <span>{author}</span>
        {renderRichText(body)}
      </ui.Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author
      title
      dateAndTime(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`
