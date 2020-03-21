const axios = require ("axios");


function stockApi(symbol, callback) { 
  const apiToken = 'jabpbTqjajp7ccWUMwei3kil7q7JZqoMPJYmzeBWAJTDGwAMsPAQ9NQWDeEt';

  const todaysDate = new Date().toISOString().split("T")[0];

  let tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 20);
  tenDaysAgo = tenDaysAgo.toISOString().split("T")[0];
  
  // string concat onto stockUrl+
  const tenDayHistoricalStockApi = `https://api.worldtradingdata.com/api/v1/history?symbol=${symbol}&date_from=${tenDaysAgo}&date_to=${todaysDate}&api_token=${apiToken}`;
  
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