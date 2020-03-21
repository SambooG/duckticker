import React, { Component } from 'react';
import axios from 'axios';

function SignInForm (props){

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

    return (
      <div>
        <h1>Sign Up Form!</h1>
        <input onChange={props.handleOnChange} name="userName" type="text" value={props.username} />
        <input name="password" type="password"  />
              {/* <input onChange={props} name="password" type="password" value={props.password} /> */}
        <button onClick={props.login}>Login</button>
              {/* <button onClick={this.handleLogin}>Login</button> */}
      </div>
    )
}

export default SignInForm;