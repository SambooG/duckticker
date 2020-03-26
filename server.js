const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors')

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Resolves CORS issues
app.use(cors())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userlist");





// SAM'S BCRYPT EXAMPLE STARTS HERE
// ------------------------------------------------------------------------------------------------------------------------//


// const port = 4000 // already have a port, shouldn't need this

// FAKE MONGOOSE/MONGODB USERS TABLE. NO NEED TO LOOK INTO OR UNDERSTAND
// const Users = {
//   data: [],
//   create: function(newUser) {
//     this.data.push(newUser);
//   },
//   findAll: function() {
//     return this.data;
//   },
//   findOne: function({ email }) {
//     console.log("DATA: ", this.data, email);
//     return this.data.find(savedUser => savedUser.email === email);
//   }
// };



// Start the API server
app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}!`))
