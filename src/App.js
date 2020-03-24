import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUpForm from "./components/signup";
import Nav from "./components/Nav";
import WelcomeCard from "./components/WelcomeCard";
import PortfolioCard from "./components/PortfolioCard";
import SignInCard from "./components/SignInCard";
import SignUpCard from "./components/SignUpCard";
import UserInfoBlock from "./components/userInfoBlock";
import getUserInfo from "./api/getUserInfo";
import './App.css';
import GraphDashboard from './components/graph-dashboard';

{/*Login page is not currently accessible through navigation. 
Currently it will be loaded based on (lack of)authentication and first time visiting site or manually entering an empty url. 
Log out button could navigate to this page*/}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      userName: "Not Logged In",
      portfolio: ["Not Loggged In"]
    }
    this.processUserInfo = this.processUserInfo.bind(this)
  } 


// FUNCTIONS
// ==========================================================================================  


  logIn = (username) => {
    this.setState({userName: username}) 
    getUserInfo(username, this.processUserInfo)
  }

  processUserInfo (error, data){
    if (!error){
      console.log(data)
      this.setPortfolio(data)
    }
  }

  setPortfolio = (data) => {
    this.setState({portfolio: data.portfolio})
  }

  handleLogOut = () => {
    console.log("logout")
    this.setState({
      userID: "",
      userName: "Not Logged In",
      portfolio: ["Not Loggged In"]
    })
  }


// RENDER
// ==========================================================================================
  render() {
    return (
      <Router>
        <div className="App">
          <UserInfoBlock username = {this.state.userName} userPortfolio = {this.state.portfolio} logout = {this.handleLogOut}/>
          <Switch>
            <Route 
                exact path = {"/"}
                render={(props) => <SignInCard {...props} 
                  username = {this.state.userName} 
                  login = {this.logIn}
                  /> }
              />
            <Route path="/signup" component={SignUpCard} />
            <Fragment>
              <Nav />
              <Route path="/home" component={WelcomeCard} />
              <Route path="/portfolio" component={PortfolioCard} />        
                <Route 
                  exact path = {"/ducks"}
                  render={(props) => <GraphDashboard {...props} userPortfolio = {this.state.portfolio}/> }
                /> {/* This structure comes from: https://tylermcginnis.com/react-router-pass-props-to-components/    */}
            </Fragment>
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