import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import "../css/style.css"
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text"


export const query = graphql`
  query ($slug: String!) {
    contentfulCourses(slug: { eq: $slug }) {
      title
      image {
        gatsbyImage(width: 2000)
        }
      description {
        description
      }
      content {
        raw
      }
      url
      button
      }
    }

`;

const portfolioItem = (props) => {

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

  return (
    <Layout>
      <Helmet>
      <meta name="title" content={props.data.contentfulCourses.title} />
      <meta name="description" content={props.data.contentfulCourses.description.description} />
    </Helmet>
      <div className="item-container">
        <div className="item-h1">
        <h1 className="item-header">{props.data.contentfulCourses.title}</h1>
        </div>
          <GatsbyImage
            className="item-image"
            image={props.data.contentfulCourses.image.gatsbyImage}
            alt={props.data.contentfulCourses.title}
          />
          <div>
          <p className="content content-item">{props.data.contentfulCourses.description.description.toUpperCase()}</p>
          </div>
          <div className="list-wrapper">
          <p className="content content-home">{renderRichText(props.data.contentfulCourses.content, richTextConfig)}</p>
          </div>
          <button type="button" className="button item-button" onClick={() => window.location.href = props.data.contentfulCourses.url}>{props.data.contentfulCourses.button.toUpperCase()}</button>
      </div>
    </Layout>
  );
};

export default portfolioItem;
