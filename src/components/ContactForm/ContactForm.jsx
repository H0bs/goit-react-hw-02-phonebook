import React, { Component } from "react"
import { nanoid } from 'nanoid'

class Form extends Component {
  state = {
    name: ''
  } 
  nameId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const newContact = {
      id: nanoid(),
      name,
    }
    this.props.onSubmit(newContact);
    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
    })
  }

render(){
    return (
      <>
        <form onSubmit={this.handleSubmit}>
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
      </>
    )
  }
}

export default Form;