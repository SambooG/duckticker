import React from 'react';
import LineChart from './components/chart/apiChart';
import stockApi from './api/stockapi';

// Test data for symbols for stock api
const testData = {
  portfolio: [
    "AMZN",
    "AA",
    "A",
    "GOOGL",
    "F"
  ]
};

class GraphDashboard extends React.Component {
    state = {
      labels: [],
      name: "",
      lineData: [],
      data: null
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
                testData.portfolio.map(stockSymbol => (
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