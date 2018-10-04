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

    state = {
      showContactInfo : false
    }

    // you cant use (this) in custome made methods / functions

    // we can use arrow functions to use (this) keyword
    onShowClick = () => {
      this.setState({
        // negate (toggle) the state
        showContactInfo: !this.state.showContactInfo
      })
    }

    onDeleteClick = () => {
      this.props.deleteClickHandler()
    }


  render() {
    //   desetructuring
    const {name, email, phone} = this.props.contact
    const {showContactInfo} = this.state
    return (
      <div className="card card-body mb-3">
        {/* this refers to the class */}
        {/* REMEMBER! dont call the function inside the event :D */}
        <h4>{name} <i
        onClick={this.onShowClick}
        className="fas fa-sort-down"
        style={{cursor: "pointer"}}
        ></i>
        <i className="fas fa-times"
        style={{cursor: "pointer", float: 'right', color: 'red'}}
        onClick={this.onDeleteClick}
        ></i>
        </h4>

        {/* conditional render */}
        {showContactInfo? 
          // if true, then show the list
        <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
        </ul>
          : 
          // if false, then render nothing
          null}
      </div>
    )
  }
}

// prop types
Contact.PropTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact
