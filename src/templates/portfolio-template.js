import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import '../css/style.css'
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"

//sidans namn blir portfolio efter namnet på javascript-filen
const PortfolioPage = (contentfulPage) => {

  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      [MARKS.ITALIC]: (text) => <i className="italic">{text}</i>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="ul">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    },
  };

  const data = useStaticQuery(graphql`
  query {
    allContentfulCourses {
      edges {
        node {
          id
          title
          content {
            raw
          }
          image {
            gatsbyImage(width: 1000)
          }
          slug
        }
      }
    }
  }
`)
  return (
    <Layout>
      <Helmet>
        <meta name="title" content={contentfulPage.title} />
        <meta name="description" content={contentfulPage.content} />
      </Helmet>
      <div className="portfolio-container">
        <h1 className="portfolio-h1">{contentfulPage.title}</h1>
        <div className="portfolio-itemlist">
          <ul className="posts">
            {data.allContentfulCourses.edges.map((edge) => {
              return (
                <Link className="port-link" to={`/portfolio/${edge.node.slug}`}>
                  <li className="list-items" key={edge.node.id}>
                    <h2>{edge.node.title.toUpperCase()}</h2>
                    <GatsbyImage className="portfolio-image"
                      image={edge.node.image.gatsbyImage}
                      alt={edge.node.title}
                    >
                    </GatsbyImage>
                    <div className="list-wrapper">
                      <p className="content content-home list-description">{renderRichText(edge.node.content, richTextConfig)}</p>
                    </div>
                  </li>
                </Link>

              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioPage
