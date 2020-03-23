const axios = require ("axios");

function getUserInfo(username, callback) { 
  
  let userName = username
  
  const URL = `http://localhost:3002/api/users/login/${userName}`;
  // TODO: How do I make this the web URL or the Local Host?

  axios
  .get(URL)
    .then(response => {
    console.log(response)
    callback(null, response.data) 
  })
  // Catch and print errors if any
  .catch(error => {
    console.log(error)
    callback(error)
  })
}
   
export default getUserInfo;