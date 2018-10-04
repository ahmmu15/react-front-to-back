import React from 'react'

// proptypes (impt) if ur using th vscode plugin
import PropTypes from 'prop-types'


// in functional comps:
// we access props via this.props

const Header = (props) => {
    // desetructuring
    const {branding} = props 
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>

            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

// default props
Header.defaultProps = {
    branding: "My App"
}

// prop types
Header.PropTypes = {
    branding: PropTypes.string.isRequired
}

// stylying
// const headingStyle = {
//     color: 'blue',
//     fontSize: '100px'
// }

export default Header