import React from 'react';
<<<<<<< HEAD:src/graph-dashboard.js
import axios from 'axios';
import LineChart from './components/chart/apiChart';
import stockApi from './api/stockapi';

// Test data for symbols for stock api
=======
import LineChart from './chart/apiChart';
import stockApi from '../api/stockapi';

// Test data for symbols for stock api
const testData = []
>>>>>>> 4c3deb540e99bf96dbec1d788fc34c39440ddf53:src/components/graph-dashboard.js
// const testData = {
//   portfolio: [
//     "AMZN",
//     "AA",
//     "A",
//     "GOOGL",
//     "F"
//   ]
// };
<<<<<<< HEAD:src/graph-dashboard.js
=======


>>>>>>> 4c3deb540e99bf96dbec1d788fc34c39440ddf53:src/components/graph-dashboard.js

// WHAT'S LEFT

// { userName: 'Joe', portfolio: ['AARP', 'GOOG'] }

/**
  // Authentication
    // Sign up
      // get email, password, profile picture url, --> create inputs, and they need to know api endpoints and shape of data getting back
      // send to backend --> axios call
      // Api Endpoint being hit --
      // hash password --> backend perosn
      // save to db
      // return to front end --> what is the shape the front end is expecting and tell that person
      // store in front end *Make sure to persist on refreshes
    // Graph information
      // Portfolio information from somewhere --> from backend or top level component?
      // Push that into the graph and make it load
      // Is the user going to be able to update anything here?
        // Add another portfolio ITem
          // Make request to endpoint to upate user portfolio endpoint with updated data
          // Api endpoint
          // Verify the new portfolio item is a string and not malicious
          // Save it to the DB
          // Return the updated user to the front end
          // Front end to update the front end user information
          
 */
class GraphDashboard extends React.Component {
    state = {
      portfolio:[ "AMZN", "AA", "A", "GOOGL", "F" ], // We want this to populate from App.js
      labels: [],
      name: "",
      lineData: [],
      userPortfolio: [], // OPTION 3: this.props.user.portfolio || []
      data: null
    }

<<<<<<< HEAD:src/graph-dashboard.js
    componentDidMount() {
      // This is just to show you how it works
      axios.get(`/api/users/`) // findAll in the userController
      .then(response => {
        // 0 is the index for the array
        console.log(response.data[0]);
        this.setState({ 
          userPortfolio: response.data[0].portfolio,
        })
      })
      .catch(err => console.log("ERROR: ", err))


      // OPTION TWO BELOW
      // In an authenticated setting where you have the user id stored in local storage

      // if (localStorage.getItem('userid')) {
      //   axios.get(`/api/users/${localStorage.getItem('userid')}`)
      //   .then(response => this.setState({ userPortfolio: response.data.portfolio }))
      //   .catch(err => console.log("ERROR: ", err));
      //   // .finally(() => this.setState({ loading: false }))
      // }
      // else {
      //   this.setState({ loading: false });
      // }
=======
    getPortfolio = () => { // !!!!!!!!!! this doesn't actually work
    // Goal: is to update the portfolio in state with the props from app.js
      this.state.userPortfolio = this.props.userPortfolio;
>>>>>>> 4c3deb540e99bf96dbec1d788fc34c39440ddf53:src/components/graph-dashboard.js
    }

    getStockData = (symbol) => {
      // Using stockApi function from stockApi.js to get data for symbol that was clicked on
      stockApi(symbol, (stockData) => {
        console.log(stockData);
        const dateLabels = Object.keys(stockData.history); // Get the date keys from stockData

        // All the necessary initial info from the stockData is stored in state and passed to the lineChart
        this.setState({
          data: stockData,
          name: stockData.name,
          labels: dateLabels,
          lineData: dateLabels.map(datekey => stockData.history[datekey].close) // use date keys to get close data for each date
        })
      });
    };


    // This allows us to change the type of data we are getting for each date
    getDataType = (dataType) => {
      if (this.state.data) {
        const stockData = this.state.data;
        const dateLabels = Object.keys(stockData.history);
        this.setState({
          lineData: dateLabels.map(datekey => stockData.history[datekey][dataType])
        })
      }
    };


    render() {
        const dataKeys = ["open", "close", "high", "low", "volume"];
  
        return (
          <div>
            <div>
              {
<<<<<<< HEAD:src/graph-dashboard.js
                this.state.userPortfolio.map(stockSymbol => (
=======
                this.state.portfolio.map(stockSymbol => (
>>>>>>> 4c3deb540e99bf96dbec1d788fc34c39440ddf53:src/components/graph-dashboard.js
                  <button onClick = {() => this.getStockData(stockSymbol)} key={stockSymbol}>
                    {stockSymbol}
                  </button>
              ))}
            </div>
            <div>
              {
                //   creates all of the buttons dynamically for each key returned from api.
                dataKeys.map(dataType => (
                  <button onClick = {() => this.getDataType(dataType)} key={dataType}>
                    {dataType}
                  </button>
              ))}
            </div>

            <LineChart
            // this is where the graph renders on screen
              labels = {this.state.labels}
              name = {this.state.name}
              data = {this.state.lineData}
            />
          </div>
        )
    }
}

export default GraphDashboard;