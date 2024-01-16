import * as React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import '../css/style.css';

//sidans namn blir portfolio efter namnet på javascript-filen
const AboutPage = (contentfulPage) => {

  return(
  <Layout>
    <h1>{contentfulPage.title.toUpperCase()}</h1>
    {/* <GatsbyImage
    image={contentfulPage.image.gatsbyImage}
    alt={contentfulPage.title}>

    </GatsbyImage> */}
  </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default AboutPage
