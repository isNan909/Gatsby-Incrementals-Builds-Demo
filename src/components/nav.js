import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav>
    <Link
      to="/"
      style={{
        color: `purple`,
        textDecoration: `none`,
      }}
    >
      Page One
    </Link>
    <Link
      to="/page-2"
      style={{
        color: `purple`,
        textDecoration: `none`,
      }}
    >
      Page Two
    </Link>
    <Link
      to="/page-3"
      style={{
        color: `purple`,
        textDecoration: `none`,
      }}
    >
      Page Three
    </Link>
    <Link
      to="/page-4"
      style={{
        color: `purple`,
        textDecoration: `none`,
      }}
    >
      Page Four
    </Link>
    <Link
      to="/page-5"
      style={{
        color: `purple`,
        textDecoration: `none`,
      }}
    >
      Page Five
    </Link>
  </nav>
)

export default Nav
