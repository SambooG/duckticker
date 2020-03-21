import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';
import { Link } from 'react-router-dom';

{/*Actual functionality to be added once merged */}

class SignUpCard extends Component {
    render() {
        return (
            <Form className="login-form">
                <h1></h1>
                <h2>Register New Account</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text" placeholder="John" />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="text" placeholder="Doe" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Register</Button>
                <Link to="/">Already have an account?</Link>

            </Form>
        )
    }
}

export default SignUpCard;