const axios = require ("axios");

// add & or needed symbol plus date requirement
// what to put in place of SQ symbol to take client request?
const stockUrl = "https://api.worldtradingdata.com/api/v1/history?symbol=SQ&api_token=jabpbTqjajp7ccWUMwei3kil7q7JZqoMPJYmzeBWAJTDGwAMsPAQ9NQWDeEt";
  
let tenDaysAgoStockInfo; 
let todayStockinfo;

// string concat onto stockUrl+
// make a second get request. diff variable than line 18
  axios
  .get(stockUrl)
    .then(response => {
      // Getting a data object from response that contains the necessary data from the server
      const data = response.data;
      console.log('data', data);
      // Save the unique id that the server gives to our object
      tenDaysAgoStockInfo = data;
})
// Catch and print errors if any
.catch(error => console.error('On create ', error));
      // Object.keys(data)
        // .forEach(key => url.searchParams.append(key, params[key]));
  
  // axios.post(stockUrl, stockInfo)
  // Handle a successful response from the server
  // .then(response => {
          // Getting a data object from response that contains the necessary data from the server
  //         const data = response.data;
  //         console.log('data', data);
  //         // Save the unique id that the server gives to our object
  //         stockInfo = data._id;
  // })
  // // Catch and print errors if any
  // .catch(error => console.error('On create ', error));
      
  