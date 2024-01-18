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
          footerContent
          url
        }
      }
    }
    allContentfulLinks {
      edges {
        node {
          text
          url
          icon
        }
      }
    }
  }
`)

  return (
    <>
      <div className="footer-container">
        <div className="footer">
          {data.allContentfulFooter.edges.map((edge) => {
            return (
              <div key={edge.node.id}>
                <p className="footer-content"><Link to={edge.node.url}>{edge.node.footerContent}</Link></p>
              </div>
            );
          })}
        </div>
        <div className="socials">
          {data.allContentfulLinks.edges.map(edge => {
            return (
              <div className="link mb-2" key={edge.node.text}>
                <a
                  href={edge.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  {" "}
                  <span
                    className="pe-2"
                    dangerouslySetInnerHTML={{ __html: edge.node.icon }}
                  ></span>
                  {edge.node.text}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Footer
