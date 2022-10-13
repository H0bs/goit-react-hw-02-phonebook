import React, { Component } from "react"
import { nanoid } from 'nanoid'
// import Form from "./ContactForm/ContactForm"

class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  nameId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }  

  formSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const newContact = {
      id: nanoid(),
      name,
    }
    this.setState((state) => ({
      contacts: [newContact, ...state.contacts]
    }))
    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
    })
  }

  render() {
    
    return (
      <>
        <h1>Phone book</h1>
        <form onSubmit={this.formSubmit}>
          <label> Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key = {contact.id}>
              <p>{contact.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }
};

export default App;