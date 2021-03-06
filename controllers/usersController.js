const db = require("../models");

// Defining methods for the usersController.
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(email, cb) {
    db.User
      .findOne({ email: email })
      .then(dbModel => cb(dbModel))
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findByIdAndUpdate(req.params.id, req.body, {new:true})
      // .findOneAndUpdate({ "userName": req.params.userName }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserForLogin: function(req,res){
    db.User
      .findOne({"userName": req.params.userName})
      .then(dbModel => res.send(dbModel))
      .catch(err => res.status(422).json(err));
  }

};




