import * as React from "react"
import Layout from "../components/layout"
import '../css/style.css'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactPage = (contentfulPage) => {

  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      [MARKS.ITALIC]: (text) => <i className="italic">{text}</i>
    },
  }
  const data = useStaticQuery(graphql`
  query {
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
    <Layout>
      <Helmet>
        <meta name="title" content={contentfulPage.title} />
        <meta name="description" content="This is a firstpage." />
      </Helmet>
      <div className="home-container contact-container">
        <p className="content content-home content-contact">{renderRichText(contentfulPage.content, richTextConfig)}</p>
        <div className="contact-socials">
          {data.allContentfulLinks.edges.map(edge => {
            return (
              <div className="link mb-2" key={edge.node.text}>
                <a
                  href={edge.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links contact-links"
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
    </Layout>
  )
}
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default ContactPage;
