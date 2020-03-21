import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import SignUpForm from "./components/signup";
import SignInForm from "./components/signin";
import Nav from "./components/Nav";
import WelcomeCard from "./components/WelcomeCard";
import PortfolioCard from "./components/PortfolioCard";
import SignInCard from "./components/SignInCard";
import SignUpCard from "./components/SignUpCard";
import './App.css';
import GraphDashboard from './components/graph-dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      userName: "Fakie",
      portfolio: ["AAP", "AAON", "SNAP", "SQ"]
    }
  } 


// FUNCTIONS
// ==========================================================================================  
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
          <Nav />
        {/* <UserInfoBlock username = {this.state.userName}/> */}
          <Switch>
            <Route 
              exact path = {"/signup"}
              render={(props) => <SignInForm {...props} username = {this.state.userName} handleOnChange = {this.handleOnChange} login={this.logIn}/> }
            />
            <Route exact path = {"/signin"} render={SignUpForm} />
            <Route path="/home" component={WelcomeCard} />
            <Route path="/portfolio" component={PortfolioCard} />
            <Route path="/" exact component={SignInCard} />
            <Route path="/signup" component={SignUpCard} />
            <Route 
              exact path = {"/graphdashboard"}
              render={(props) => <GraphDashboard {...props} userPortfolio = {this.state.portfolio}/> }
            /> {/* This structure comes from: https://tylermcginnis.com/react-router-pass-props-to-components/    */}
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;






// Still need to implement a back button, and a logout button into the nav menu and add it to the routing */ }

/* Login page is not currently accessible through navigation. 
Currently it will be loaded based on (lack of)authentication and first time visiting site or manually entering an empty url. 
Log out button could navigate to this page*/


// REFERENCE: 
// The "Books" assignment from this class is good for what we're doing:
// 20-Week/02-Day/11-Stu_ReactRouter/Solved/client/src/pages/Books.js


// TODO: Add the update, edit, delete functions fot he stock portfolio.
//    Reference the Books.js from above



// This would create components for each stock.. theoretically, I can't remember if it actually works...
//           <div>
//             {
//               this.state.portfolio.map(symbol => (
//                 // Map funtion stays in app.js, but componetize "button" or "duck" or whatever
//                 <button onClick={() => getStockData(symbol)}>
//                   Get {symbol} Stock!
//                 </button>
//               ))
//             }
//             {data} 
//           </div>