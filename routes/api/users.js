const router = require("express").Router();
const usersController = require("../../controller/usersController");

// Matches with "/api/books"
router.route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
