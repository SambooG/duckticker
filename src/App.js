// import React, { useState } from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import stockApi from './api/stockapi';
import './App.css';
import UserInfoBlock from "./components/userInfoBlock";
import SignUpForm from "./components/signup";
import SignInForm from "./components/signin";
// import ButtonBar from "./components/buttonBar";
import Duck from "./components/duck";


// REFERENCE: 
// The "Books" assignment from this class is good for what we're doing:
// 20-Week/02-Day/11-Stu_ReactRouter/Solved/client/src/pages/Books.js

// ----------------------------------------------------------------------
// Seed Data:
var fakeName = "Fakie";
var fakePortfolio = ["AAP", "AAON", "SNAP", "SQ"];
// ----------------------------------------------------------------------


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      userName: "",
      portfolio: []
    }
  } 


// FUNCTIONS
// ==========================================================================================  
// TODO: Add the update, edit, delete functions fot he stock portfolio.
//    Reference the Books.js from above



  // seedLogin = () => {
  //   // Later, we'll use this to update the user's ID when Login is working.
  //   this.state.userID = fakeName;
  //   this.state.userName = fakeName;
  //   this.state.portfolio = fakePortfolio;
  // }

  handleOnChange = (event) => { // Handles every time someone types in the input of the below form
    const { name, value } = event.target; // We get the name and value off of the input that is currently being typed in

    console.log("NAME: ", name, '\n', "VALUE: ", value);
    this.setState({ [name]: value }) // By using the name property (as long as it matches the same name in state) we only need one function for multiple inputs
  }

// update username from login
//call the api (findUserForLogin
//update state
logIn = () => {
  console.log("Logged In!")
}


// RENDER
// ==========================================================================================
  render() {
    return (
      <Router>
        <div className="App">
        <UserInfoBlock 
          userName = {this.state.userName}
        />
        <Duck />
          <Switch>
            <Route exact path="/signup" component={SignUpForm} />
            <Route 
              exact path="/signin" 
              component={SignInForm} 
              render={(props) => <SignInForm {...props}/>}
              />
            
            {/* <Route exact path="/buttonbar" component={ButtonBar} /> */}
          </Switch>
          
{/* 
<Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/> */}




          
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






      
