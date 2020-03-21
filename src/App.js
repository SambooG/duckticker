import React from "react";
import Nav from "./components/Nav";
import WelcomeCard from "./components/WelcomeCard";
import PortfolioCard from "./components/PortfolioCard";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInCard from "./components/SignInCard";
import SignUpCard from "./components/SignUpCard";

{/*Still need to implement a back button, and a logout button into the nav menu and add it to the routing */ }

{/*Login page is not currently accessible through navigation. 
Currently it will be loaded based on (lack of)authentication and first time visiting site or manually entering an empty url. 
Log out button could navigate to this page*/}

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/home" component={WelcomeCard} />
          <Route path="/portfolio" component={PortfolioCard} />
          <Route path="/" exact component={SignInCard} />
          <Route path="/signup" component={SignUpCard} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
