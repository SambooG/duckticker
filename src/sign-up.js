import React, { Component } from 'react';
import axios from 'axios';

// These can and should be separate components. One sign in and one log in
export default class SignUpAndLoginClassVersion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  } 

  handleOnChange = (event) => { // Handles every time someone types in the input of the below form
    const { name, value } = event.target; // We get the name and value off of the input that is currently being typed in

    console.log("NAME: ", name, '\n', "VALUE: ", value);
    this.setState({ [name]: value }) // By using the name property (as long as it matches the same name in state) we only need one function for multiple inputs
  }

  handleSubmit = () => { // Actually submits the form to the backend
    axios.post('/signup', { email: this.state.email, password: this.state.password })
      .then(response => console.log("RESPONSE: ", response))
      .catch(error => console.log("ERROR: ", error));
  }

  handleLogin = () => {
    axios.post('/login', { email: this.state.email, password: this.state.password })
    .then(response => {
      if (response.data) { // response.data holds our id or user key, etc..
        localStorage.setItem('key', response.data);
      }
      console.log("RESPONSE: ", response.data)
    })
    .catch(error => console.log("ERROR: ", error));
  }

  render () {
    return (
      <div>
        <h1>Sign Up Form!</h1>
        <input onChange={this.handleOnChange} name="email" type="email" value={this.state.email} />
        <input onChange={this.handleOnChange} name="password" type="password" value={this.state.password} />
        <button onClick={this.handleSubmit}>Sign Up!</button>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

