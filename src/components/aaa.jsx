import React, { Component } from "react"
import { nanoid } from 'nanoid'
// import Form from "./ContactForm/ContactForm"

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }  

  formSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState((state) => ({
      contacts: [newContact, ...state.contacts]
    }))
    this.reset();
  }

  filterContact = e => {
    this.setState({filter: e.currentTarget.value})
    console.log(this.state)
  }

  filterAllContacts = (contacts, filter) => {
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())  
      )
    )
  }

  // deleteContact = (id) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contact.filter(contact => contact.id !== id),
  //   }))
  // }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContact = this.filterAllContacts(contacts, filter);
    return (
      <>
        <h1>Phone book</h1>
        <form onSubmit={this.formSubmit}>
          <label> Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
          <label>Find contacts by name
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={this.filterContact}
            />
          </label>
        <h2>Contacts</h2>
        <ul contacts={filteredContact}
            >

          {contacts.map(({id, name, number}) => (
            <li key = {id}>
              <p>{name}</p>
              <p>{number}</p>

            </li>
          ))}
        </ul>

      </>
    )
  }
};

export default App;