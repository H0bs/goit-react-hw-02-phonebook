import React, { Component } from "react"
import Form from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import {Filter} from "./Filter/Filter"

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  addContact = (newContact) => {
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`)
    } else {
      this.setState(prevState => {
        return { contacts: [newContact, ...prevState.contacts] }
      })
    }  
  }

  filterContactChange = e => {
    this.setState({ filter: e.target.value })
  }

  filterContact = (contacts, filter) => {
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const { contacts, filter } = this.state;
    const filtered = this.filterContact(contacts, filter);
    return (
      <>
        <h1>Phone book</h1>
          <Form onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={this.filterContactChange}
        />
        <ContactList
          contacts={filtered}
        />
      </>
    )
}  
}

export default App;