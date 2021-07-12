## finding the little things

This is the website for the artist findingthelittlethings.

### TODO:

- [ ] style blog post
- [ ] add content to faq, privacy policy, legal notice
- [ ] add custom 404
- [ ] add slider for etsy images
- [ ] add email forwarding
- [ ] add sentry
- [ ] add missing footer links
- [x] add favicon
- [x] style portfolio projects
- [x] add localization
- [x] add sitemap
- [x] add meta description
- [x] size insta images properly
- [x] add plausible analytics
- [x] implement google search console

It's build with [Gatsby](https://www.gatsbyjs.com/) as site generator and [Contentful](https://www.contentful.com/) as headless CMS. It is hosted on [Netlify](https://www.netlify.com/).

### Get started

Clone the project from github:

```
git clone git@github.com:mkuehb/findingthelittlethings.git
```

Install the dependancies:

```
npm install
```

Start the development server:

```
gatsby develop
```

### Developing

Everything is organised in React components. Every component has three folders. An `index.js` where we export the component. An `component.js` where the main code for the component can be found. And an `ui.js` where all the styling is located.

```
/components
    /Header
        index.js
        ui.js
        header.js
```

For styling we are using [styled components](https://styled-components.com/).

Every styled component is declared inside the `ui.js`.

```javascript
import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
```

All styled components for a component are imported then like this:

```javascript
import * as ui from './ui.js'
```

Then they can be used like this:

```javascript
<ui.MainContainer />
```

### Deployment

Deploy to production via netlify: Every push to master is automatically deployed to netlify. Once that happens, we have access to a preview url. If everything seems good, we can publish the deploy in the netlfy UI.
