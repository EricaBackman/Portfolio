import * as React from "react"

import Layout from "../components/layout"

//i dev mode overridas denna sida av en inbyggd 404-sida
const NotFoundPage = (contentfulPage) => (
  <Layout>
    <h1>{contentfulPage.title.toUpperCase()}</h1>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
