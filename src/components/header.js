import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`
    }}
  >
    <div
      style={{
        margin: `0`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
      }}
    >
      <Link
        to="/"
        style={{
          color: `palevioletred`,
          textDecoration: `none`,
          marginRight: `4vw`
        }}
      >
        Home
      </Link>
      <Link
        to="/about/"
        style={{
          color: `palevioletred`,
          textDecoration: `none`,
          marginRight: `4vw`
        }}
      >
        About
      </Link>
      <Link
        to="/contact/"
        style={{
          color: `palevioletred`,
          textDecoration: `none`
        }}
      >
        Contact
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
