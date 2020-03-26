import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpCard extends Component {
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
    this.props.login(this.state.userName)
    
  }

    render() {
        return (
            <Form className="login-form">
                <h1></h1>
                <h2>Register New Account</h2>
                <FormGroup>
                    <Label>User Name</Label>
                    <Input onChange={this.handleOnChange} name="userName" type="userName" placeholder="Email" value={this.state.userName} />
                </FormGroup>
                {/* <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text" placeholder="John" />
                </FormGroup> */}
                {/* <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="text" placeholder="Doe" />
                </FormGroup> */}
                <FormGroup>
                    <Label>Password</Label>
                    <Input onChange = {this.handleOnChange} name="password" type="password" placeholder="Password" value={this.state.password} />
                </FormGroup>
                <Button onClick={this.handleSubmit} className="btn-lg btn-dark btn-block">Sign Up{" as " + this.state.userName}</Button>
                <Link to="/">Already have an account?</Link>

            </Form>
        )
    }
}

export default SignUpCard;