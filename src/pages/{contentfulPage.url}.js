import React from "react";
import { graphql } from "gatsby";
import AboutTemplate from "../templates/about-template";
import HomeTemplate from "../templates/home-template";
import PortfolioTemplate from "../templates/portfolio-template";
import NotFoundTemplate from "../templates/404-template";
import ContactTemplate from "../templates/contact-template";

const Page = (props) => {
  const {data} = props;
  const {contentfulPage} = data;
  const getTemplate = (contentfulPage) => {
    switch (contentfulPage.template) {
      case 'about':
        return <AboutTemplate {...contentfulPage} />;
      case 'portfolio':
        return <PortfolioTemplate {...contentfulPage} />;
      case '404':
        return <NotFoundTemplate {...contentfulPage} />;
      case 'contact':
        return <ContactTemplate {...contentfulPage} />;
      default:
        return <HomeTemplate {...contentfulPage} />;
    }
  };
  return (<>{getTemplate(contentfulPage)}</>);
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      content{
        raw
      }
      image {
        gatsbyImage(width: 2000)
      }
      template
      button
    }
  }
`;

export default Page;
