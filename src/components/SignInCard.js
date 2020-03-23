import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import { Link } from 'react-router-dom';

class SignInCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameValue: "",
      passwordValue: ""
    }
  } 

  handleInputChange = (event) => { // Handles every time someone types in the input of the below form
    const { name, value } = event.target; // We get the name and value off of the input that is currently being typed in
    console.log("NAME: ", name, '\n', "VALUE: ", value);
    this.setState({ [name]: value }) // By using the name property (as long as it matches the same name in state) we only need one function for multiple inputs
  }

  handleOnSubmit = () => {
    console.log(`username is ${this.state.usernameValue}`)
    this.props.login(this.state.usernameValue)
  }

render() {
  return (
    <Form 
      className="login-form"
      
      
      >
      <h1>Duckticker</h1>
      <h2>Welcome to our page!</h2>
      <FormGroup>
        <Label>Username</Label>
         <Input 
            name="usernameValue" 
            type="text" 
            placeholder="Enter your Username" 
            onChange={this.handleInputChange} 
            value={this.usernameValue} 
          />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
         <Input 
            name="password"
            type="password" 
            placeholder="Enter your Password"
            onChange={this.handleInputChange} 
            value={this.passwordValue}  
          />
      </FormGroup>
        <Button 
          onClick={this.handleOnSubmit} 
          className="btn-lg btn-dark btn-block"
          >Sign In {this.state.usernameValue}
        </Button>
      <Link to="/signup">Sign Up</Link>
    </Form>
    )
  }
}

export default SignInCard;




// ==================================================================//
  // This cool little bit of code could one day be used to make 
  // passwords actually work:
  // -------------------------------------------------------------------//
  // handleLogin = () => {
  //   axios.post('/login', //TODO: Figure out this URL
  //     { 
  //       userName: props.userName, 
  //       password: props.password 
  //     })
  //   .then(response => {
  //     if (response.data) { // response.data holds our id or user key, etc..
  //       localStorage.setItem('key', response.data);
  //     }
  //     console.log("RESPONSE: ", response.data)
  //   })
  //   .catch(error => console.log("ERROR: ", error));  
  // }
  // ==================================================================//