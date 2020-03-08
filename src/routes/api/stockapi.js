import React from "react";
import axios from "axios"




class StockForm extends React.Component {

    constructor(props) {
      super(props);
    
      this.state = {
        symbol: ''
      }
    }
  
    componentDidMount() {
      this.getStockData();
    }
  
    handleOnChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    getStockData = () => {
      const url = new URL(
        "https://api.worldtradingdata.com/api/v1/history"
      );
      
      let params = {
        "symbol": this.state.symbol,
        "api_token": "[jabpbTqjajp7ccWUMwei3kil7q7JZqoMPJYmzeBWAJTDGwAMsPAQ9NQWDeEt]",
        "date_from": this.state.from_date,
        "date_to": this.state.to_date
      };
      Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
      
      fetch(url, {
        method: "GET",
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }
    delete(e) {
        e.preventDefault();
        axios.delete("https://api.worldtradingdata.com/api/v1//{this.state.id")
        .then(res => console.log(res.data));
    }
  
  render(){
    return (
      <div>
        <input name="symbol" onChange={handleOnChange} value={this.state.symbol} />
        <button onClick={getStockData} />
        <button onClick={saveStockSettings} />
      </div>
      );
    }
}
  export default StockForm;