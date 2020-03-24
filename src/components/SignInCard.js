import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

/*
Actual functionality to be added once merged 
 Only renders upon empty path. This can be the only url accessible to a non authenticated user when we impliment login.
 */

class SignInCard extends Component {
  // You still need to handle getting the email and password from the inputs to submit it to signUp and logIn

  handleSignUp = () => {
    axios.post('/api/users/signup', { email: 'ENTER EMAIL HERE', password: 'ENTER PASSWORD HERE' })
      .then(response => {
        // In signup in userController, you should return the user id, so you can store it and track a user being logged in
        console.log("WAS Successful!")
        localStorage.setItem('user', response.data); // And you can use this user now in your application
      })
      .catch(error => console.log("DID'T WORK!: ", error));
  }

  handleLogIn = () => {
    console.log("LOGGING IN!")
  }

  // SUPER SIMPLE logout
  handleLogOut = ()  => {
    localStorage.removeItem('user');
  }

  render() {
    return (
      <Form className="login-form">
        <h1>Duckticker</h1>
        <h2>Welcome to our page!</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block" onClick={this.handleLogIn}>Log In</Button>
        <Link to="/signup" onClick={this.handleSignUp}>Sign Up</Link>

      </Form>
    )
  }
}

export default SignInCard;