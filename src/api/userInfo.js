
const axios = require ("axios");


function userInfo() { 
  
  let userID = "5e69a9ae67ddcb6271f3f649"
  const URL = `http://localhost:3002/api/users/${userID}`;
  // TODO: How do I make this the web URL or the Local Host?
  
  console.log("anything")

  axios
  .get(URL)
  .then(response => {
    const data = response.data;
    console.log('data', data);
    callback(data);
  })
  // Catch and print errors if any
  .catch(error => console.error('On Data Retrieval ', error));
}

      
  export default userInfo;