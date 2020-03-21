// import React, { useState } from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUpForm from "./components/signup";
import SignInForm from "./components/signin";


// REFERENCE: 
// The "Books" assignment from this class is good for what we're doing:
// 20-Week/02-Day/11-Stu_ReactRouter/Solved/client/src/pages/Books.js


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      userName: "",
      portfolio: ["AAP", "AAON", "SNAP", "SQ"]
    }
  } 


// FUNCTIONS
// ==========================================================================================  
// TODO: Add the update, edit, delete functions fot he stock portfolio.
//    Reference the Books.js from above


  handleOnChange = (event) => { // Handles every time someone types in the input of the below form
    const { name, value } = event.target; // We get the name and value off of the input that is currently being typed in

    console.log("NAME: ", name, '\n', "VALUE: ", value);
    this.setState({ [name]: value }) // By using the name property (as long as it matches the same name in state) we only need one function for multiple inputs
  }

logIn = () => {
  console.log(`${this.state.userName} logged in!`)
}




// RENDER
// ==========================================================================================
  render() {
    return (
      <Router>
        <div className="App">
        {/* <UserInfoBlock username = {this.state.userName}/> */}
          <Switch>
            <Route 
              exact path = {"/signup"}
              render={(props) => <SignInForm {...props} username = {this.state.userName} handleOnChange = {this.handleOnChange} login={this.logIn}/> }
            />
            <Route exact path = {"/signin"} render={SignUpForm} />
          </Switch>

          {/* <div>
            {
              this.state.portfolio.map(symbol => (
                // Map funtion stays in app.js, but componetize "button" or "duck" or whatever
                <button onClick={() => getStockData(symbol)}>
                  Get {symbol} Stock!
                </button>
              ))
            }
            {data} 
          </div>*/}

        </div>
      </Router>
    );
  }
}

export default App;






      
