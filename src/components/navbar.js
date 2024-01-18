import * as React from 'react'
import '../css/style.css'
import { Link } from "gatsby"
import useNavigation from "../hooks/use.navigation"
import { useState, useEffect } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.querySelectorAll('.nav-list').forEach((n) =>
    n.addEventListener('click', () => {
      setMenuOpen(false);
    })
    );
  }, [])

  const navigation = useNavigation();
  return (
    <div className="cont">
      <div className="nav-container">
        <nav className="navbar">
          <Link to="/" className="nav-logo">E.B</Link>

            <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
              {navigation.allContentfulPage.edges.map((nav) => {
                return (
                  <Link className="nav-links" to={nav.node.url}>
                    <li className="nav-item" key={nav.node.id}>
                      {nav.node.title}
                    </li>
                  </Link>
                );
              })}
            </ul>

          <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
