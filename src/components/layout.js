import * as React from "react"
import '../css/style.css'
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"
import "bootstrap-icons/font/bootstrap-icons.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
        title
        description
      }
    }
  }
`)
return (
    <>
    <Helmet>
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="title" content={data.site.siteMetadata.title} />
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
