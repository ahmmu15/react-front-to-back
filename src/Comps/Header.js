import React from 'react'

// proptypes (impt) if ur using th vscode plugin
import PropTypes from 'prop-types'


// in functional comps:
// we access props via this.props

const Header = (props) => {
    // desetructuring
    const {branding} = props 
  return (
    <div>
      <h1 style={{color: "red", fontSize: "50px"}}>{branding}</h1>
      <h1 style={headingStyle}>Testing Style</h1>
    </div>
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
const headingStyle = {
    color: 'blue',
    fontSize: '100px'
}

export default Header