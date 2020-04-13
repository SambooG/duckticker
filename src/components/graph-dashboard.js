import React from 'react';
import axios from 'axios';
import LineChart from './chart/apiChart';
import stockApi from '../api/stockapi';

// Test data for symbols for stock api
// const testData = {
//   portfolio: [
//     "AMZN",
//     "AA",
//     "A",
//     "GOOGL",
//     "F"
//   ]
// };

class GraphDashboard extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    portfolio:[props.userPortfolio],
    // [props.userPortfolio], // We want this to populate from App.js
    labels: [],
    name: "",
    lineData: [],
    userPortfolio: [this.props.userPortfolio], // OPTION 3: this.props.user.portfolio || []
    data: null
    }
    }
    // componentDidMount() {
    //   // This is just to show you how it works
    //   axios.get(`/api/users/`) // findAll in the userController
    //   .then(response => {
    //     // 0 is the index for the array
    //     console.log(response.data[0]);
    //     this.setState({ 
    //       userPortfolio: response.data[0].portfolio,
    //     })
    //   })
    //   .catch(err => console.log("ERROR: ", err))


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
    // }

    getStockData = (symbol) => {
      // Using stockApi function from stockApi.js to get data for symbol that was clicked on
      stockApi(symbol, (stockData) => {
        console.log(stockData);
        const dateLabels = Object.keys(stockData["Time Series (Daily)"]); // Get the date keys from stockData

        // All the necessary initial info from the stockData is stored in state and passed to the lineChart
        this.setState({
          data: stockData,
          name: stockData["Meta Data"]["2. Symbol"],
          labels: dateLabels,
          lineData: dateLabels.map(datekey => stockData["Time Series (Daily)"][datekey]["4. close"]) // use date keys to get close data for each date
        })
      });
    };


    // This allows us to change the type of data we are getting for each date
    getDataType = (dataType) => {
      if (this.state.data) {
        const stockData = this.state.data;
        const dateLabels = Object.keys(stockData["Time Series (Daily)"]);
        this.setState({
          lineData: dateLabels.map(datekey => stockData["Time Series (Daily)"][datekey][dataType])
        })
      }
    };


    render() {
        const dataKeys = ["1. open", "2. high", "3. low", "4. close", "6. volume"];
        // const symbolButtons = [""]
        return (
          <div>
                <div>
                    {
                    this.props.portfolio.map(stockSymbol => (
                        <button onClick = {() => this.getStockData(stockSymbol)} key={stockSymbol}>
                    {stockSymbol}
                </button>))
                    }
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