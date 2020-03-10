const mongoose = require("mongoose");
const db = require("../models");

// This file empties the ducktickerUser collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ducktickerUsers"  //TODO: was originally "reactreadinglist" - this database needs to be created!
);

const userSeed = [
  {
    userName: "SamanthaSeed",
    date: new Date(Date.now()),
    password: "12345",
    portfolio: [
      "AMZN",
      "FB",
      "MSFT",
      "GOOGL",
      "F"
    ]
  },
  {
    userName: "HonoraSeed",
    date: new Date(Date.now()),
    password: "12345",
    portfolio: [
      "DIS",
      "SNAP",
      "UBER",
      "NFLX",
      "FB"
    ]
  },
  {
    userName: "KyleSeed",
    date: new Date(Date.now()),
    password: "12345",
    portfolio: [
      "TSLA",
      "SBUX",
      "WORK",
      "NTDOY",
      "TCEHY"
    ]
  }
];

db.User
  .deleteMany({})
  .then(() => db.ducktickerUsers.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
