require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl =
  process.env.URL || `https://www.findingthetlittlethings.com`

module.exports = {
  siteMetadata: {
    title: 'findingthelittlethings',
    siteUrl: 'https://www.findingthetlittlethings.com',
    description:
      'Finding the Little Things started as a small Instagram page in August 2020 for me, Laura, to share my designs and connect to others. I grew up in an artists family, always surrounded by paint brushes, chalks and crayons. When I found myself with a lot more free time at hand last year, I decided to be more serious about my drawing again and really dive into digital drawing. So I started sharing on Instagram, growing a small community, working on my first paid projects and soon opened my Etsy shop. Finding the Little Things is a way for me to capture the small things that bring me joy and make life beautiful. My art is colourful, whimsical, a bit magical, sometimes nostalgic and generally optimistic. Everything that I look for in everyday life. If you want to see more of me and my work, go visit my Etsy store or follow me on Instagram. And make sure to say Hi, I always love to chat!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-etsy',
      options: {
        api_key: process.env.GATSBY_ETSY_API_KEY,
        shop_id: 'FindingLittleThings',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.GATSBY_INSTA_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `www.findingthelittlethings.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
  ],
}
