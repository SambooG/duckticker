const axios = require ("axios");


function stockApi(symbol, callback) { 
  const apiToken = '27SRJRVRIQJFROVP';

  const todaysDate = new Date().toISOString().split("T")[0];

  let tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 20);
  tenDaysAgo = tenDaysAgo.toISOString().split("T")[0];
  
  // string concat onto stockUrl+=IBMdemo
  const tenDayHistoricalStockApi = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiToken}`;
  
  axios
  .get(tenDayHistoricalStockApi)
  .then(response => {
    const data = response.data;
    console.log('data', data);
    callback(data);
  })
  // Catch and print errors if any
  .catch(error => console.error('On Data Retrieval ', error));
}

      
  export default stockApi;