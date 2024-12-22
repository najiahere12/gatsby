import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const HomePage = ({ data }) => (
  <>
    <SEO />
    <main>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
    </main>
  </>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
export default HomePage
