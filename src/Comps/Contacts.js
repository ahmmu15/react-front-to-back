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

  render() {
    const {contacts} = this.state

    return (
      <div>
        {contacts.map(contact => 
         <Contact 
            key = {contact.id}
            name = {contact.name}
            email = {contact.email}
            phone = {contact.phone}
         />
        )}
      </div>
    )
  }
}

export default Contacts
