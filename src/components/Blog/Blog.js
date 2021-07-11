import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as ui from './ui'
import { useLanguage } from '../../context/languageContext'

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
            node_locale
          }
        }
      }
    }
  `)

  const { currentLanguage } = useLanguage()

  return (
    <ui.Background id="Blog">
      <ui.Container>
        <h2>Blog</h2>
        {data?.allContentfulBlogPost?.edges
          ?.filter(
            (edge) => edge.node.node_locale === currentLanguage,
          )
          .map((edge) => {
            const { title, author, dateAndTime, slug } = edge.node
            return (
              <React.Fragment key={edge.node.id}>
                <h3>{title}</h3>
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
