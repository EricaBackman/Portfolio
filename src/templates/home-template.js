import * as React from "react"
import Layout from "../components/layout"
import '../css/style.css'
import { Helmet } from "react-helmet"
import { MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Link } from "gatsby";


const IndexPage = (contentfulPage) => {

  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      [MARKS.ITALIC]: (text) => <i className="italic">{text}</i>
    },
  };

  return (
    <Layout>
      <Helmet>
        <meta name="title" content={contentfulPage.title} />
        <meta name="description" content="This is a firstpage." />
      </Helmet>
      <div className="home-container">
      <p className="content content-home home">{renderRichText(contentfulPage.content, richTextConfig)}</p>
      <div className="button-container">
      <button className="button" type="button"><Link to="/portfolio">{contentfulPage.button}</Link></button>
      </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;
