import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'
// import {Link} from "gatsby";
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => (
    <>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )


export default Layout
