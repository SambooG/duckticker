//  "user.js" file in MODELS
// ======================================================================
const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  portfolio: [{ type: String }]
});



// seedDB
// ======================================================================
// SEEDS:
// Open up the Mongo Shell in the CLI and put these in:
// db.ducktickerUsersdb.insert({userName: "SamanthaSeed", date: new Date(Date.now()), password: "12345", portfolio: ["AMZN","FB","MSFT","GOOGL","F"]})
// db.ducktickerUsersdb.insert({userName: "HonoraSeed",   date: new Date(Date.now()), password: "12345", portfolio: ["DIS","SNAP","UBER","NFLX","FB"]})
// db.ducktickerUsersdb.insert({userName: "KyleSeed",     date: new Date(Date.now()), password: "12345", portfolio: ["TSLA","SBUX","WORK","NTDOY","TCEHY"]})

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