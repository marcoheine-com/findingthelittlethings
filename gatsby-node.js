const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogResults = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  const blogPosts = blogResults.data.allContentfulBlogPost.edges

  blogPosts.forEach((post) => {
    createPage({
      path: post.node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: post.node.slug,
      },
    })
  })

  const portfolioResults = await graphql(`
    query {
      allContentfulPortfolioPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const portfolioPosts =
    portfolioResults.data.allContentfulPortfolioPost.edges

  portfolioPosts.forEach((post) => {
    createPage({
      path: post.node.slug,
      component: path.resolve(`./src/templates/portfolio-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: post.node.slug,
      },
    })
  })
}
