import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";


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
      }
    }

`;

const portfolioItem = (props) => {
  return (
    <Layout>
      <div className="item-container">
        <h1 className="item-header">{props.data.contentfulCourses.title.toUpperCase()}</h1>
          <GatsbyImage
            className="featured"
            image={props.data.contentfulCourses.image.gatsbyImage}
            alt={props.data.contentfulCourses.title}
          />
          <p>{props.data.contentfulCourses.description.description.toUpperCase()}</p>
      </div>
    </Layout>
  );
};

export default portfolioItem;
