import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../css/style.css"

function Footer() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulFooter {
      edges {
        node {
          id
          content
          socials
        }
      }
    }
  }
`)
  return (
    <>
      {data.allContentfulFooter.edges.map((edge) => {
        return (
          <div key={edge.node.id} className="footer-container">
            <div className="footer-menu">
              <p className="content">{edge.node.content}</p>
            </div>
            <div className="socials-menu">
              <Link to="#">{edge.node.socials}</Link>
            </div>

            {/* <p>renderRichText({edge.node.content.raw}, options)</p> */}

          </div>
        );
      })}
    </>
  )
}

export default Footer
