import React, { Component } from "react"
import { nanoid } from 'nanoid'

class Form extends Component {
  state = {
    name: '',
    number: '',
  } 
  
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.props.onSubmit(contact);
    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label> Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>Phone number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    )
  }
}

export default Form;