import * as React from "react"
import Layout from "../components/layout"
import '../css/style.css'

//react-component
//alla componenter under /src/pages blir automatiskt sidor
//sidans namn = namnet på javascript-filen (dock - index.js = sajtens första sida)
const IndexPage = (contentfulPage) => (
  <Layout>
    <h1>{contentfulPage.title.toUpperCase()}</h1>
  </Layout>
)
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage;
