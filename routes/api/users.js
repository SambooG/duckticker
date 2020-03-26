const router = require("express").Router();
const usersController = require("../../controllers/usersController");
// const bodyParser = require('body-parser');
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


  /*
   For sigin, you have to first find the user by the email they provided, then compare
   the password the user provided with the one in the database
   */
  // router.route("/signin")
  // .get((req, res) => res.send('Signin!')) // <= can delete this line later
  // .post((req, res) => {
  //   const { password, email } = req.body; 
  //   // The below findByEmail, will get the user information from the database if it exists
  //   const user = usersController.findByEmail(email, (user) => {
  //     // If the user provided a non-existent email, then there is no user password to check, so just return
  //     if (!user) return res.status(401).send('You were unable to sign up');
  //     // compare the password:
  //     bcrypt.compare(password, user.password, function(err, isSame) { 
  //       // If the passwords do not match, or there was an error, return back an error
  //       if (err || !isSame ) return res.status(401).send('You were unable to sign up');
  //       // But if it does match, send back the user information or id, that can be used later and stored in localstorage for future requests
  //       else res.send(user);
  //     })
  //   })
  // })
router
  .route("/login/:userName")
  .get(usersController.findUserForLogin)
  .put(usersController.update)
  .delete(usersController.remove);

// Specific User:
// NOTE: This one has to be last in the list because it will interpret anything after "users/" as a user name and try to find it.
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  
 











module.exports = router;
