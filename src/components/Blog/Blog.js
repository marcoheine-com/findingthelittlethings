import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as ui from './ui'

export const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)
  return (
    <ui.Background>
      <ui.Container>
        <h2>Blog</h2>
        {data?.allContentfulBlogPost?.edges?.map((edge) => {
          const { title, author, dateAndTime, slug } = edge.node
          return (
            <React.Fragment key={edge.node.id}>
              <h4>{title}</h4>
              <span>{author}</span>
              <time>{dateAndTime}</time>
              <Link to={slug}>Read blog post</Link>
            </React.Fragment>
          )
        })}
        <ui.Link>
          <Link to="/blog">all articles</Link>
        </ui.Link>
      </ui.Container>
    </ui.Background>
  )
}
