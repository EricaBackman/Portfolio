import * as React from 'react'
import '../css/style.css'
import { Link } from "gatsby"
import useNavigation from "../hooks/use.navigation"

function Navbar(contentfulPage) {
const navigation = useNavigation();
  return (
    <>
    <nav class="nav-container">
        <Link to="/" className="nav-logo">E.B</Link>
        <ul className="nav-list">
        {navigation.allContentfulPage.edges.map((nav) => {
          return (
            <Link className="nav-links" to={nav.node.url}>
            <li className="nav-items" key={nav.node.id}>
              {nav.node.title}
            </li>
            </Link>
          );
        })}
        </ul>
        <div class="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </>
  )
}

export default Navbar
