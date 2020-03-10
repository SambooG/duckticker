import axios from "axios"

const stockUrl = new URL(
        "https://api.worldtradingdata.com/api/v1/history");
  
  
  axios
  .get("https://api.worldtradingdata.com/api/v1/history?symbol={}&api_token=jabpbTqjajp7ccWUMwei3kil7q7JZqoMPJYmzeBWAJTDGwAMsPAQ9NQWDeEt")
  .then(response => {
    const data= response.data})
      
  
      
      let stockParams = {
        "symbol": data.symbol,
        "api_token": "[jabpbTqjajp7ccWUMwei3kil7q7JZqoMPJYmzeBWAJTDGwAMsPAQ9NQWDeEt]",
        "date_from": this.from_date,
        "date_to": this.to_date
      };
      Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
      
  
  axios.post(stockUrl, stockParams)
  // Handle a successful response from the server
  .then(response => {
          // Getting a data object from response that contains the necessary data from the server
          const data = response.data;
          console.log('data', data);
          // Save the unique id that the server gives to our object
          stockInfo = data._id;
  })
  // Catch and print errors if any
  .catch(error => console.error('On create student error', error));
      
  