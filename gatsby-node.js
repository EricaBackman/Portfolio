const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allContentfulCourses {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulCourses.edges.forEach((edge) => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./src/templates/portfolio-item.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
