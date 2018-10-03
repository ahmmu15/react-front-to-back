import React, { Component } from 'react'
import './contact.css'

// proptypes
import PropTypes from 'prop-types'


// in class comps:
// we access props via this.props

class Contact extends Component {

    // you can place proptypes here as well
    // static PropTypes = {
    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired,
    //     phone: PropTypes.string.isRequired
    // }


  render() {
    //   desetructuring
    const {name, email, phone} = this.props
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    )
  }
}

// prop types
Contact.PropTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default Contact
