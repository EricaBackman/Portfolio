import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from "gatsby"
import '../css/style.css'

function Header() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulHeader {
      edges {
        node {
          id
          profilePic {
            gatsbyImage(width: 2000)
          }
          heroTitle
          heroTitleSecond
          heroTitleThird
          presentationTitle
          presentation {
            presentation
          }
          signature
        }
      }
    }
  }
`)
  return (
    <>
    {data.allContentfulHeader.edges.map((edge) => {
      return (
        <div key={edge.node.id} className="header-container">
          <div className="hero-container">
          <GatsbyImage className="hero-image"
          image={edge.node.profilePic.gatsbyImage}
          alt={edge.node.heroTitle}
          >
          </GatsbyImage>
          <div className="hero-titles">
              <h1 className="title-first" >{edge.node.heroTitle}</h1>
              <h1 className="title-second">{edge.node.heroTitleSecond}</h1>
            <h2 className="title-third">{edge.node.heroTitleThird}</h2>
          </div>
          </div>
          <div className="presentation-container">
            <h2 className="presentation-title">{edge.node.presentationTitle}</h2>
            <p className="letter">{edge.node.presentation.presentation}</p>
            <h3 className="signature">{edge.node.signature}</h3>
          </div>
        </div>
      );
    })}
    </>
  )
}

export default Header
