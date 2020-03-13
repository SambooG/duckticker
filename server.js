const express = require('express')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 4000

// FAKE MONGOOSE/MONGODB USERS TABLE. NO NEED TO LOOK INTO OR UNDERSTAND
const Users = {
  data: [],
  create: function(newUser) {
    this.data.push(newUser);
  },
  findAll: function() {
    return this.data;
  },
  findOne: function({ email }) {
    console.log("DATA: ", this.data, email);
    return this.data.find(savedUser => savedUser.email === email);
  }
};












app.get('/api', (req, res) => res.send('Hello World!'))

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 12, function(err, hash) { // HASH and discombobulate the users plain text password so no one knows what it is
    console.log("PASSWORD: ", password, '\n', "HASH: ", hash);
    Users.create({ id: `${Math.random()}`, email, password: hash });
    res.send(`USER CREATED! ${hash}`)
  });
})


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const allUsers = Users.findAll();
  console.log("USERS: ", allUsers);
  const userInfoInDatabase = Users.findOne({ email });

  // Bcrypt has internal tools to compare plaintext password against the hashed password in the database;
  bcrypt.compare(password, userInfoInDatabase.password, function(err, result) {
    if (result === true) { // Check if the passwords matched
      res.send(userInfoInDatabase.id)
    } else {
      res.send("You were unable to be logged in!");
    }
  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))