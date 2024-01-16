import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import '../css/style.css'

//sidans namn blir portfolio efter namnet på javascript-filen
const PortfolioPage = (contentfulPage) => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulCourses {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            gatsbyImage(width: 1000)
          }
        }
      }
    }
  }
`)
  return(
  <Layout>
    <h1>{contentfulPage.title.toUpperCase()}</h1>
    <ul className="posts">
    {data.allContentfulCourses.edges.map((edge) => {
      return (
        <li key={edge.node.id}>
          <h2>{edge.node.title.toUpperCase()}</h2>
          <GatsbyImage
          image={edge.node.image.gatsbyImage}
          alt={edge.node.title}
          >
          </GatsbyImage>
          {/* <p>renderRichText({edge.node.content.raw}, options)</p> */}
          <p>{edge.node.description.description.toUpperCase()}</p>
        </li>
      );
    })}
    </ul>
  </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioPage
