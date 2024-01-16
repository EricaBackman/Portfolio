import { graphql, useStaticQuery } from "gatsby"

function useNavigation() {
  const {allContentfulPage} = useStaticQuery(graphql`
  query {
    allContentfulPage(sort: {url: ASC}) {
      edges {
        node {
          id
          title
          url
        }
      }
    }
  }
`)
const filteredData = allContentfulPage.edges.filter(
  ({ node }) => node.url !== "/404"
)

return { allContentfulPage: { edges: filteredData } }
}

export default useNavigation;
