const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


// API Routes
// ====================================================================================================

// All Users: ----- /api/users/
router.route("/")
  .get(usersController.findAll)

// Post the signup information ----- api/users/signup
router.route("/signup")
  .get((req, res) => res.send('Signup!')) // <= can delete this line later
  .post((req, res) => {
    const {password} = req.body; 
    // Hash the password:
    bcrypt.hash(password, 12, function(err, hash) { 
      req.body.password = hash;
      usersController.create(req,res)
    })
  })

// Specific User:
// NOTE: This one has to be last in the list because it will interpret anything after "users/" as a user name and try to find it.
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);










module.exports = router;
