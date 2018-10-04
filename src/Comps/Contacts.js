import React, { Component } from 'react'

import Contact from './Contact'

class Contacts extends Component {
  // the constructor() is a method that runs when the component mounts
  // can be used for init something
  // if you dont need to init anything, you can go without it

  // constructor() {
  //   super();

  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: 'john doe',
  //         email: 'joe@gmail.com',
  //         phone: '555-555-5555'
  //       },
  //       {
  //         id: 2,
  //         name: 'karen william',
  //         email: 'kwilliam@gmail.com',
  //         phone: '999-999-9999'
  //       },
  //       {
  //         id: 3,
  //         name: 'henry janson',
  //         email: 'henry@gmail.com',
  //         phone: '333-333-3333'
  //       }
  //     ]
  //   }
  // }


  // here's how to run state without constructor
state = {
      contacts: [
        {
          id: 1,
          name: 'john doe',
          email: 'joe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'karen william',
          email: 'kwilliam@gmail.com',
          phone: '999-999-9999'
        },
        {
          id: 3,
          name: 'henry janson',
          email: 'henry@gmail.com',
          phone: '333-333-3333'
        }
      ]
    }

    // after we gt the user id, we pass it to the func
    deleteContact = (id) => {
      const {contacts} = this.state
      // we cant use setState alone because we're removing something

      const newContacts = contacts.filter(contact =>
        contact.id != id
        )

        this.setState({
          contacts: newContacts
        })
    }

  render() {
    const {contacts} = this.state

    return (
      <React.Fragment>
        {contacts.map(contact => 
        // we need the contact id in order to be able to remove it
        // thats why we use bind
         <Contact 
            key = {contact.id}
            contact = {contact}
            deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
         />
        )}
      </React.Fragment>
    )
  }
}

export default Contacts
