import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import { Link } from 'react-router-dom';


{/*Actual functionality to be added once merged 
 Only renders upon empty path. This can be the only url accessible to a non authenticated user when we impliment login.*/}

class SignInCard extends Component {
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
        <Button className="btn-lg btn-dark btn-block">Log In</Button>
        <Link to="/signup">Sign Up</Link>

      </Form>
    )
  }
}

export default SignInCard;