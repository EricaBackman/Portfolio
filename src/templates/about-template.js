import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import '../css/style.css';
import { Helmet } from "react-helmet";
import { MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"

//sidans namn blir portfolio efter namnet på javascript-filen
const AboutPage = (contentfulPage) => {

  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      [MARKS.ITALIC]: (text) => <i className="italic">{text}</i>
    },
  };

  return(
  <Layout>
    <Helmet>
      <meta name="title" content="About me" />
      <meta name="description" content="This is a page about me, my accomplishments in my carrier and my skills, both soft and hard." />
    </Helmet>
    <div className="home-container">
    <p className="content content-home">{renderRichText(contentfulPage.content, richTextConfig)}</p>
    </div>
    <GatsbyImage
    image={contentfulPage.image.gatsbyImage}
    alt={contentfulPage.title}>

    </GatsbyImage>
  </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default AboutPage
