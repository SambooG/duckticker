import React, { Component } from 'react';
import axios from 'axios';

// These can and should be separate components. One sign in and one log in
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
  } 

  handleOnChange = (event) => { // Handles every time someone types in the input of the below form
    const { name, value } = event.target; // We get the name and value off of the input that is currently being typed in

    console.log("NAME: ", name, '\n', "VALUE: ", value);
    this.setState({ [name]: value }) // By using the name property (as long as it matches the same name in state) we only need one function for multiple inputs
  }

  handleSubmit = () => { // Actually submits the form to the backend
    axios.post('/api/users/signup', { userName: this.state.userName, password: this.state.password })
      .then(response => console.log("RESPONSE: ", response))
      .catch(error => console.log("ERROR: ", error));
    // this.props.login(this.state.userName)
    
  }


  render () {
    return (
      <div>
        <h1>Sign Up Form!</h1>
        <input onChange={this.handleOnChange} name="userName" type="userName" value={this.state.userName} />
        <input onChange={this.handleOnChange} name="password" type="password" value={this.state.password} />
        <button onClick={this.handleSubmit}>{this.state.userName + ", "}Sign Up!</button>
      </div>
    )
  }
}

export default SignUpForm;