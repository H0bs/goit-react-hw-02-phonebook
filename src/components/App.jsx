import React, { Component } from "react"
import { nanoid } from 'nanoid'
// import Form from "./ContactForm/ContactForm"

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }

  nameId = nanoid();
  numberId = nanoid();

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

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { contacts, name, number } = this.state;
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
              id={this.nameId}
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
              id={this.numberId}
              //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key = {contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }
};

export default App;